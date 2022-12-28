import { Schema, model, Types } from 'mongoose';
import { GroupMemberInterface, GroupRequestStatus } from '../interfaces/GroupMemberInterface';

const groupMemberSchema = new Schema({
    group: {
        type: Types.ObjectId,
        ref: 'group',
        required: true
    },
    groupCode: {
        type: String,
        required: true
    },
    member: {
        type: Types.ObjectId,
        ref: 'user',
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isMuted: {
        type: Boolean,
        default: false
    },
    isLeft: {
        type: Boolean,
        default: false
    },
    leftTime: {
        type: Date,
        default: null
    },
    isRemoved: {
        type: Boolean,
        default: false
    },
    removedBy: {
        type: Types.ObjectId,
        ref: 'user'
    },
    removeTime: {
        type: Date,
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    groupRequestStatus: {
        type: Number,
        enum: [GroupRequestStatus.accepted, GroupRequestStatus.pending, GroupRequestStatus.rejected, GroupRequestStatus.noRequest],
        default: GroupRequestStatus.pending
    },
    requestSentBy: {
        type: Types.ObjectId
    },
    subgroups: {
        type: [Types.ObjectId],
        default: []
    }
}, { timestamps: true });

groupMemberSchema.index({ member: 1, group: 1 }, { unique: true });

const GroupMemberModel = model<GroupMemberInterface>('groupMember', groupMemberSchema);

export default GroupMemberModel;