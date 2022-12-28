import { ObjectId, PipelineStage } from 'mongoose';
import { GroupInterface } from '../../interfaces/GroupInterface';
import { UserInterface } from '../../interfaces/UserInterface';
import GroupMemberModel from '../../models/GroupMemberModel';
import { GroupMemberInterface, GroupRequestStatus } from '../../interfaces/GroupMemberInterface';
import UserModel from '../../models/UserModel';

class GroupRequestService {

    /**
     * 
     * @param userId requested user id
     * @param sendBy request sender id
     * @param groupId groupId
     * @param groupCode unique group code
     * @returns GroupRequest, isRequestExists, isMemberExists
     */
    async createRequest(
        userId: string | ObjectId,
        groupId: string | ObjectId,
        groupCode: string,
        requestSentBy: ObjectId
    ): Promise<{ groupRequest?: GroupMemberInterface, isMemberExist?: boolean, isRequestExist?: boolean }> {

        const member = await GroupMemberModel.findOne(
            {
                group: groupId,
                member: userId
            }
        ) as GroupMemberInterface;

        if (member) {
            if (member.groupRequestStatus === GroupRequestStatus.pending) return { isRequestExist: true };
            if (!member.isLeft && !member.isRemoved) return { isMemberExist: true };
            member.isLeft = false;
            member.isRemoved = false;
            member.removeTime = null;
            member.leftTime = null;
            member.groupRequestStatus = GroupRequestStatus.pending;
            member.requestSentBy = requestSentBy;
            await member.save();
            await UserModel.findByIdAndUpdate(userId, { $push: { groups: groupId } }, { new: true });
            return {
                groupRequest: member
            }

        }
        else {
            await UserModel.findByIdAndUpdate(userId, { $push: { groups: groupId } }, { new: true });
            return {
                groupRequest: await GroupMemberModel.create({
                    group: groupId,
                    member: userId,
                    groupCode,
                    requestSentBy
                })
            }
        }

    }


    /**
     * 
     * @param group group object
     * @param user user object
     * @param isAccept true or false
     * @returns {Promise<requestNotExists?: boolean,isRequestAccepted?: boolean,isRequestRejected?: boolean>}
     */
    async groupRequest(
        group: GroupInterface,
        user: UserInterface,
        isAccept: boolean
    ): Promise<{
        requestNotExists?: boolean,
        isRequestAccepted?: boolean,
        isRequestRejected?: boolean
    }> {
        const request = await GroupMemberModel.findOne(
            {
                group: group._id,
                member: user._id,
            }
        );
        if (!request) return { requestNotExists: true };
        if (request.groupRequestStatus !== GroupRequestStatus.pending) return { requestNotExists: true };
        if (isAccept) return { isRequestAccepted: await this.handleRequestAccept(request, group, user) };
        return { isRequestRejected: await this.handleRequestReject(request, user) };
    }

    /**
     * 
     * @param request group request object
     * @param group group object
     * @param user user object
     * @returns {Promise<true>}
     */
    public async handleRequestAccept(
        request: GroupMemberInterface,
        group: GroupInterface,
        user: UserInterface,
        isNotRequest: boolean = false
    ): Promise<boolean> {
        if (!isNotRequest) {
            request.groupRequestStatus = GroupRequestStatus.accepted;
        }
        request.isLeft = false;
        await request.save();
        const userId = user._id as ObjectId;
        group.members.push(userId);
        group.totalMembers = group.totalMembers + 1;
        await group.save();
        if (!user.groups.some((e: ObjectId) => JSON.stringify(e) !== JSON.stringify(group._id)))
            user.groups.push(group._id);
        await user.save();
        return true;
    }

    /**
     * 
     * @param request group request object
     * @returns {Promise<true>}
     */
    private async handleRequestReject(
        request: GroupMemberInterface,
        user: UserInterface
    ) {
        user.groups = user.groups.filter((groupId: ObjectId) => JSON.stringify(groupId) !== JSON.stringify(request.group));
        await user.save();
        await request.delete();
        return true;
    }



    async groupRequestList(
        currentUserId: string | ObjectId,
        queryString: any
    ): Promise<{ count: number, list: any }> {

        const limit = Number(queryString.limit) || 10;
        const page = Number(queryString.page) || 1;
        const skip = (page - 1) * limit;

        const pipeline: PipelineStage[] = [
            {
                '$match': {
                    'groupRequestStatus': 1,
                    'member': currentUserId
                }
            },
            {
                '$lookup': {
                    'from': 'groups',
                    'localField': 'group',
                    'foreignField': '_id',
                    'as': 'group'
                }
            },
            {
                '$unwind': {
                    'path': '$group',
                    'preserveNullAndEmptyArrays': true
                }
            },
        ];

        const facet = {
            '$facet': {
                'count': [
                    {
                        '$count': 'count'
                    }
                ],
                'requests': [
                    {
                        '$sort': {
                            'updatedAt': -1
                        }
                    },
                    {
                        '$skip': skip
                    },
                    {
                        '$limit': limit
                    },
                    {
                        '$lookup': {
                            'from': 'users',
                            'localField': 'requestSentBy',
                            'foreignField': '_id',
                            'as': 'sentBy'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$sentBy',
                            'preserveNullAndEmptyArrays': true
                        }
                    },
                    {
                        '$project': {
                            '_id': 1,
                            'sentBy': {
                                '_id': 1,
                                'name': 1,
                                'customerId': 1,
                                'avatar': 1,
                                'email': 1,
                            },
                            'group': {
                                '_id': 1,
                                'groupCode': 1,
                                'name': 1,
                                'groupIcon': 1,
                                'purposeText': 1
                            },
                            'createdAt': 1,
                            'updatedAt': 1,
                            'groupRequestStatus': 1,
                            'requestSentBy': 1
                        }
                    }
                ]
            }
        } as PipelineStage;

        const search = queryString.search;
        if (search && search.trim()) {
            pipeline.push({
                '$match': {
                    'group.name': { '$regex': search, '$options': '$i' }
                }
            });
        }
        pipeline.push(facet);
        const requestData = await GroupMemberModel.aggregate(pipeline);
        let count = 0;
        let list = [];
        if (requestData.length) {
            if (requestData[0].count.length) count = requestData[0].count[0].count;
            list = requestData[0].requests;
        }
        return { count, list };
    }
}

export default new GroupRequestService();