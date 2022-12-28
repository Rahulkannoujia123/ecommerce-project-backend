import { model, Schema } from 'mongoose';
import { GroupPurposeInterface } from '../interfaces/GroupPurposeInterface';

const GroupPurposeSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const GroupPurposeModel = model<GroupPurposeInterface>('groupPurpose', GroupPurposeSchema);
export default GroupPurposeModel;