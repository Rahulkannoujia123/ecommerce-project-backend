import ProductModel from "../../models/ProductModel";
import { Types } from 'mongoose';
import { ProductInterface } from "../../interfaces/ProductInterface";
import CartModel from "../../models/CartModel";
import ProductReportModel from "../../models/ProductReportModel";
import WishlistModel from "../../models/WishlistModel";
// import RecentSearchModel from "../../models/RecentSearchModel";
// import * as mongoose from "mongoose";
class ProductService {

    async productList(queryObj: any): Promise<{ count: number, products: any[] }> {
        let match: { [key: string]: any } = {
            isDeleted: false,
            isActive: true
        }
        const sort = queryObj.sort || '-createdAt';
        const pipeline = [
            this.setFilters(queryObj, match),
            this.getSort(sort),
            this.setFacet(queryObj),
            this.countProject()
        ];

        let count = 0;
        let products = [];

        const productData = await ProductModel.aggregate(pipeline);

        if (productData && productData.length) {
            count = productData[0].count;
            products = productData[0].products;
        }

        return { count, products };

    }


    // private async setRecentSearch(queryObj: any): Promise<void> {
    //     const userId = queryObj.userId;
    //     const search = queryObj.search;
    //     if (userId) {
    //         const searchExist = await RecentSearchModel.exists({ searchText: search, userId })
    //         if (!searchExist) await RecentSearchModel.create({ searchText: search, userId });
    //     }
    // }


    private setFilters(queryObj: any, match: { [key: string]: any }): { '$match': { [key: string]: any } } {
        if (queryObj.categoryId) {
            match.categoryId = new Types.ObjectId(queryObj.categoryId);
        }
        if (queryObj.categorySlug) {
            match.categorySlug = queryObj.categorySlug;
        }

        const subcategory = queryObj.subcategory;
        if (subcategory && subcategory.length)
            match.subcategorySlug = {
                '$in': subcategory.map((e: any) => e = e.trim())
            }

        const sectionSlug = queryObj.sectionSlug;
        if (sectionSlug && sectionSlug.trim())
            match.sectionSlug = sectionSlug;

        const brands = queryObj.brands;
        if (brands && brands.length)
            match.brandSlug = {
                '$in': brands.map((e: any) => e = e.trim())
            }

        const colors = queryObj.colors;
        if (colors && colors.length)
            match.colors = {
                '$in': colors
            }


        const price = queryObj.price;
        if (price && price.length) {
            const [min, max] = price;
            match.salePrice = { $gte: min, $lte: max };
        }

        const attributes = queryObj.attributes;

        if (attributes && attributes.length) {
            const attributeValues: string[] = [];
            attributes.forEach((e: { queryKey: string, values: string[] }) => {
                attributeValues.push(...e.values);
            });

            if (attributeValues.length)
                match.attributeValues = {
                    '$in': attributeValues
                }

        }

        console.log('match', JSON.stringify(match));

        return { '$match': match };
    }


    private getSort(field: string): { '$sort': { [key: string]: 1 | -1 } } {
        let sort: any = { 'createdAt': -1 };
        if (field === '-popularity') {
            sort = { 'productSold': -1 }
        }
        if (field === 'popularity') {
            sort = { 'productSold': 1 }
        }
        if (field === 'rating') {
            sort = { 'ratingsAvg': 1 }
        }
        if (field === '-rating') {
            sort = { 'ratingsAvg': -1 }
        }
        if (field === 'price') {
            sort = { 'salePrice': 1 }
        }
        if (field === '-price') {
            sort = { 'salePrice': -1 }
        }
        if (field === 'name') {
            sort = { 'name': 1 }
        }
        if (field === '-name') {
            sort = { 'name': -1 }
        }
        if (field === 'newestFirst') {
            sort = { 'createdAt': -1 }
        }

        return { '$sort': sort };
    }


    private skipLimit(skip: number, limit: number): { [key: string]: number }[] {
        return [
            {
                '$skip': skip
            },
            {
                '$limit': limit
            }
        ]
    }


