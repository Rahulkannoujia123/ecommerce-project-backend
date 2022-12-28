import { model, Schema, Types } from 'mongoose';
import { SubCategoryInterface } from '../interfaces/SubcategoryInterface';

const subcategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    category: {
        type: Types.ObjectId,
        required: true
    },
    image: {
        type: String,
    },
    slug: {
        type: String,
        lowercase: true,
        trim: true
    },
    categorySlug: {
        type: String,
        lowercase: true,
        trim: true
    },
    categoryName: {
        type: String,
        lowercase: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


subcategorySchema.index({ categorySlug: 1, slug: 1 }, { unique: true });
subcategorySchema.index({ categoryName: 1, name: 1 }, { unique: true });
const SubcategoryModel = model<SubCategoryInterface>('Subcategory', subcategorySchema);
export default SubcategoryModel;