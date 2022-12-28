import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import CategoryModel from "../../models/CategoryModel";
import FilterModel from "../../models/FilterModel";
import ProductModel from "../../models/ProductModel";
import SectionModel from "../../models/SectionModel";
import SubcategoryModel from "../../models/SubcategoryModel";

class FilterController {
    /**
       * @api {get} /api/v1/app/filter/list-by-id:categoryId Filter List
       * @apiHeader {String} App-Version Version Code 1.0.0.
       * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
       * @apiVersion 1.0.0
       * @apiName filter-list-by-id
       * @apiGroup App-Filter
       * 
       * @apiDescription pass categoryId as params
       * @apiSuccessExample {json} Success-Response-1:
       *  {
       *        "status": 200,
       *        "statusText": "SUCCESS",
       *        "message": "Filter list",
       *        "data": {
       *            "filter": {
       *                "subcategories": {
       *                    "displayKey": "product categories",
       *                    "queryKey": "subcategory",
       *                    "list": [
       *                        {
       *                            "name": "Kid's crafts",
       *                            "_id": "62dfd43efb89c4b45de44f18"
       *                        }
       *                    ]
       *                },
       *                "brands": {
       *                    "displayKey": "brands",
       *                    "queryKey": "brands",
       *                    "list": [
       *                        {
       *                            "name": "My Brnad",
       *                            "_id": "62f20e7b462b16cab5e16fbf"
       *                        }
       *                    ]
       *                },
       *                "price": {
       *                    "displayKey": "price",
       *                    "queryKey": "price",
       *                    "minPrice": 0,
       *                    "maxPrice": 450000
       *                },
       *                "color": {
       *                    "displayKey": "color",
       *                    "queryKey": "colors",
       *                    "list": [
       *                        "red",
       *                        "blue"
       *                    ]
       *                },
       *                "attributes": {
       *                    "queryKey": "attributes",
       *                    "attributes": [
       *                        {
       *                            "displayKey": "sizes",
       *                            "queryKey": "sizes",
       *                            "list": [
       *                                "x",
       *                                "M",
       *                                "XL",
       *                                "XXL"
       *                            ],
       *                            "_id": "62f2421ddf9b18de4e98c587"
       *                        },
       *                        {
       *                            "displayKey": "fabric",
       *                            "queryKey": "fabric",
       *                            "list": [
       *                                "cotten",
       *                                "nylon"
       *                            ],
       *                            "_id": "62f2421ddf9b18de4e98c588"
       *                        },
       *                        {
       *                            "displayKey": "patters",
       *                            "queryKey": "patters",
       *                            "list": [
       *                                "stripped",
       *                                "regular"
       *                            ],
       *                            "_id": "62f2421ddf9b18de4e98c589"
       *                        }
       *                    ]
       *                },
       *                "_id": "62f24134f340f9f48352e9a3",
       *                "categoryId": "62df8560920908884958dd49",
       *                "__v": 3
       *            },
       *            "execTime": 111
       *        }
       *    }
       *
       */

