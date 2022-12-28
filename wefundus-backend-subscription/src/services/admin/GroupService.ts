import GroupModel from "../../models/GroupModel";
import { PipelineStage, Types } from 'mongoose';
import SubgroupModel from "../../models/SubgroupModel";
import GroupMemberModel from "../../models/GroupMemberModel";
import SubgroupMemberModel from "../../models/SubgroupMember";
import { GroupRequestStatus } from "../../interfaces/GroupMemberInterface";
class GroupService {
    /**
     * 
     * @param groupId 
     * @returns Promise<any>
     */
    async groupDetails(groupId: string | string): Promise<any> {
        const pipeline = [
            {
                '$match': {
                    '_id': new Types.ObjectId(groupId)
                }
            }, {
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
                '$lookup': {
                    'from': 'grouppurposes',
                    'localField': 'purposeId',
                    'foreignField': '_id',
                    'as': 'purpose'
                }
            }, {
                '$unwind': {
                    'path': '$purpose',
                    'preserveNullAndEmptyArrays': true
                }
            },
            {
                '$lookup': {
                    'from': 'subgroups',
                    'localField': '_id',
                    'foreignField': 'groupId',
                    'as': 'subgroups'
                }
            },
            {
                '$project': {
                    'groupCode': 1,
                    'name': 1,
                    'totalMembers': 1,
                    'goalPrice': 1,
                    'goalInterval': 1,
                    'groupIcon': 1,
                    'description': 1,
                    'showContactInfo': 1,
                    'showSocialInfo': 1,
                    'phoneNumber': 1,
                    'email': 1,
                    'address': 1,
                    'subGroupLimit': 1,
                    'totalSubgroup': 1,
                    'facebookUrl': 1,
                    'twitterUrl': 1,
                    'city': 1,
                    'state': 1,
                    'zipCode': 1,
                    'subgroups': 1,
                    'createdBy': {
                        '_id': 1,
                        'avatar': 1,
                        'displayName': 1,
                        'customerCode': 1,
                        'email': 1,
                        'name': 1
                    },
                    'purpose': {
                        '_id': 1,
                        'text': 1
                    },
                }
            }
        ] as PipelineStage[]
        let group = {};

        const groupData = await GroupModel.aggregate(pipeline);
        if (groupData.length) {
            group = groupData[0];
        }
        return group;
    }


    async deleteGroups(groupIds: string[]): Promise<boolean> {

        const groups = await GroupModel.find({_id: groupIds});
        for (const group of groups) {
            group.isDeleted = true;
            await GroupMemberModel.updateMany({ group: group._id }, { isDeleted: true });
            await SubgroupModel.deleteMany({ groupId: group._id });
            await SubgroupMemberModel.deleteMany({ groupId: group._id })
            await group.save();
        }

        return true;
    }

    async groupMemberList(groupId: string, skip: number, limit: number, search: string): Promise<{ count: number, list: any[] }> {
        let match = {};
    
        if (search && search.trim()) {
          match = {
            '$or': [
              {
                'member.email': {
                  '$regex': search,
                  '$options': '$i'
                }
              }, {
                'member.displayName': {
                  '$regex': search,
                  '$options': '$i'
                }
              }, {
                'member.name': {
                  '$regex': search,
                  '$options': '$i'
                }
              }
            ]
          }
        }
        const pipeline: any = [
          {
            '$match': {
              'group': new Types.ObjectId(groupId),
              'groupRequestStatus': {
                '$ne': GroupRequestStatus.rejected
              },
              'isLeft': false,
              'isRemoved': false,
              'isDeleted': false,
            }
          },
          {
            '$lookup': {
              'from': 'users',
              'localField': 'member',
              'foreignField': '_id',
              'as': 'member'
            }
          }, {
            '$unwind': {
              'path': '$member',
              'preserveNullAndEmptyArrays': true
            }
          }, {
            '$project': {
              'isAdmin': 1,
              'groupRequestStatus': 1,
              'createdAt': 1,
              'member': {
                '_id': 1,
                'email': 1,
                'customerCode': 1,
                'firstName': 1,
                'lastName': 1,
                'name': 1,
                'displayName': 1,
                'avatar': 1,
                'city': 1,
              }
            }
          }, {
            '$match': match
          }, {
            '$facet': {
              'count': [
                {
                  '$count': 'count'
                }
              ],
              'list': [
                {
                  '$sort': {
                    'createdAt': -1
                  }
                }, {
                  '$skip': skip
                }, {
                  '$limit': limit
                }
              ]
            }
          }, {
            '$project': {
              'count': {
                '$first': '$count.count'
              },
              'list': 1
            }
          }
        ]
    
        const groupMemberData: any = await GroupMemberModel.aggregate(pipeline);
        let count = 0;
        let list = [];
        if (groupMemberData.length) {
          count = groupMemberData[0].count;
          list = groupMemberData[0].list;
        }
        return { count, list };
      }

}

export default new GroupService();
