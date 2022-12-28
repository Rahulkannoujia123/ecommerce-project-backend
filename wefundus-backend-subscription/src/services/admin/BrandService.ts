import { S3_DIRECTORY } from "../../constants/S3Constant";
import { BrandInterface } from "../../interfaces/BrandInterface";
import BrandModel from "../../models/BrandModel";
import { FileUpload } from "../../utils/FileUpload";
import { ObjectId } from 'mongoose';
import { ApiFeatures } from "../../utils/ApiFeatures";
import ProductModel from "../../models/ProductModel";
import { generateSlug } from "../../helpers/SlugHelper";

class BrandService {

    /**
     * 
     * @param name 
     * @param logoImage 
     * @param categories 
     * @returns new added brand
     */
    async addBrand(
        name: string,
        logoImage: any,
        categories: string[] | ObjectId[]
    ): Promise<{ brand: BrandInterface } | void> {
        const slug = await generateSlug(name, 'Brand');
        const logo = await this.uploadBrandImage(logoImage);
        return { brand: await BrandModel.create({ name, logo, categories, slug }) };
    }

    /**
     * 
     * @param file any file
     * @returns upload file base path on s3
     */
    private async uploadBrandImage(file: any): Promise<string> {
        const directory = S3_DIRECTORY.brand;
        const fileName = file.originalFilename;
        return await new FileUpload().uploadFileOnS3(file, directory, fileName);
    }

    /**
     * 
     * @param queryString 
     * @returns 
     */

    async list(queryString: any): Promise<{ count: number, list: BrandInterface[] }> {
        const countQuery = BrandModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const listQuery = BrandModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(listQuery, queryString)
            .filtering()
            .searching(['name'])
            .sorting('-createdAt')
            .fieldsLimiting()
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;
        return { list, count };
    }


    async edit(
        id: string,
        logoImage: any,
        name: string,
        categories: string[] | ObjectId[]): Promise<BrandInterface> {
        const brand = await BrandModel.findById(id);
        let logo = brand.logo;
        const slug = await generateSlug(name, 'Brand');
        if (logoImage) {
            logo = await this.uploadBrandImage(logoImage);
        }

        brand.name = name;
        brand.categories = categories;
        brand.logo = logo;
        brand.updateAt = new Date();
        brand.slug = slug;
        await brand.save();
        await ProductModel.updateMany({ brandId: brand._id }, { brandName: brand.name, brandSlug: brand.slug });
        return brand;
    }


}

export default new BrandService();