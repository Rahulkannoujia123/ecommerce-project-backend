import { model, Schema, Types } from 'mongoose';
import { ReportReasonInterface } from '../interfaces/ReportReasonInterface';


const reportreasonSchema = new Schema({
    categoryId: {
        type: Types.ObjectId,
        required: true,
        ref: 'Category'

    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
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

const ReportReasonModel = model<ReportReasonInterface>('ReportReason', reportreasonSchema);
export default ReportReasonModel;