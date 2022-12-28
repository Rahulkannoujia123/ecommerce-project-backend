import { Document, ObjectId } from 'mongoose';
export interface CategoryInterface extends Document{
    _id?: ObjectId;
    name: string;
    image: string;
    productSold: number;
    slug: string;
    attributes: string[];
    isActive: Boolean;
    isDeleted: Boolean
}