import { model, Schema, Types } from 'mongoose';
import { SEARCH_BELONGS_TO } from '../constants/SearchConstant';
import { SearchInterface } from '../interfaces/SearchInterface';

const searchSchema = new Schema({
    title: {
        type: String,
        lowercase: true,
        trim: true
    },
    icon: {
        type: String
    },
    belongsTo: {
        type: Number,
        enum: Object.values(SEARCH_BELONGS_TO)
    },
    categorySlug: {
        type: String,
    },
    subcategorySlug: {
        type: String
    },
    sectionSlug: {
        type: String
    },
    productSlug: {
        type: String
    },
    categoryId: {
        type: Types.ObjectId
    },
    subcategoryId: {
        type: Types.ObjectId
    },
    sectionId: {
        type: Types.ObjectId
    },
    productId: {
        type: Types.ObjectId
    },
    queryKey: {
        type: String,
        enum: ['categorySlug', 'subcategorySlug', 'sectionSlug', 'productSlug']
    },
    isActive: {
        type: Boolean,
        default: true,
        select: false
    }
}, { timestamps: true });

// searchSchema.index({ title: 1 }, { textIndexVersion: 3, comment: 'text' });
const SearchModel = model<SearchInterface>('search', searchSchema);
export default SearchModel;

