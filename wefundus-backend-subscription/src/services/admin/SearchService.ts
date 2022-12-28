import { SEARCH_BELONGS_TO } from "../../constants/SearchConstant";
import { CategoryInterface } from "../../interfaces/CategoryInterface";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { SectionInterface } from "../../interfaces/SectionInterface";
import { SubCategoryInterface } from "../../interfaces/SubcategoryInterface";
import SearchModel from "../../models/SearchModel";

class SearchService {

    /**
     * 
     * @param category 
     * @returns true
     */
    async addCategoryDocument(category: CategoryInterface): Promise<boolean> {
        await SearchModel.create(
            {
                title: category.name,
                belongsTo: SEARCH_BELONGS_TO.category,
                categoryId: category._id,
                categorySlug: category.slug,
                queryKey: 'categorySlug',
                icon: category.image
            }
        );
        return true;
    }


    /**
     * 
     * @param category category document
     * @param isActive boolean
     * @returns true
     */
    async updateCategoryDocument(category: CategoryInterface, isActive: boolean = true): Promise<boolean> {
        await SearchModel.updateMany(
            {
                belongsTo: SEARCH_BELONGS_TO.category,
                categoryId: category._id
            },
            {
                categorySlug: category.slug,
                title: category.name,
                icon: category.name,
                isActive
            }
        );
        return true;
    }


    /**
     * 
     * @param subcategory subcategory document
     * @returns true
     */

    async addSubcategoryDocument(subcategory: SubCategoryInterface): Promise<boolean> {
        await SearchModel.create(
            {
                title: subcategory.name,
                belongsTo: SEARCH_BELONGS_TO.subcategory,
                categoryId: subcategory.category,
                categorySlug: subcategory.categorySlug,
                queryKey: 'subcategorySlug',
                icon: subcategory.image,
                subcategoryId: subcategory._id,
                subcategorySlug: subcategory.slug
            }
        )
        return true;
    }

    /**
     * 
     * @param subcategory document
     * @param isActive boolean
     * @returns true
     */

    async updateSubcategoryDocument(subcategory: SubCategoryInterface, isActive: boolean = true): Promise<boolean> {
        await SearchModel.updateMany(
            {
                belongsTo: SEARCH_BELONGS_TO.subcategory,
                subcategoryId: subcategory._id
            },
            {
                title: subcategory.name,
                icon: subcategory.image,
                subcategorySlug: subcategory.slug,
                isActive
            }
        );

        return true;
    }

    /**
     * 
     * @param section section document
     * @returns true
     */
    async addSectionDocument(section: SectionInterface): Promise<boolean> {
        await SearchModel.create(
            {
                title: section.name,
                belongsTo: SEARCH_BELONGS_TO.section,
                categoryId: section.category,
                categorySlug: section.categorySlug,
                queryKey: 'sectionSlug',
                icon: section.image,
                sectionId: section._id,
                sectionSlug: section.slug,
                subcategoryId: section.subcategory,
                subcategorySlug: section.subcategorySlug,
            }
        )
        return true;
    }

    /**
     * 
     * @param section document
     * @param isActive boolean
     * @returns true
     */
    async updateSectionDocument(section: SectionInterface, isActive: boolean = true): Promise<boolean> {
        await SearchModel.updateMany(
            {
                belongsTo: SEARCH_BELONGS_TO.section,
                sectionId: section._id
            },
            {
                title: section.name,
                icon: section.image,
                sectionSlug: section.slug,
                isActive
            }
        );
        return true;
    }


    /**
     * 
     * @param product Product Document
     * @returns true
     */
    async addProductDocument(product: ProductInterface): Promise<boolean> {
        await SearchModel.create(
            {
                title: product.name,
                belongsTo: SEARCH_BELONGS_TO.product,
                categoryId: product.categoryId,
                categorySlug: product.categorySlug,
                productId: product._id,
                productSlug: product.slug,
                subcategoryId: product.subcategoryId,
                subcategorySlug: product.subcategorySlug,
                sectionId: product.sectionId,
                sectionSlug: product.sectionSlug,
            })
            ;

        return true;
    }

    /**
     * 
     * @param product Product Document
     * @param isActive boolean
     * @returns true
     */
    async updateProductDocument(product: ProductInterface, isActive: boolean = true): Promise<boolean> {
        await SearchModel.updateOne(
            {
                belongsTo: SEARCH_BELONGS_TO.product,
                productId: product._id
            },
            {
                title: product.name,
                isActive,
                productSlug: product.slug
            }
        );
        return true;
    }



}

export default new SearchService();