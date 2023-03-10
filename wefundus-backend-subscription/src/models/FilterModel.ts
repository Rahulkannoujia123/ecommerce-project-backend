import { model, Schema, Types } from 'mongoose';
import { FilterInterface } from '../interfaces/FilterInterface';

const filterSchema = new Schema({
    categoryId: {
        type: Types.ObjectId,
        required: true
    },
    categorySlug: {
        type: String,
    },
    subcategories: {
        displayKey: {
            type: String,
            default: 'Categories'
        },
        queryKey: {
            type: String,
            default: 'subcategory'
        },
        list: {
            type: [{
                name: String,
                _id: Types.ObjectId,
                slug: String
            }],
            default: []
        }
    },
    brands: {
        displayKey: {
            type: String,
            default: 'Brand'
        },
        queryKey: {
            type: String,
            default: 'brands'
        },
        list: {
            type: [{
                name: String,
                _id: Types.ObjectId,
                slug: String
            }],
            default: []
        }
    },
    price: {
        displayKey: {
            type: String,
            default: 'Price'
        },
        queryKey: {
            type: String,
            default: 'price'
        },
        minPrice: {
            type: Number,
            default: 0
        },
        maxPrice: {
            type: Number,
            default: 100
        }
    },
    color: {
        displayKey: {
            type: String,
            default: 'Colors'
        },
        queryKey: {
            type: String,
            default: 'colors'
        },
        list: {
            type: [String],
            default: []
        }
    },
    rating: {
        displayKey: {
            type: String,
            default: 'Ratings'
        },
        queryKey: {
            type: String,
            default: 'rating'
        },
        list: {
            type: [Number],
            default: []
        }
    },
    attributes: {
        queryKey: {
            type: String,
            default: 'attributes'
        },
        attributes: [
            {
                _id: false,
                displayKey: {
                    type: String,
                },
                queryKey: {
                    type: String,
                    lowercase: true,
                    trim: true
                },
                list: [String]
            }
        ]
    }
});

filterSchema.index({ categoryId: 1 }, { unique: true });
const FilterModel = model<FilterInterface>('filter', filterSchema);
export default FilterModel;