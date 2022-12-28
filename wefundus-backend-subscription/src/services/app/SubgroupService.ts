import { SubgroupInterface } from "../../interfaces/SubgroupInterface";
import GroupModel from "../../models/GroupModel";
import { ObjectId, PipelineStage, Types } from 'mongoose';
import SubgroupModel from "../../models/SubgroupModel";
import { S3_DIRECTORY } from "../../constants/S3Constant";
import { FileUpload } from "../../utils/FileUpload";
import { UserInterface } from "../../interfaces/UserInterface";
import SubgroupMemberModel from "../../models/SubgroupMember";
import GroupMemberModel from "../../models/GroupMemberModel";
import { GroupMemberInterface } from "../../interfaces/GroupMemberInterface";
import { GroupInterface } from "../../interfaces/GroupInterface";

class SubgroupService {

  async createGroup(subgroupData: SubgroupInterface, icon: any, user: UserInterface): Promise<{
    groupNotFound?: boolean;
    notAdmin?: boolean;
    subgroup?: SubgroupInterface
  }> {
    const { groupId, groupName, name, description } = subgroupData;

    const isGroup = await this.handleGroup(groupId, user);
    if (isGroup.notGroup) return { groupNotFound: true };
    if (isGroup.notAdmin) return { notAdmin: true }

    //will change member limit on the base of subscription.
    const subgroup = await SubgroupModel.create({
      name,
      groupName,
      description,
      groupId,
      memberLimit: 20,
      members: [user._id],
      totalMember: 0,
      createdBy: user._id,
      icon: await this.uploadIcon(icon)
    });
    const group = isGroup.group;
    await group.save();
    await this.createSubgroupMember(subgroup._id, groupId, user._id, true);
    return { subgroup };
  }

  private async uploadIcon(icon: any): Promise<string> {
    const fileName = `${Date.now()}-${icon.originalFilename}`;
    return await new FileUpload().uploadFileOnS3(icon, S3_DIRECTORY.subgruopIcons, fileName);
  }

  private async createSubgroupMember(subgroupId: string | ObjectId, groupId: string | ObjectId, memberId: string | ObjectId, isAdmin: boolean = false): Promise<boolean> {
    await SubgroupMemberModel.create({
      subgroupId,
      groupId,
      memberId,
      isAdmin
    });
    await GroupMemberModel.updateOne({ member: memberId, group: groupId }, { '$push': { subgroups: subgroupId } })
    return true
  }

  private async handleGroup(groupId: ObjectId | string, user: UserInterface): Promise<{
    notAdmin?: boolean;
    notGroup?: boolean;
    group?: GroupInterface;
  }> {
    const group = await GroupModel.findById(groupId);
    if (!group) return { notGroup: true };

    if (JSON.stringify(user._id) !== JSON.stringify(group.createdBy)) return { notAdmin: true };
    /* will uncomment below line once subscription implemented. */
    // if(!group.subGroupSubscribed) return false;
    group.totalSubgroup += 1;
    return { group };
  }

