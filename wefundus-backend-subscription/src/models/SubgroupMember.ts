import { Schema, model } from 'mongoose';
import { SubgroupMemberInterface } from '../interfaces/SubgroupMemberInterface';

const subgroupMemberSchema = new Schema({
    subgroupId: {
        type: Schema.Types.ObjectId,
        ref: 'subgroup'
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'group'
    },
    memberId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const SubgroupMemberModel = model<SubgroupMemberInterface>('subgroupMember',  subgroupMemberSchema);

export default SubgroupMemberModel;