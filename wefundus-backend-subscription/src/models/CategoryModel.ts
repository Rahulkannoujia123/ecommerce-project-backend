import { model, Schema } from 'mongoose';
import { CategoryInterface } from '../interfaces/CategoryInterface';

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    productSold: {
        type: Number,
        default: 0
    },
    attributes: {
        type: [String],
        default: []
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

const CategoryModel = model<CategoryInterface>('Category', categorySchema);
export default CategoryModel;