  async subgroupDetails(subgroupId: string, user: UserInterface): Promise<{
    subgroupNotFound?: boolean;
    subgroup?: any;
  }> {
    const pipeline = [
      {
        '$match': {
          '_id': new Types.ObjectId(subgroupId)
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
        '$lookup': {
          'from': 'groups',
          'localField': 'groupId',
          'foreignField': '_id',
          'as': 'group'
        }
      }, {
        '$unwind': {
          'path': '$group',
          'preserveNullAndEmptyArrays': true
        }
      },
      {
        '$project': {
          'name': 1,
          'groupName': 1,
          'totalMember': 1,
          'memberLimit': 1,
          'createdAt': 1,
          'icon': 1,
          'description': 1,
          'createdBy': {
            '_id': 1,
            'email': 1,
            'displayName': 1,
            'name': 1,
            'avatar': 1,
            'customerCode': 1
          },
          'group':{
            '_id': 1,
            'groupIcon': 1,
            'name': 1,
            'groupCode': 1
          },
          'isAdmin': {
            '$eq': [
              '$createdBy._id', user._id
            ]
          }
        }
      }
    ] as PipelineStage[];

    const result = await SubgroupModel.aggregate(pipeline);
    if (!result.length) return { subgroupNotFound: true };
    return { subgroup: result[0] };
  }

  listAggPipeline(condition: { [key: string]: any }, userId: ObjectId, queryString: any) {
    const page = Number(queryString.page) * 1 || 1;
    const limit = Number(queryString.limit) * 1 || 10;
    const skip = (page - 1) * limit;
    return [
      {
        '$match': condition
      },
      {
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
            }, {
              '$lookup': {
                'from': 'groups',
                'localField': 'groupId',
                'foreignField': '_id',
                'as': 'group'
              }
            }, {
              '$unwind': {
                'path': '$group',
                'preserveNullAndEmptyArrays': true
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
            }, {
              '$project': {
                '_id': 1,
                'icon': 1,
                'name': 1,
                'createdAt': 1,
                'totalMember': 1,
                'memberLimit': 1,
                'description': 1,
                'group': {
                  '_id': 1,
                  'name': 1,
                  'groupIcon': 1,
                  'email': 1
                },
                'createdBy': {
                  '_id': 1,
                  'name': 1,
                  'avatar': 1,
                  'displayName': 1
                },
                'isJoined': {
                  '$in': [
                    userId, '$members'
                  ]
                }
              }
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
    ] as PipelineStage[];
  }

  async handleSubgroupMemberRemove(subgroupId: string | ObjectId, userId: string | ObjectId): Promise<boolean> {
    let subgroup = await SubgroupModel.findById(subgroupId);

    subgroup.members = subgroup.members.filter((e: ObjectId) => JSON.stringify(userId) !== JSON.stringify(e));

    subgroup.totalMember -= 1;

    const groupMember = await GroupMemberModel.findOne({ member: userId, group: subgroup.groupId });
    groupMember.subgroups = groupMember.subgroups.filter((e: ObjectId) => JSON.stringify(subgroupId) !== JSON.stringify(e));
    await groupMember.save();
    await subgroup.save();
    await SubgroupMemberModel.deleteOne({ subgroupId, memberId: userId });
    return true;
  }

  async addMember(subgroupId: string | ObjectId, memberId: string | ObjectId): Promise<{
    subgroupNotFound?: boolean;
    alreadyMember?: boolean;
    notGroupMember?: boolean;
    limitExceed?: boolean;
    subgroup?: SubgroupInterface;
  }> {
    let subgroup = await SubgroupModel.findById(subgroupId);
    if (!subgroup) return { subgroupNotFound: true };

    if (subgroup.memberLimit <= subgroup.totalMember)
      return { limitExceed: true };

    if (await this.checkSubgroupMember(subgroupId, memberId)) return { alreadyMember: true };

    let groupMember = await this.checkGroupMember(subgroup.groupId, memberId);
    if (!groupMember) return { notGroupMember: true };

    await this.createSubgroupMember(subgroupId, subgroup.groupId, memberId);
    groupMember.subgroups.push(subgroup._id);
    await groupMember.save();
    subgroup.members.push(memberId);
    subgroup.totalMember += 1;
    await subgroup.save();

    return { subgroup };
  }

  private async checkSubgroupMember(subgroupId: string | ObjectId, memberId: string | ObjectId) {
    const exist = await SubgroupMemberModel.exists({ subgroupId, memberId, isDeleted: false });

    return exist ? true : false;
  }

  private async checkGroupMember(groupId: string | ObjectId, memberId: string | ObjectId): Promise<GroupMemberInterface> {
    const groupMember = await GroupMemberModel.findOne({ isDeleted: false, isLeft: false, isRemoved: false, group: groupId, member: memberId });
    return groupMember;
  }

  async groupMemberListToAddSubgroup(subgroupId: string, queryString: any, user: UserInterface): Promise<{
    subgroupNotExists?: boolean,
    result?: { list?: any[], count: number }
  }> {
    const page = Number(queryString.page) || 1;
    const limit = Number(queryString.limit) || 10;
    const skip = (page - 1) * limit;

    const subgroup = await SubgroupModel.findById(subgroupId);
    if (!subgroup) return { subgroupNotExists: true };

    let matchSearch: any = {};
    if (queryString.search && queryString.search.trim()) matchSearch = { 'user.name': { '$regex': queryString.search, '$options': '$i' } };

    const pipeline = [
      {
        '$match': {
          'isAdmin': false,
          'isDeleted': false,
          'isLeft': false,
          'isRemoved': false,
          'group': subgroup.groupId,
          'subgroups': { '$ne': subgroup._id }
        }
      },
      {
        '$lookup': {
          'from': 'users',
          'localField': 'member',
          'foreignField': '_id',
          'as': 'user'
        }
      },
      {
        '$unwind': {
          'path': '$user',
          'preserveNullAndEmptyArrays': true
        }
      },
      {
        '$match': matchSearch
      },
      {
        '$replaceRoot': {
          'newRoot': '$user'
        }
      },
      {
        '$facet': {
          'count': [
            {
              '$count': 'count'
            }
          ],
          'list': [
            {
              '$sort': {
                'name': 1
              }
            },
            {
              '$skip': skip
            },
            {
              '$limit': limit
            },
            {
              '$project': {
                'name': 1,
                'avatar': 1,
                'customerId': 1,
                'description': 1,
                'facebookProfileUrl': 1,
                'linkedinProfileUrl': 1,
                'twitterUsername': 1,
                'instagramUsername': 1,
                'email': 1,
                'firstName': 1,
                'lastName': 1,
                'customerCode': 1
              }
            }
          ]
        }
      },
      {
        '$project': {
          'count': {
            '$first': '$count.count'
          },
          'list': 1
        }
      }
    ] as PipelineStage[];

    let list = [];
    let count = 0;
    const result: any = await GroupMemberModel.aggregate(pipeline);
    if (result && result.length) {
      list = result[0].list;
      count = result[0].count;
    }
    return { result: { list, count } }
  }

  async removeMember(memberId: string | ObjectId, subgroupId: string | ObjectId, user: UserInterface): Promise<
    {
      memberNotExists?: boolean,
      isRemoved?: boolean,
      notAdmin?: boolean
    }
  > {
    const member = await SubgroupMemberModel.findOne({ memberId, subgroupId });
    if (!member) return { memberNotExists: true };
    if (!await GroupMemberModel.exists({ member: user._id, group: member.groupId, isAdmin: true })) return { notAdmin: true };
    return { isRemoved: await this.handleSubgroupMemberRemove(subgroupId, memberId) };
  }


  async deleteSubgroup(subgroupId: string | ObjectId, user: UserInterface): Promise<{
    subgroupNotExists?: boolean,
    notAdmin?: boolean,
    isDeleted?: boolean
  }> {
    const subgroup = await SubgroupModel.findById(subgroupId);
    if (!subgroup) return { subgroupNotExists: true };
    const subgroupMember = await SubgroupMemberModel.findOne({ subgroupId, memberId: user._id });
    if (!subgroupMember || !subgroupMember.isAdmin) return { notAdmin: true };

    await GroupMemberModel.updateMany({ group: subgroup.groupId, member: subgroup.members }, { '$pull': { subgroups: subgroup._id } });
    await GroupModel.updateOne({ _id: subgroup.groupId }, { '$inc': { totalSubgroup: -1 } });
    await subgroup.delete();
    await SubgroupMemberModel.deleteMany({ subgroupId });
    return { isDeleted: true };
  }

  async editSubgroup(subgroupId: ObjectId | string, subgroupData: SubgroupInterface, userData: UserInterface, icon: any = null): Promise<{
    subgroupNotFound?: boolean;
    notAdmin?: boolean;
    subgroup?: SubgroupInterface
  }> {
    const { groupId, groupName, name, description } = subgroupData;
    const subgroup = await SubgroupModel.findById(subgroupId);

    if (!subgroup) return { subgroupNotFound: true };

    if (JSON.stringify(userData._id) !== JSON.stringify(subgroup.createdBy)) return { notAdmin: true };

    subgroup.groupId = groupId || subgroup.groupId;
    subgroup.groupName = groupName || subgroup.groupName;
    subgroup.name = name || subgroup.name;
    subgroup.description = description || subgroup.description;

    if (icon && typeof icon !== 'string') {
      subgroup.icon = await this.uploadIcon(icon);
    }

    await subgroup.save();
    return { subgroup };
  }
}

export default new SubgroupService();