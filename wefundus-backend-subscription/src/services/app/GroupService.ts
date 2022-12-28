import { S3_DIRECTORY } from "../../constants/S3Constant";
import { GroupInterface } from "../../interfaces/GroupInterface";
import { GroupPurposeInterface } from "../../interfaces/GroupPurposeInterface";
import GroupModel from "../../models/GroupModel";
import GroupPurposeModel from "../../models/GroupPurPoseModel";
import { FileUpload } from "../../utils/FileUpload";
import { ObjectId, PipelineStage, Types } from 'mongoose'
import { GroupMemberInterface, GroupRequestStatus } from "../../interfaces/GroupMemberInterface";
import GroupMemberModel from "../../models/GroupMemberModel";
import { Auth } from '../../utils/Auth';
import UserModel from "../../models/UserModel";
import GroupRequestService from "./GroupRequestService";
import { UserInterface } from "../../interfaces/UserInterface";
import SubgroupModel from "../../models/SubgroupModel";
import SubgroupService from "./SubgroupService";


class GroupService {
  /**
   * 
   * @param photo 
   * @returns uploaded photo url.
   */
  private async UploadPhoto(photo: any): Promise<string> {
    const fileName = `${Date.now()}-${photo.originalFilename}`;
    return await new FileUpload().uploadFileOnS3(photo, S3_DIRECTORY.groupIcons, fileName);

  }
  /**
   * 
   * @param name 
   * @returns groupPurpose of interface GroupPurposeInterface.
   */
  private async handleGroupPurpose(purpose: string, others: boolean): Promise<GroupPurposeInterface> {
    let groupPurpose: GroupPurposeInterface = null;
    /* others is in string bcoz of formdata */
    if (others.toString() === 'false') {
      groupPurpose = await GroupPurposeModel.findById(purpose);
      return groupPurpose;
    }
    groupPurpose = new GroupPurposeModel();
    groupPurpose.text = purpose;
    await groupPurpose.save();
    return groupPurpose;
  }
  /**
   * 
   * @param groupData group data to be saved.
   * @param purpose  purpose may be an ObjectId or string.
   * @param others whether purpose is ObjectId or not.
   * @param groupIcon file for group icon.
   * @returns data of type GroupInterface.
   */
  async createGroup(userId: ObjectId, groupData: GroupInterface, purpose: string, others: boolean, groupIcon: any): Promise<GroupInterface> {
    const groupPurpose: GroupPurposeInterface = await this.handleGroupPurpose(purpose, others);

    let url = null;
    if (groupIcon) {
      url = await this.UploadPhoto(groupIcon);
    }
    groupData.groupIcon = url;
    groupData.purposeId = groupPurpose._id;
    groupData.purposeText = groupPurpose.text;
    groupData.createdBy = userId;
    groupData.members = [userId];
    groupData.groupCode = await this.generateGroupId();

    let group = await new GroupModel(groupData).save();
    await this.handleGroupMember(userId, group._id, group.groupCode)
    return group;
  }
  /**
   * 
   * @param userId 
   * @param groupId 
   * @returns data of type GroupMemberInterface;
   */
  private async handleGroupMember(userId: ObjectId, groupId: ObjectId | string, groupCode: string): Promise<
    {
      isUser?: boolean;
      group?: GroupMemberInterface;
    }
  > {
    let data = {
      group: groupId,
      member: userId,
      isAdmin: true,
      groupCode: groupCode,
      groupRequestStatus: GroupRequestStatus.noRequest
    }

    let user = await UserModel.findByIdAndUpdate(userId, { $push: { groups: groupId } }, { new: true });
    if (!user) return { isUser: false };
    const group = await GroupMemberModel.create(data);
    return { group };
  }
  /**
   * @void
   * @returns code:string
   */
  private async generateGroupId(): Promise<string> {
    let code: string = new Auth().generateVerificationCode(7);
    code = `GT${code}`;
    const isExist = await GroupModel.exists({ groupCode: code });
    if (isExist) {
      code = await this.generateGroupId()
    }
    return code;
  }