    async getFilterById(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const categoryId = req.params.id;
            let filter = await FilterModel.findOne({ categoryId }).lean() as any;
            filter = new FilterController().filterModified(filter);


            return ResponseHelper.ok(res, res.__('filter_list'), { filter });
        } catch (error) {
            next(error);
        }
    }

    filterModified(filter: any): any {
        Object.keys(filter).forEach((item: string) => {
            if (filter[item].list && filter[item].list.length === 0) {
                delete filter[item];
            }
        })

        const attributes: any[] = [];
        if (filter.attributes && filter.attributes.attributes.length) {
            filter.attributes.attributes.forEach((e: any) => {
                if (e.list && e.list.length) {
                    attributes.push(e);
                }
            });
        }
        filter.attributes.attributes = attributes;
        return filter;
    }

    /**
       * @api {get} /api/v1/app/filter/list-by-slug:categorySlug Filter List By Slug for web
       * @apiHeader {String} App-Version Version Code 1.0.0.
       * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
       * @apiVersion 1.0.0
       * @apiName filter-list-by-slug
       * @apiGroup App-Filter
       * 
       * @apiDescription pass categorySlug as params
       * @apiSuccessExample {json} Success-Response-1:
       *  {
       *        "status": 200,
       *        "statusText": "SUCCESS",
       *        "message": "Filter list",
       *        "data": {
       *            "filter": {
       *                "subcategories": {
       *                    "displayKey": "product categories",
       *                    "queryKey": "subcategory",
       *                    "list": [
       *                        {
       *                            "name": "Kid's crafts",
       *                            "_id": "62dfd43efb89c4b45de44f18"
       *                        }
       *                    ]
       *                },
       *                "brands": {
       *                    "displayKey": "brands",
       *                    "queryKey": "brands",
       *                    "list": [
       *                        {
       *                            "name": "My Brnad",
       *                            "_id": "62f20e7b462b16cab5e16fbf"
       *                        }
       *                    ]
       *                },
       *                "price": {
       *                    "displayKey": "price",
       *                    "queryKey": "price",
       *                    "minPrice": 0,
       *                    "maxPrice": 450000
       *                },
       *                "color": {
       *                    "displayKey": "color",
       *                    "queryKey": "colors",
       *                    "list": [
       *                        "red",
       *                        "blue"
       *                    ]
       *                },
       *                "attributes": {
       *                    "queryKey": "attributes",
       *                    "attributes": [
       *                        {
       *                            "displayKey": "sizes",
       *                            "queryKey": "sizes",
       *                            "list": [
       *                                "x",
       *                                "M",
       *                                "XL",
       *                                "XXL"
       *                            ],
       *                            "_id": "62f2421ddf9b18de4e98c587"
       *                        },
       *                        {
       *                            "displayKey": "fabric",
       *                            "queryKey": "fabric",
       *                            "list": [
       *                                "cotten",
       *                                "nylon"
       *                            ],
       *                            "_id": "62f2421ddf9b18de4e98c588"
       *                        },
       *                        {
       *                            "displayKey": "patters",
       *                            "queryKey": "patters",
       *                            "list": [
       *                                "stripped",
       *                                "regular"
       *                            ],
       *                            "_id": "62f2421ddf9b18de4e98c589"
       *                        }
       *                    ]
       *                },
       *                "_id": "62f24134f340f9f48352e9a3",
       *                "categoryId": "62df8560920908884958dd49",
       *                "__v": 3
       *            },
       *            "execTime": 111
       *        }
       *    }
       *
       */
    async getFilterBySlug(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const slug = req.params.slug;
            const category = await CategoryModel.findOne({ slug });
            if (!category) return ResponseHelper.badRequest(res, res.__('invalid_category_slug'))
            let filter = await FilterModel.findOne({ categoryId: category._id }) as any;
            filter = new FilterController().filterModified(filter);
            return ResponseHelper.ok(res, res.__('filter_list'), { filter });
        } catch (error) {
            next(error);
        }
    }


    /** 
       * @api {post} /api/v1/app/filter/breadcrumb Breadcrumb List
       * @apiHeader {String} App-Version Version Code 1.0.0.
       * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
       * @apiVersion 1.0.0
       * @apiName breadcrumb
       * @apiGroup App-Filter
       * 
       * @apiParam {String} [categorySlug] categorySlug
       * @apiParam {String} [subcategorySlug] subcategorySlug
       * @apiParamExample {json} Request-Body: 
       *     {
       *         "subcategorySlug": "women-shoes"
       *     }
       * 
       * @apiParamExample {json} Request-body 2
       * {
       *         "productSlug": "lece-maxi-dress-adjustable-shoulder-strap-button--63087b2f224cb585fce762a6"
       *     }
       * 
       * @apiSuccessExample {json} Success-Response-1:
       * {
        *        "status": 200,
        *        "statusText": "SUCCESS",
        *        "message": "Breadcrumb list",
        *        "data": {
        *            "breadcrumb": [
        *                {
        *                    "name": "women's fashion",
        *                    "slug": "women's-fashion",
        *                    "queryKey": "categorySlug"
        *                },
        *                {
        *                    "name": "women shoes",
        *                    "slug": "women-shoes",
        *                    "queryKey": "subcategorySlug"
        *                }
        *            ],
        *            "execTime": 96
        *        }
        *    }
        *
        * @apiSuccessExample {json} Success-Response-2: 
        * {
        *        "status": 200,
        *        "statusText": "SUCCESS",
        *        "message": "Breadcrumb list",
        *        "data": {
        *            "breadcrumb": [
        *                {
        *                    "name": "women's fashion",
        *                    "slug": "women's-fashion",
        *                    "queryKey": "categorySlug"
        *                },
        *                {
        *                    "name": "women's top",
        *                    "slug": "women's-top",
        *                    "queryKey": "subcategorySlug"
        *                },
        *                {
        *                    "name": "lece maxi dress adjustable shoulder strap button ",
        *                    "slug": "lece-maxi-dress-adjustable-shoulder-strap-button--63087b2f224cb585fce762a6",
        *                    "queryKey": "productSlug"
        *                }
        *            ],
        *            "execTime": 41
        *        }
        *    }
       * 
       * 
       * */



    async getBreadCamp(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const { categorySlug, subcategorySlug, productSlug, sectionSlug } = req.body;

            let breadcrumb: any[] = [];

            if (categorySlug) {
                const category = await CategoryModel.findOne({ slug: categorySlug });

                if (!category) {
                    return ResponseHelper.badRequest(res, res.__('invalid_category_slug'))
                }
                breadcrumb = [{
                    name: category.name,
                    slug: category.slug,
                    queryKey: 'categorySlug'
                }]
            }

            if (subcategorySlug) {
                const subcategory = await SubcategoryModel.findOne({ slug: subcategorySlug });
                if (!subcategory) {
                    return ResponseHelper.badRequest(res, res.__('invalid_subcategory_slug'))
                }
                const category = await CategoryModel.findById(subcategory.category);

                breadcrumb = [
                    {
                        name: category.name,
                        slug: category.slug,
                        queryKey: 'categorySlug'
                    },
                    {
                        name: subcategory.name,
                        slug: subcategory.slug,
                        queryKey: 'subcategorySlug'
                    }
                ]
            }

            if (sectionSlug) {
                const section = await SectionModel.findOne({ slug: sectionSlug });
                if (!section) return ResponseHelper.badRequest(res, res.__('invalid_section_slug'));

                breadcrumb = [
                    {
                        name: section.categoryName,
                        slug: section.categorySlug,
                        queryKey: 'categorySlug'
                    },
                    {
                        name: section.subcategoryName,
                        slug: section.subcategorySlug,
                        queryKey: 'subcategorySlug'
                    },
                    {
                        name: section.name,
                        slug: section.slug,
                        queryKey: 'sectionSlug'
                    }

                ]
            }

            if (productSlug) {
                const productId = productSlug.split('-').pop();
                const product = await ProductModel.findById(productId);
                if (!product) {
                    return ResponseHelper.badRequest(res, res.__('invalid_product_slug'))
                }
                breadcrumb = [
                    {
                        name: product.categoryName,
                        slug: product.categorySlug,
                        queryKey: 'categorySlug'
                    },
                    {
                        name: product.subcategoryName,
                        slug: product.subcategorySlug,
                        queryKey: 'subcategorySlug'
                    },
                    {
                        name: product.sectionName,
                        slug: product.sectionSlug,
                        queryKey: 'sectionSlug'
                    },
                    {
                        name: product.name,
                        slug: product.slug,
                        queryKey: 'productSlug'
                    }

                ]
            }

            return ResponseHelper.ok(res, res.__('bread_cam_list'), { breadcrumb });


        } catch (error) {
            next(error);
        }
    }
}

export default new FilterController();