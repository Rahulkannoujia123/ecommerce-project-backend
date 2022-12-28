import { SubCategoryInterface } from "../../interfaces/SubcategoryInterface";
import ProductModel from "../../models/ProductModel";
import SectionModel from "../../models/SectionModel";
import SubcategoryModel from "../../models/SubcategoryModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import SearchService from "./SearchService";


class SubcategoryService {

    /**
     * 
     * @param name {string} name of subcategory
     * @param category {string} object_id of category
     * @param image {string} absolute path of category image
     * @returns category {Promise<SubCategoryInterface>} new added category
     */
    async add(
        name: string,
        category: string,
        categorySlug: string,
        slug: string,
        image: string,
    ): Promise<SubCategoryInterface> {

        const newSubCategory: SubCategoryInterface = await SubcategoryModel.create({ name, category, image, slug, categorySlug });
        await SearchService.addSubcategoryDocument(newSubCategory);
        return newSubCategory;
    }

    /**
     * 
     * @param _id id of subcategory
     * @param name name of subcategory
     * @param category related category id
     * @param image image absolute path (url)
     * @returns  {Promise<SubcategoryInterface>}
     */

    async update(
        _id: string,
        name: string,
        category: string,
        image: string,
        slug: string,
        categorySlug: string
    ): Promise<SubCategoryInterface> {
        const updatedSubCategory: SubCategoryInterface = await SubcategoryModel.findByIdAndUpdate(
            _id,
            {
                name,
                category,
                image,
                slug,
                categorySlug
            },
            {
                new: true
            }
        );

        await ProductModel.updateMany(
            {
                subcategoryId: _id
            },
            {
                subcategoryName: name,
                subcategorySlug: slug
            }
        );


        await SectionModel.updateMany({ subcategory: _id }, { subcategorySlug: slug, subcategoryName: name });
        await SearchService.updateSubcategoryDocument(updatedSubCategory);
        return updatedSubCategory;
    }

    /**
     * 
     * @param id {String} subcategory id
     * @returns {Promise<SubcategoryInterface>} subcategory data
     */
    async get(
        id: string,
    ): Promise<SubCategoryInterface> {
        const subCategoryData: any = await SubcategoryModel.findById(id);
        return subCategoryData;
    }

    /**
    * 
    * @param id {String} subcategory id
    * @returns {Promise<SubcategoryInterface>} subcategory data
    */
    async delete(
        _id: string,
        isDeleted: boolean
    ): Promise<SubCategoryInterface> {
        const subCategoryData: any = await SubcategoryModel.findByIdAndUpdate(_id, { isDeleted });
        return subCategoryData;
    }


    /**
    * 
    * @param queryString req query object
    * @params subcategory id of subcategory
    * @returns 
    */
    async list(
        queryString: any,
        category: string
    ): Promise<{ count: number, list: SubCategoryInterface[] }> {
        const countQuery = SubcategoryModel.find({ isDeleted: false, category });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const lisQuery = SubcategoryModel.find({ isDeleted: false, category });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .filtering()
            .searching(['name'])
            .sorting('-createdAt')
            .fieldsLimiting()
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { count, list };
    }
}

export default new SubcategoryService;