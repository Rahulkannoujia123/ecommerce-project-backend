import { CategoryInterface } from "../../interfaces/CategoryInterface";
import { TaxCategoryInterface } from "../../interfaces/TaxCategoryInterface";
import CategoryModel from "../../models/CategoryModel";
import TaxCategoryModel from "../../models/TaxCategoryModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import { FileUpload } from "../../utils/FileUpload";
import axios from 'axios';
import { ObjectId } from 'mongoose'
import ProductModel from "../../models/ProductModel";
import { generateSlug } from "../../helpers/SlugHelper";
import SubcategoryModel from "../../models/SubcategoryModel";
import SectionModel from "../../models/SectionModel";
import SearchService from "./SearchService";

class CategoryService {

    /**
     * 
     * @param name {string} name of category
     * @param image {string} absolute path of category image
     * @returns category {Promise<CategoryInterface>} new added category
     */
    async add(
        name: string,
        image: string,
    ): Promise<CategoryInterface> {
        const slug = await generateSlug(name, 'Category');
        const newCategory: CategoryInterface = await CategoryModel.create({ name, image, slug });
        await SearchService.addCategoryDocument(newCategory);
        return newCategory;
    }

    /**
     * 
     * @param image {File} image to be uploaded
     * @param directory {String} image directory name
     * @returns {Promise<{url: string}>} uploaded image base path
     */

    async uploadImage(
        image: any,
        directory: string
    ): Promise<{
        url: string
    }> {
        const fileName = `${Date.now()}-${image.originalFilename}`;
        return { url: await new FileUpload().uploadFileOnS3(image, directory, fileName) }
    }

    /** @param id {String} category id for updating category
    * @param name name of category
    * @param image image url of category
    * @returns {Promise<CategoryInterface>} updated category
    */

    async update(
        id: string,
        name: string,
        image: string,
    ): Promise<CategoryInterface> {
        const category = await CategoryModel.findById(id);
        let slug = category.slug;
        if (category.name !== name) {
            slug = await generateSlug(name, 'Category');
        }
        const updateCategory: CategoryInterface = await CategoryModel.findByIdAndUpdate(
            id,
            {
                name,
                image,
                slug
            },
            {
                new: true
            }
        );

        await ProductModel.updateMany(
            {
                categoryId: updateCategory._id
            },
            {
                categoryName: name,
                categorySlug: slug
            }
        );

        await SubcategoryModel.updateMany({ category: category._id }, { categorySlug: slug, categoryName: name });
        await SectionModel.updateMany({ category: category._id }, { categorySlug: slug, categoryName: name });
        await SearchService.updateCategoryDocument(updateCategory);
        return updateCategory;
    }


    /**
     * 
     * @param id {String} category id for deleting category
     * @returns {Promise<CategoryInterface>} deleted category
     */

    async delete(
        id: string,
    ): Promise<CategoryInterface> {
        const deletedCategory: CategoryInterface = await CategoryModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        return deletedCategory;
    }

    /**
    * 
    * @param id {String} category id for fetching category
    * @returns {Promise<CategoryInterface>} category data by id
    */

    async findCategory(
        id: string | ObjectId
    ): Promise<CategoryInterface> {
        const categoryData: CategoryInterface = await CategoryModel.findById(id);
        return categoryData;
    }


    /**
     * 
     * @param queryString 
     * @returns 
     */
    async list(
        queryString: any
    ): Promise<{ count: number, list: CategoryInterface[] }> {
        const countQuery = CategoryModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const lisQuery = CategoryModel.find({ isDeleted: false });
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

    async addTaxCategories(): Promise<TaxCategoryInterface> {
        const taxCategoryData = await axios({
            method: 'get',
            url: 'https://api.sandbox.taxjar.com/v2/categories',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.TAXJAR_API_KEY}`
            }
        });
        const options = { ordered: true };
        TaxCategoryModel.insertMany(taxCategoryData.data.categories, options);
        return taxCategoryData.data;

    }
    /**
    * 
    * @returns {Promise<TaxCategoryInterface>} Tax category data list
    */
    async getTaxCategories(): Promise<TaxCategoryInterface> {

        const taxCategorydata: any = await TaxCategoryModel.find();
        return taxCategorydata;


    }
}

export default new CategoryService();