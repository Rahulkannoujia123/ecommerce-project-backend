import { Schema, model } from 'mongoose';
import { SubgroupInterface } from '../interfaces/SubgroupInterface';

const subgroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'group'
    },
    groupName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    totalMember: {
        type: Number,
        default: 0
    },
    memberLimit: {
        type: Number,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    members: {
        type: [Schema.Types.ObjectId],
        default: []
    }
}, { timestamps: true });

const SubgroupModel = model<SubgroupInterface>('subgroup', subgroupSchema);

export default SubgroupModel;