import { Schema, model, Types } from "mongoose";
import { SectionInterface } from "../interfaces/SectionInterface";

const sectionSchema = new Schema({
    category: {
        type: Types.ObjectId,
        required: true
    },
    subcategory: {
        type: Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    image: String,
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
    subcategorySlug: {
        type: String,
        lowercase: true,
        trim: true
    },
    categoryName: {
        type: String,
        lowercase: true,
        trim: true
    },
    subcategoryName: {
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

sectionSchema.index({ category: 1, subcategory: 1 });

const SectionModel = model<SectionInterface>('Section', sectionSchema);
export default SectionModel;