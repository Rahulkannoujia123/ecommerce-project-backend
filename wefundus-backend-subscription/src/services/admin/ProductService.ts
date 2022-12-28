
import { IMAGE_SIZES } from "../../constants/ProductConstant";
import { S3_DIRECTORY } from "../../constants/S3Constant";
import { ProductInterface } from "../../interfaces/ProductInterface";
import ProductModel from "../../models/ProductModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import { FileUpload } from "../../utils/FileUpload";
import * as sharp from 'sharp';
import * as fs from 'fs';
import CategoryModel from "../../models/CategoryModel";
import SubcategoryModel from "../../models/SubcategoryModel";
import BrandModel from "../../models/BrandModel";
import SectionModel from "../../models/SectionModel";
import FilterService from "./FilterService";

class ProductService {
    async add(productData: any): Promise<ProductInterface> {
        productData.sku = await this.generateSku();
        productData = await this.getCategoryBrandData(productData);
        const newProduct: ProductInterface = await ProductModel.create(productData);
        const slug = `${newProduct.name.split(' ').join('-')}-${newProduct._id}`;
        newProduct.slug = slug;
        await newProduct.save();
        return newProduct;
    }

    /**
     * 
     * @returns {Promise<string>} unique product sku
     */
    async generateSku(): Promise<string> {
        let code = this.getCode();
        const isCodeExist = await ProductModel.exists({ sku: code });
        if (isCodeExist) {
            code = await this.generateSku();
        }
        return code;
    }

    /**
     * 
     * @param productData 
     * @returns updated productData with category subcategory and section name
     */
    async getCategoryBrandData(productData: any): Promise<any> {
        const { categoryId, subcategoryId, brandId, sectionId } = productData;

        const category = await CategoryModel.findById(categoryId);
        const subcategory = await SubcategoryModel.findById(subcategoryId);
        const brand = await BrandModel.findById(brandId);
        const section = await SectionModel.findById(sectionId);

        productData.brandName = brand.name;
        productData.categoryName = category.name;
        productData.subcategoryName = subcategory.name;
        productData.sectionName = section.name;
        productData.brandSlug = brand.slug;
        productData.categorySlug = category.slug;
        productData.subcategorySlug = subcategory.slug;
        productData.sectionSlug = section.slug;

        await FilterService.updateFilter(
            categoryId,
            {
                colors: productData.colors as string[],
                brand: { _id: brand._id, name: brand.name, slug: brand.slug },
                subcategory: { _id: subcategory._id, name: subcategory.name, slug: subcategory.slug },
                price: productData.salePrice as number,
            }
        )

        return productData;

    }

