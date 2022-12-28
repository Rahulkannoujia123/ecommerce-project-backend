import SubgroupModel from "../../models/SubgroupModel";
import { PipelineStage, Types } from 'mongoose';
class SubgroupService {
    /**
     * 
     * @param subgroupId 
     * @returns Promise<any>
     */
    async subgroupDetails(subgroupId: string | string): Promise<any> {
        const pipeline = [
            {
                '$match': {
                    '_id': new Types.ObjectId(subgroupId)
                }
            }, {
                '$lookup': {
                    'from': 'groups',
                    'localField': 'groupId',
                    'foreignField': '_id',
                    'as': 'group'
                }
            }, 
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'createdBy',
                    'foreignField': '_id',
                    'as': 'createdBy'
                }
            }, {
                '$unwind': {
                    'path': '$createdBy',
                    'preserveNullAndEmptyArrays': true
                }
            },
            {
                '$project': {
                    'groupName': 1,
                    'groupId': 1,
                    'description': 1,
                    'icon': 1,
                    'totalMember': 1,
                    'memberLimit': 1,
                    'createdBy': {
                        '_id': 1,
                        'avatar': 1,
                        'displayName': 1,
                        'customerCode': 1,
                        'email': 1,
                        'name': 1
                    },
                    'group': {
                        '_id': 1,
                        'groupIcon': 1,
                        'groupCode': 1,
                        'name': 1,
                        'email': 1,
                        'description': 1
                    },
                }
            }
        ] as PipelineStage[]
        let subgroup = {};

        const subgroupData = await SubgroupModel.aggregate(pipeline);
        if (subgroupData.length) {
            subgroup = subgroupData[0];
        }
        return subgroup;
    }

}

export default new SubgroupService();
