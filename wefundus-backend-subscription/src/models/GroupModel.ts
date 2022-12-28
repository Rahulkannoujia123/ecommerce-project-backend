import { model, Schema } from 'mongoose';
import { GoalInterval, GroupInterface } from '../interfaces/GroupInterface';

const groupSchema = new Schema({
    groupIcon: {
        type: String,
        default: null
    },
    groupCode: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    purposeId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    purposeText: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    goalInterval: {
        type: String,
        required: true,
        enum: [GoalInterval.daily, GoalInterval.weekly, GoalInterval.yearly]
    },
    goalPrice: {
        type: Number,
        required: true
    },
    showContactInfo: {
        type: Boolean,
        default: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    zipCode: {
        type: String,
        default: null
    },
    showSocialInfo: {
        type: Boolean,
        default: true
    },
    facebookUrl: {
        type: String,
        default: null
    },
    twitterUrl: {
        type: String,
        default: null
    },
    members: {
        type: [Schema.Types.ObjectId],
        dafault: []
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    totalMembers: {
        type: Number,
        default: 1
    },
    totalSubgroup: {
        type: Number,
        default: 0
    },
    subGroupLimit: {
        type: Number,
        default: 0
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    groupSubscribed: {
        type: Boolean,
        default: false
    },
    subGroupSubscribed: {
        type: Boolean,
        default: false
    },
    featuredRank: {
        type: Number,
        default: 0
    },
    totalCashback: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

const GroupModel = model<GroupInterface>('group', groupSchema);

export default GroupModel;