    private setFacet(queryObj: any): { '$facet': { [key: string]: any } } {
        const page = queryObj.page * 1 || 1;
        const limit = queryObj.limit * 1 || 16;
        const skip = (page - 1) * limit;

        const facet: any = {
            'count': [
                {
                    '$count': 'count'
                }
            ],
            'products': [
                ...this.skipLimit(skip, limit),
                this.projectKeys()
            ]
        }
        if (queryObj.userId) {
            const userId = new Types.ObjectId(queryObj.userId);
            facet.products = [
                ...this.skipLimit(skip, limit),
                this.cartCheck(userId),
                this.wishlistCheck(userId),
                this.projectKeys(true)
            ]
        }

        return { '$facet': facet };
    }


    private countProject(): { '$project': { [key: string]: any } } {
        return {
            '$project': {
                'count': {
                    '$ifNull': [
                        {
                            '$first': '$count.count'
                        }, 0
                    ]
                },
                'products': '$products'
            }
        }
    }

    private wishlistCheck(userId: Types.ObjectId): { '$lookup': { [key: string]: any } } {
        return {
            '$lookup': {
                'from': 'wishlists',
                'let': {
                    'pid': '$_id'
                },
                'as': 'wishlist',
                'pipeline': [
                    {
                        '$match': {
                            'userId': userId,
                            '$expr': {
                                '$eq': [
                                    '$$pid', '$productId'
                                ]
                            }
                        }
                    }, {
                        '$limit': 1
                    }
                ]
            }
        };
    }

    private cartCheck(userId: Types.ObjectId): { '$lookup': { [key: string]: any } } {
        return {
            '$lookup': {
                'from': 'carts',
                'let': {
                    'pid': '$_id'
                },
                'as': 'cart',
                'pipeline': [
                    {
                        '$match': {
                            'userId': userId,
                            '$expr': {
                                '$eq': [
                                    '$$pid', '$productId'
                                ]
                            }
                        }
                    },
                    {
                        '$limit': 1
                    }
                ]
            }
        };
    }


    private projectKeys(isLoggedIn: boolean = false): { '$project': { [key: string]: any } } {
        const project: any = {
            '$project': {
                'coverPhoto': 1,
                'name': 1,
                'salePrice': 1,
                'regularPrice': 1,
                'ratingsTotal': 1,
                'ratingsAvg': 1,
                'slug': 1,
                'isWishlist': {
                    '$ifNull': [
                        '$wishlist',
                        false
                    ]
                },
                'isCart': {
                    '$ifNull': [
                        '$cart',
                        false
                    ]
                },
            }
        };

        if (isLoggedIn) {
            project['$project'].isWishlist = {
                '$gt': [
                    {
                        '$size': '$wishlist'
                    }, 0
                ]
            };
            project['$project'].isCart = {
                '$gt': [
                    {
                        '$size': '$cart'
                    },
                    0
                ]
            };
        }
        return project;
    }

    async productDetails(productId: string, userId?: string): Promise<{ product: any, relatedProducts: ProductInterface[] }> {
        const product = await ProductModel.findById(productId).lean() as any;
        if (userId) {
            const isCart = await CartModel.exists({ productId, userId });
            product.isCart = isCart ? true : false;
            const isReported = await ProductReportModel.exists({ productId, userId });
            product.isReported = isReported ? true : false;
            const isWishlist = await WishlistModel.exists({ productId, userId });
            product.isWishlist = isWishlist ? true : false;
        }
        else {
            product.isCart = false;
            product.isReported = false;
            product.isWishlist = false;
        }

        const sizes = (product?.attributes?.find((e: any) => e.name === 'sizes'))?.values || [];
        product.sizes = sizes;

        const match = {
            '$match': {
                'isDeleted': false,
                'isActive': true,
                'categoryId': product.categoryId
            }
        }

        let pipeline: any = [
            match,
            this.projectKeys()
        ];

        if (userId) {
            pipeline = [
                match,
                this.cartCheck(new Types.ObjectId(userId)),
                this.wishlistCheck(new Types.ObjectId(userId)),
                this.projectKeys(true)
            ]
        }
        const relatedProducts = await ProductModel.aggregate(pipeline);
        return { product, relatedProducts };

    }




}
export default new ProductService();