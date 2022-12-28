import { model, Schema } from 'mongoose';
import { TaxCategoryInterface } from '../interfaces/TaxCategoryInterface';

const TaxCategorySchema = new Schema({
    name: {
        type: String,
    },
    product_tax_code: {
        type: String,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},{ timestamps: true });

const TaxCategoryModel = model<TaxCategoryInterface>('TaxCategory', TaxCategorySchema);
export default TaxCategoryModel;