    /**
     * 
     * @returns {String} a 10 digits code
     */
    getCode(): string {
        let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < 10; i++) {
            code += digits[Math.floor(Math.random() * 36)];
        }
        return code;
    }

    /**
     * 
     * @param productId product id of 
     * @param photos 
     * @param coverPhoto 
     * @returns 
     */

    async uploadImage(
        productId: string,
        photos: any,
        coverPhoto: File,
        product: ProductInterface
    ): Promise<ProductInterface> {
        // const product = await ProductModel.findById(productId);

        let coverPhotoUrl = product.coverPhoto;
        if (coverPhoto) {
            coverPhotoUrl = await this.uploadCoverPhoto(coverPhoto, productId);
        }
        let allPhotos = product.photos;
        const photosUrl = await this.uploadPhotos(photos, productId);
        allPhotos.push(...photosUrl);

        return await ProductModel.findByIdAndUpdate(
            productId,
            {
                coverPhoto: coverPhotoUrl,
                photos: allPhotos
            },
            {
                new: true
            });
    }

    /**
     * 
     * @param photos 
     * @param productId 
     * @returns 
     */

    private async uploadPhotos(photos: any, productId: string): Promise<string[]> {
        const photosUrl: string[] = [];
        if (Array.isArray(photos)) {
            for (const photo of photos) {
                photosUrl.push(await this.uploadPhoto(photo, productId))
            }
        }
        else if (photos) {
            photosUrl.push(await this.uploadPhoto(photos, productId))
        }
        return photosUrl;
    }

    /**
     * @description upload a photo on s3
     * @param photo 
     * @param productId 
     * @returns 
     */
    private async uploadPhoto(photo: any, productId: string): Promise<string> {
        const directoryPhoto = `${S3_DIRECTORY.product}/${productId}/photos`;
        const fileName = `${photo.originalFilename}`;
        return await new FileUpload().uploadFileOnS3(photo, directoryPhoto, fileName);
    }

    /**
     * @description upload cover photo
     * @param coverPhoto 
     * @param productId 
     * @returns 
     */
    private async uploadCoverPhoto(coverPhoto: any, productId: string): Promise<string> {
        const directoryCover = `${S3_DIRECTORY.product}/${productId}/cover-photo`;
        const coverPhotoExtension = this.getFileExtension(coverPhoto.mimetype);
        const fileName = `default.${coverPhotoExtension}`;
        const coverPhotoUrl = await new FileUpload().uploadFileOnS3(coverPhoto, directoryCover, fileName);
        await this.uploadImageCopy(coverPhoto, directoryCover);
        return coverPhotoUrl;
    }

    /**
        * 
        * @param file
        * @param directory
        * @returns 
        * @description Upload cover photo different sizes on s3
        */
    private async uploadImageCopy(file: any, directory: string): Promise<boolean> {
        const imageConfiguration = IMAGE_SIZES;
        for (const imgConfig of imageConfiguration) {
            const buffer = fs.readFileSync(file.filepath);
            const resizedImage = await sharp(buffer)
                .resize(imgConfig.width, imgConfig.height)
                .toFormat("jpeg")
                .toBuffer()
                .then((res: any) => {
                    return res
                });

            await new FileUpload().uploadFileOnS3(
                file,
                directory,
                `${imgConfig.width}x${imgConfig.height}.jpeg`,
                resizedImage
            );
        }
        return true

    }
    /**
       * 
       * @param coverPhoto
       * @param productId
       * @returns 
       * @description change cover photo different sizes on s3 
       */
    async changeCoverPhoto(coverPhoto: any, productId: string): Promise<ProductInterface> {
        const coverPhotoUrl = await this.uploadCoverPhoto(coverPhoto, productId);
        const product = await ProductModel.findByIdAndUpdate(
            productId,
            { coverPhoto: coverPhotoUrl },
            { new: true }
        );
        return product;
    }

    private getFileExtension(mimetype: string): string {
        return mimetype.split('/')[1]
    }

    /** 
      * @param queryString 
      * @returns 
      */

    async list(
        queryString: any
    ): Promise<{ count: number, list: ProductInterface[] }> {
        const countQuery = ProductModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const lisQuery = ProductModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .filtering()
            .searching(['name'])
            .sorting('-createdAt')
            .fieldsLimiting()
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { list, count };
    }
    /**
        * 
        * @param id {String} product id for edit product
        * @returns {Promise<ProductInterface>} edit product
        */
    async edit(productData: any, id: string): Promise<ProductInterface> {
        const editProduct: ProductInterface = await ProductModel.findByIdAndUpdate(
            id, productData);
        return editProduct;
    }
    /**
        * 
        * @param id {String} product id for deleting product
        * @returns {Promise<ProductInterface>} deleted product
        */

    async delete(
        id: string,
    ): Promise<ProductInterface> {
        const deletedProduct: ProductInterface = await ProductModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        return deletedProduct;
    }
    /**
       * 
       * @param id {String} product id for delete productId
       * @param id {String} coverPhotoUrl for deleted coverphotoUrl 
       * @returns {Promise<ProductInterface>} deleteCoverImage
       */
    async deleteCoverImage(
        id: string,
        coverPhotoUrl: string,
    ): Promise<ProductInterface> {
        await new FileUpload().removeFileFromS3(coverPhotoUrl)
        const deleteCoverImage: ProductInterface = await ProductModel.findOneAndUpdate({ _id: id }, { isDeleted: true, coverPhoto: '' })
        return deleteCoverImage;
    }


    async deletePhoto(
        id: string,
        photoUrl: string,
    ): Promise<ProductInterface> {
        await new FileUpload().removeFileFromS3(photoUrl)
        const product = await ProductModel.findById(id);
        product.photos = product.photos.filter(e => e !== photoUrl);
        await product.save();
        return product;
    }


    async fetchProduct(productId: string): Promise<{ product: ProductInterface }> {
        return { product: await ProductModel.findById(productId) };
    }

}
export default new ProductService();