import { Schema, Types, model } from 'mongoose';
import { GroupInviteInterface, GroupInviteStatus } from '../interfaces/GroupInviteInterface';

const inviteSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    groupCode: {
        type: String,
        trim: true,
    },
    groupId: {
        type: Types.ObjectId,
    },
    invitedBy: {
        type: Types.ObjectId,
    },
    status: {
        type: Number,
        enum: [GroupInviteStatus.accepted, GroupInviteStatus.invited],
        default: GroupInviteStatus.invited
    }
}, { timestamps: true });

inviteSchema.index({ groupId: 1, invitedBy: 1, email: 1 }, { unique: true });
inviteSchema.index({ groupCode: 1 });

const GroupInviteModel = model<GroupInviteInterface>('GroupInvite', inviteSchema);
export default GroupInviteModel;