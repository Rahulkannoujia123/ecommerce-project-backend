import { Schema, Types, model } from 'mongoose';
import { BrandInterface } from '../interfaces/BrandInterface';

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    categories: {
        type: [Types.ObjectId],
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    },
    logo: {
        type: String,
        default: null
    },
    slug: {
        type: String,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    timeStamp: {
        type: Number,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

},{ timestamps: true });

brandSchema.index({ name: 1 }, { unique: true });
const BrandModel = model<BrandInterface>('Brand', brandSchema);
export default BrandModel;