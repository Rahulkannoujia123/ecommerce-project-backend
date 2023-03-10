import { Document, ObjectId } from 'mongoose';
export interface ProductInterface extends Document {
    _id?: ObjectId,
    isDeleted: Boolean
    name: string;
    slug: string;
    sku: string;
    price: number;
    categoryId: ObjectId;
    categoryName?: string;
    categorySlug?: string;
    subcategoryId: ObjectId;
    subcategoryName: string;
    subcategorySlug?: string;
    sectionId: ObjectId;
    sectionSlug?: string;
    sectionName: string;
    brandId: ObjectId;
    brandName: string;
    brandSlug?: string;
    author: string;
    stock: number;
    description: string;
    regularPrice: number;
    salePrice: number;
    taxClass: string;
    taxStatus: string;
    taxClassCode: string;
    stockQuantity: number;
    allowBackOrders: boolean;
    lowStockThreshold: number; //?
    soldIndividualStock: number//??
    weight: number;
    weightUnit: string;
    dimensions: string;
    shippingClass: string;
    upSells: boolean;
    crossSells: boolean;
    color: string;
    material: string;
    purchasedNote: string;
    menuOrder: string;
    isReviewEnabled: boolean;
    adminCommissionType: string;
    adminCommission: number;
    cashbackTypes: CashbackTypes[],
    coverPhoto?: string;
    photos?: string[];
    isActive: Boolean;
    colors?: string[];
    ratingsTotal: number;
    ratingsAvg: number;
    totalReports: number;
    productSold: number;

    attributes: Attribute[];
    attributeValues: string[];

    createdAt: Date;
    updatedAt: Date;

    isReported: boolean;
    isWishlist: boolean;
    isCart: boolean;

}
interface CashbackTypes {
    cashbackType: string;
    amount: number;
}

export interface Attribute {
    name: string;
    values: string[]
}