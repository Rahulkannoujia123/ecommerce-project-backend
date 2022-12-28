import { S3_DIRECTORY } from "../../constants/S3Constant";
import ResponseHelper from "../../helpers/ResponseHelper";
import { generateSlug } from "../../helpers/SlugHelper";
import { ResInterface } from "../../interfaces/ReqInterface";
import { SectionInterface } from "../../interfaces/SectionInterface";
import ProductModel from "../../models/ProductModel";
import SectionModel from "../../models/SectionModel";
import SubcategoryModel from "../../models/SubcategoryModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import { FileUpload } from "../../utils/FileUpload";
import SearchService from "./SearchService";

class SectionService {

    /**
     * 
     * @param category category id
     * @param subcategory subcategory id
     * @param name section name
     * @param res {Promise<SectionInterface>}
     */
    async add(
        category: string,
        subcategory: string,
        name: string,
        image: any,
        res: ResInterface
    ): Promise<SectionInterface | void> {
        const isExist = await SubcategoryModel.findOne({ category, _id: subcategory, isDeleted: false });
        if (isExist) {
            const slug = await generateSlug(name, 'Section');
            const imageRemoteName = await this.uploadSectionImage(image);
            const newSection = await SectionModel.create(
                {
                    category,
                    subcategory,
                    name,
                    slug,
                    image: imageRemoteName,
                    categorySlug: isExist.categorySlug,
                    subcategorySlug: isExist.slug
                }
            );
            await SearchService.addSectionDocument(newSection);
            return newSection;
        }
        return ResponseHelper.badRequest(res, res.__('invalid_category_subcategory'), { category, subcategory });
    }


    /**
     * 
     * @param file any file
     * @returns upload file base path on s3
     */
    private async uploadSectionImage(file: any): Promise<string> {
        const directory = S3_DIRECTORY.section;
        const fileName = file.originalFilename;
        return await new FileUpload().uploadFileOnS3(file, directory, fileName);
    }


    /**
    * 
    * @param id {String} section id for fetching section
    * @returns {Promise<SectionInterface>} section data by id
    */

    async getSectionData(
        id: string
    ): Promise<SectionInterface> {
        const getSectionData: SectionInterface = await SectionModel.findById(id);
        return getSectionData;
    }


    /**
     * 
     * @param sectionId {String} section id for updating section
     * @param category {String} category id
     * @param subcategory {String} subcategory id
     * @param name {String} name of section
     * @param res response Object 
     * @returns {Promise<SectionInterface>} update section object
     */

    async update(
        sectionId: string,
        category: string,
        subcategory: string,
        name: string,
        image: any,
        res: ResInterface
    ): Promise<SectionInterface | void> {
        const isExist = await SubcategoryModel.findOne({ category, _id: subcategory, isDeleted: false });
        if (isExist) {
            const section = await SectionModel.findById(sectionId);
            let slug = section.slug;
            if (section.name !== name) {
                slug = await generateSlug(name, 'Section');
            }
            let imageUrl = section.image;
            if (image) imageUrl = await this.uploadSectionImage(image);
            section.slug = slug;
            section.name = name;
            section.image = imageUrl;
            await section.save();

            await ProductModel.updateMany(
                {
                    sectionId: sectionId
                },
                {
                    sectionName: name,
                    sectionSlug: slug
                }
            );

            await SearchService.updateSectionDocument(section);

            return section;
        }
        return ResponseHelper.badRequest(res, res.__('invalid_category_subcategory'), { category, subcategory });
    }


    /**
     * 
     * @param id {String} section id for deleting section
     * @returns {Promise<SectionInterface>} deleted section
     */

    async delete(
        id: string,
    ): Promise<SectionInterface> {
        const deletedSection: SectionInterface = await SectionModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        return deletedSection;
    }

    /**
    * 
    * @param queryString req query object
    * @params subcategory id of subcategory
    * @returns 
    */

    async list(
        queryString: any,
        subcategory: string
    ): Promise<{ count: number, list: SectionInterface[] }> {
        const countQuery = SectionModel.find({ isDeleted: false, subcategory });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const lisQuery = SectionModel.find({ isDeleted: false, subcategory });
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

export default new SectionService();