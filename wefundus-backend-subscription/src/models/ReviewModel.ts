
import { model, Schema, Types } from 'mongoose';
import { ReviewInterface } from '../interfaces/ReviewInterface';

const reviewSchema = new Schema({
    productId: {
        type: Types.ObjectId,
        required: true

    },
    userId: {
        type: Types.ObjectId,
        required: true
    },

    rating: {
        type: Number,
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
}, { timestamps: true });

const ReviewModel = model<ReviewInterface>('Review', reviewSchema);
export default ReviewModel;