  /**
   * 
   * @param groupId 
   * @returns Promise<any>
   */
  async groupDetails(groupId: string, userId: ObjectId | string): Promise<any> {
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
          'subGroupLimit':1,
          'totalSubgroup':1,
          'facebookUrl': 1,
          'twitterUrl': 1,
          'city': 1,
          'state': 1,
          'zipCode': 1,
          'isJoined': {
            '$in': [
              userId, '$members'
            ]
          },
          'isAdmin': {
            '$eq': [
              userId, '$createdBy._id'
            ]
          },
          'createdBy': {
            '_id': 1,
            'avatar': 1,
            'displayName': 1,
            'customerCode': 1
          },
          'purpose': {
            '_id': 1,
            'text': 1
          }
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

  /**
   * 
   * @param groupId 
   * @param groupData 
   * @param groupIcon 
   * @returns {Promise<GroupInterface>}
   */
  async editGroup(groupId: string, groupData: GroupInterface, groupIcon: any = null): Promise<GroupInterface> {
    const { name, goalInterval, goalPrice, description, showContactInfo, showSocialInfo, phoneNumber, email, address, facebookUrl, twitterUrl, city, state, zipCode } = groupData;

    let group = await GroupModel.findById(groupId);
    group.name = name || group.name;
    group.goalInterval = goalInterval || group.goalInterval;
    group.goalPrice = goalPrice || group.goalPrice;
    group.description = description || group.description;
    group.showContactInfo = showContactInfo || group.showContactInfo;
    group.showSocialInfo = showSocialInfo || group.showSocialInfo;
    group.phoneNumber = phoneNumber || group.phoneNumber;
    group.email = email || group.email;
    group.address = address || group.address;
    group.twitterUrl = twitterUrl || group.twitterUrl;
    group.facebookUrl = facebookUrl || group.facebookUrl;
    group.city = city || group.city;
    group.state = state || group.state;
    group.zipCode = zipCode || group.zipCode;

    if (groupIcon && typeof groupIcon !== 'string') {
      group.groupIcon = await this.UploadPhoto(groupIcon);
    }

    await group.save();
    return group;
  }

  /**
   * 
   * @param groupId 
   * @param skip 
   * @param limit 
   * @param search 
   * @returns {Promise<any>} list of group members.
   */
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
          'member': {
            '_id': 1,
            'email': 1,
            'customerCode': 1,
            'firstName': 1,
            'lastName': 1,
            'name': 1,
            'displayName': 1,
            'avatar': 1
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

  /**
   * 
   * @param {string} groupId 
   * @param {string} memberId 
   * @returns {Promise}
   */
  async removeMember(groupId: string, memberId: string, userId: ObjectId): Promise<
    {
      groupNotExist?: boolean;
      notGroupMember?: boolean;
      notAdmin?: boolean;
      group?: GroupInterface;
    }
  > {
    let group = await GroupModel.findById(groupId) as GroupInterface;
    if (!group) return { groupNotExist: true };

    if (JSON.stringify(group.createdBy) !== JSON.stringify(userId)) return { notAdmin: true };

    const groupMember = await this.handleGroupMemberRemove(groupId, memberId);

    if (!groupMember) return { notGroupMember: true };

    group = await this.handleUserRemove(group, memberId);
    return { group };
  }

  /**
   * 
   * @param group 
   * @param userId 
   * @returns Promise<GroupInterface>
   */
  private async handleUserRemove(group: GroupInterface, userId: string | ObjectId): Promise<GroupInterface> {

    group.members = group.members.filter((e: ObjectId) => JSON.stringify(userId) !== JSON.stringify(e));
    group.totalMembers -= 1;
    await group.save();

    const user = await UserModel.findById(userId);
    user.groups = user.groups.filter((e: ObjectId) => JSON.stringify(e) !== JSON.stringify(group._id));
    await user.save();
    return group;
  }

  /**
   * 
   * @param groupId 
   * @param memberId 
   * @returns Promise<boolean>
   */
  private async handleGroupMemberRemove(groupId: string, memberId: string | ObjectId, isLeft: boolean = false): Promise<boolean> {
    let groupMember = await GroupMemberModel.findOne({
      group: groupId,
      member: memberId,
      isDeleted: false
    });

    if (!groupMember) return false;

    if (isLeft) {
      if (groupMember.isLeft) return false;
      groupMember.isLeft = true;
      groupMember.leftTime = new Date();
    } else {
      if (groupMember.isRemoved) return false;
      groupMember.isRemoved = true;
      groupMember.removeTime = new Date();
    }
    await groupMember.save();

    const subgroups = await SubgroupModel.find({ groupId, isDeleted: false });

    for(let subgroup of subgroups){
      await SubgroupService.handleSubgroupMemberRemove(subgroup._id, memberId);
    }
    return true;
  }

  async searchGroup(
    queryString: any,
    uId: string | ObjectId
  ): Promise<{ count: number, list: any }> {
    const id = uId as string;
    const userId = new Types.ObjectId(id);
    const search = queryString.search as string;
    const page = Number(queryString.page) * 1 || 1;
    const limit = Number(queryString.limit) * 1 || 10;
    const skip = (page - 1) * limit;

    let searchKey = 'name';
    let searchValue = '';
    if (search) {
      [searchKey, searchValue] = search.split(',');
    }
    const match: any = {
      isDeleted: false
    }
    if (searchKey && searchValue) match[searchKey] = { '$regex': searchValue, '$options': '$i' };

    const favCheck = [
      {
        '$lookup': {
          'from': 'groupfavorites',
          'let': {
            'gid': '$_id'
          },
          'as': 'fav',
          'pipeline': [
            {
              '$match': {
                'userId': userId,
                '$expr': {
                  '$eq': [
                    '$$gid', '$groupId'
                  ]
                }
              }
            },
            {
              '$limit': 1
            }
          ]
        }
      },
    ] as PipelineStage[];

    const project = {
      '$project': {
        '_id': 1,
        'name': 1,
        'groupCode': 1,
        'groupIcon': 1,
        'purposeText': 1,
        'phoneNumber': 1,
        'email': 1,
        'city': 1,
        'state': 1,
        'showContactInfo': 1,
        'showSocialInfo': 1,
        'facebookUrl': 1,
        'twitterUrl': 1,
        'zipCode': 1,
        'address': 1,
        'description': 1,
        'totalMembers': 1,
        'isFavorite': {
          '$cond': [
            '$fav',
            {
              '$gt': [
                {
                  '$size': '$fav'
                }, 0
              ]
            },
            false
          ]
        },
        'isJoined': {
          '$in': [
            userId, '$members'
          ]
        },
        'createdBy': {
          '_id': 1,
          'avatar': 1,
          'customerCode': 1,
          'customerId': 1,
          'email': 1,
          'name': 1,
          'displayName': 1
        }

      }
    } as PipelineStage;


    const facet = {
      '$facet': {
        'count': [
          {
            '$count': 'count'
          }
        ],
        'groups': [
          {
            '$skip': skip
          },
          {
            '$limit': limit
          },
          {
            '$lookup': {
              'from': 'users',
              'localField': 'createdBy',
              'foreignField': '_id',
              'as': 'createdBy'
            }
          },
          {
            '$unwind': {
              'path': '$createdBy',
              'preserveNullAndEmptyArrays': true
            }
          },
        ]
      }
    } as any;

    const pipeline = [
      {
        '$match': match
      },
      facet
    ] as PipelineStage[];


    if (userId) facet.$facet.groups.push(...favCheck);
    facet.$facet.groups.push(project);

    console.log()
    const groupData = await GroupModel.aggregate(pipeline);
    let count = 0;
    let list = [];
    if (groupData.length) {
      if (groupData[0].count.length) { count = groupData[0].count[0].count };
      list = groupData[0].groups;
    }
    return { count, list };
  }


  /**
   * 
   * @param userId 
   * @param skip 
   * @param limit 
   * @param search 
   * @returns {Promise<{count: number; list:any}>}
   */

  async allGroupList(userId: ObjectId, skip: number, limit: number, search: string = ''): Promise<{ count: number; list: any }
  > {
    let match: any = {
      isDeleted: false
    }

    if (search && search.trim) {
      match = {
        'isDeleted': false,
        'name': {
          '$regex': search,
          '$options': '$i'
        }
      }
    }

    const pipeline = [
      {
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
                'from': 'groupfavorites',
                'let': {
                  'gid': '$_id'
                },
                'as': 'fav',
                'pipeline': [
                  {
                    '$match': {
                      'userId': userId,
                      '$expr': {
                        '$eq': [
                          '$$gid', '$groupId'
                        ]
                      }
                    }
                  },
                  {
                    '$limit': 1
                  }
                ]
              }
            },
            {
              '$project': {
                'name': 1,
                'groupIcon': 1,
                'email': 1,
                'groupCode': 1,
                'totalSubgroup': 1,
                'phoneNumber': 1,
                'address': 1,
                'createdBy': {
                  '_id': 1,
                  'name': 1,
                  'email': 1,
                  'avatar': 1,
                },
                'isJoined': {
                  '$cond': [
                    {
                      '$in': [
                        userId, '$members'
                      ]
                    }, true, false
                  ]
                },
                'isFavorite': {
                  '$gt': [
                    {
                      '$size': '$fav'
                    }, 0
                  ]
                },
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
          list: 1
        }
      }
    ] as PipelineStage[];

    const groupData = await GroupModel.aggregate(pipeline);

    let count = 0;
    let list = [];
    if (groupData.length) {
      count = groupData[0].count;
      list = groupData[0].list;
    }
    return { count, list };
  }

  async userLeftGroup(userId: ObjectId | string, groupId: string): Promise<
    {
      groupNotExist?: boolean;
      isAdmin?: boolean;
      notGroupMember?: boolean;
      group?: GroupInterface;
    }
  > {
    let group = await GroupModel.findById(groupId) as GroupInterface;
    console.log('group', group);

    if (!group) return { groupNotExist: true };

    if (JSON.stringify(group.createdBy) === JSON.stringify(userId)) {
      return { isAdmin: true }
    }

    const groupMember = await this.handleGroupMemberRemove(groupId, userId, true);

    if (!groupMember) return { notGroupMember: true };

    group = await this.handleUserRemove(group, userId);
    return { group };
  }

  async joinGroup(groupId: string, user: UserInterface): Promise<{
    groupNotExist?: boolean;
    alreadyMember?: boolean;
    group?: GroupInterface
  }> {
    let group = await GroupModel.findById(groupId);

    if (!group) return { groupNotExist: true };
    const member = await this.handleGroupMemberJoin(group, user);
    if (!member) return { alreadyMember: true }
    return { group }
  }

  private async handleGroupMemberJoin(group: GroupInterface, user: UserInterface): Promise<boolean> {
    let member = await GroupMemberModel.findOne({ group: group._id, member: user._id });
    if (member) {
      if (!member.isLeft && !member.isRemoved) return false;
    } else {
      member = await GroupMemberModel.create({
        group: group._id,
        member: user._id,
        groupRequestStatus: GroupRequestStatus.noRequest,
        groupCode: group.groupCode
      });
    }
    member.isRemoved = false;
    member.removeTime = null;
    return await GroupRequestService.handleRequestAccept(member, group, user, true);
  }
}

export default new GroupService();
