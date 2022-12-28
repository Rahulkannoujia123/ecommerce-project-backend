"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel_1 = require("../../models/CategoryModel");
const TaxCategoryModel_1 = require("../../models/TaxCategoryModel");
const ApiFeatures_1 = require("../../utils/ApiFeatures");
const FileUpload_1 = require("../../utils/FileUpload");
const axios_1 = require("axios");
const ProductModel_1 = require("../../models/ProductModel");
const SlugHelper_1 = require("../../helpers/SlugHelper");
const SubcategoryModel_1 = require("../../models/SubcategoryModel");
const SectionModel_1 = require("../../models/SectionModel");
const SearchService_1 = require("./SearchService");
class CategoryService {
    /**
     *
     * @param name {string} name of category
     * @param image {string} absolute path of category image
     * @returns category {Promise<CategoryInterface>} new added category
     */
    add(name, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const slug = yield (0, SlugHelper_1.generateSlug)(name, 'Category');
            const newCategory = yield CategoryModel_1.default.create({ name, image, slug });
            yield SearchService_1.default.addCategoryDocument(newCategory);
            return newCategory;
        });
    }
    /**
     *
     * @param image {File} image to be uploaded
     * @param directory {String} image directory name
     * @returns {Promise<{url: string}>} uploaded image base path
     */
    uploadImage(image, directory) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = `${Date.now()}-${image.originalFilename}`;
            return { url: yield new FileUpload_1.FileUpload().uploadFileOnS3(image, directory, fileName) };
        });
    }
    /** @param id {String} category id for updating category
    * @param name name of category
    * @param image image url of category
    * @returns {Promise<CategoryInterface>} updated category
    */
    update(id, name, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield CategoryModel_1.default.findById(id);
            let slug = category.slug;
            if (category.name !== name) {
                slug = yield (0, SlugHelper_1.generateSlug)(name, 'Category');
            }
            const updateCategory = yield CategoryModel_1.default.findByIdAndUpdate(id, {
                name,
                image,
                slug
            }, {
                new: true
            });
            yield ProductModel_1.default.updateMany({
                categoryId: updateCategory._id
            }, {
                categoryName: name,
                categorySlug: slug
            });
            yield SubcategoryModel_1.default.updateMany({ category: category._id }, { categorySlug: slug, categoryName: name });
            yield SectionModel_1.default.updateMany({ category: category._id }, { categorySlug: slug, categoryName: name });
            yield SearchService_1.default.updateCategoryDocument(updateCategory);
            return updateCategory;
        });
    }
    /**
     *
     * @param id {String} category id for deleting category
     * @returns {Promise<CategoryInterface>} deleted category
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCategory = yield CategoryModel_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
            return deletedCategory;
        });
    }
    /**
    *
    * @param id {String} category id for fetching category
    * @returns {Promise<CategoryInterface>} category data by id
    */
    findCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryData = yield CategoryModel_1.default.findById(id);
            return categoryData;
        });
    }
    /**
     *
     * @param queryString
     * @returns
     */
    list(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            const countQuery = CategoryModel_1.default.find({ isDeleted: false });
            const countFeature = new ApiFeatures_1.ApiFeatures(countQuery, queryString)
                .filtering()
                .searching(['name'])
                .getCount();
            const lisQuery = CategoryModel_1.default.find({ isDeleted: false });
            const listFeature = new ApiFeatures_1.ApiFeatures(lisQuery, queryString)
                .filtering()
                .searching(['name'])
                .sorting('-createdAt')
                .fieldsLimiting()
                .pagination();
            const count = yield countFeature.query;
            const list = yield listFeature.query;
            return { list, count };
        });
    }
    addTaxCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const taxCategoryData = yield (0, axios_1.default)({
                method: 'get',
                url: 'https://api.sandbox.taxjar.com/v2/categories',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.TAXJAR_API_KEY}`
                }
            });
            const options = { ordered: true };
            TaxCategoryModel_1.default.insertMany(taxCategoryData.data.categories, options);
            return taxCategoryData.data;
        });
    }
    /**
    *
    * @returns {Promise<TaxCategoryInterface>} Tax category data list
    */
    getTaxCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const taxCategorydata = yield TaxCategoryModel_1.default.find();
            return taxCategorydata;
        });
    }
}
exports.default = new CategoryService();
