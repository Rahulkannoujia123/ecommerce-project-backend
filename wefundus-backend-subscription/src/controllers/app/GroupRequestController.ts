import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import { UserInterface } from "../../interfaces/UserInterface";
import GroupMemberModel from "../../models/GroupMemberModel";
import GroupModel from "../../models/GroupModel";
import UserModel from "../../models/UserModel";
import GroupRequestService from "../../services/app/GroupRequestService";
import { ApiFeatures } from "../../utils/ApiFeatures";

class GroupRequestController {
    /**
           * @api {post} /api/v1/app/group/add-member Add member in a group
           * @apiHeader {String} App-Version Version Code 1.0.0.
           * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
           * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......
           * @apiVersion 1.0.0
           * @apiName add-member
           * @apiGroup App-Group
           * 
           * @apiParam {String} userId adding user Id
           * @apiParam {String} groupId group Id
           * 
           * @apiParamExample {json} Request-Body
           * {
           *        "groupId": "631867c02f264cd844f194ab",
           *        "userId": "62c56a08fea0ffa25a222127"
           *  }
           * @apiSuccessExample {json} Success-Response:
           *   {
           *        "status": 200,
           *        "statusText": "SUCCESS",
           *        "message": "Group request send successfully",
           *        "data": {
           *            "groupRequest": {
           *                "group": "631867c02f264cd844f194ab",
           *                "groupCode": "GT6596499",
           *                "member": "631ae66af08c192dadce8e90",
           *                "isAdmin": false,
           *                "isMuted": false,
           *                "isLeft": false,
           *                "leftTime": null,
           *                "isRemoved": false,
           *                "removeTime": null,
           *                "isDeleted": false,
           *                "groupRequestStatus": 1,
           *                "_id": "631edcf9ce6a946b2993f042",
           *                "createdAt": "2022-09-12T07:17:13.877Z",
           *                "updatedAt": "2022-09-12T07:17:13.877Z",
           *                "__v": 0
           *            },
           *            "execTime": 248
           *        }
           *    }
           * @apiErrorExample {json} Error1 : Request-Exists
           * {
           *        "status": 409,
           *        "statusText": "CONFLICT",
           *        "message": "Group request sent already",
           *        "data": {}
           * }
           * @apiErrorExample {json} Error2 : Member already exists
           * {
           *        "status": 409,
           *        "statusText": "CONFLICT",
           *        "message": "User is already member of ths group",
           *        "data": {}
           * }
           * @apiErrorExample {json} Error3 : Invalid group Id
           * {
           *        "status": 400,
           *        "statusText": "BAD_REQUEST",
           *        "message": "Invalid group id",
           *        "data": {
           *            "groupId": "631867c02f264cd844f194ad"
           *        }
           *    }
           * 
           * @apiErrorExample {json} Error3 : Not allowed
           * {
           *        "status": 410,
           *        "statusText": "EXPIRED",
           *        "message": "Only admin can send request",
           *        "data": {}
           *    }
           *
           */
    async addMember(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const sendBy = req.user._id;
            const { userId, groupId } = req.body;
            const group = await GroupModel.findById(groupId);
            if (!group) return ResponseHelper.badRequest(res, res.__('invalid_group_id'), { groupId });
            if (!await GroupMemberModel.exists({ group: groupId, member: sendBy, isAdmin: true }))
                return ResponseHelper.expired(res, res.__('admin_can_send_request'));
            const requestData = await GroupRequestService.createRequest(
                userId,
                groupId,
                group.groupCode,
                sendBy
            );

            if (requestData.isMemberExist) return ResponseHelper.conflict(res, res.__('member_already_exists'));
            if (requestData.isRequestExist) return ResponseHelper.conflict(res, res.__('request_already_exists'));

            res.logMsg = `Request created successfully for group *${groupId}* and user *${userId}*`;
            return ResponseHelper.ok(
                res,
                res.__('group_join_request_sent'),
                {
                    groupRequest: requestData.groupRequest
                }
            );
        } catch (error) {
            next(error);
        }
    }


    /**
       * @api {patch} /api/v1/app/group/request-action/:id Accept Reject group join request
       * @apiHeader {String} App-Version Version Code 1.0.0.
       * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
       * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......
       * @apiVersion 1.0.0
       * @apiName request-action
       * @apiGroup App-Group
       * 
       * @apiDescription pass group _id as params
       * @apiParam {Boolean} isAccept true if accept, false if reject
       * 
       * @apiParamExample {json} Request-Body-1: Accept request and join group
       * {
       *        "isAccept": true
       *  }
       * @apiParamExample {json} Request-Body-2 : Reject request
       * {
       *        "isAccept": false
       *  }
       * @apiSuccessExample {json} Success-Response: Group joined
       *   {
       *        "status": 200,
       *        "statusText": "SUCCESS",
       *        "message": "Group join successfully",
       *        "data": {
       *            "group": {
       *                "_id": "631867c02f264cd844f194ab",
       *                "groupIcon": "group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg",
       *                "groupCode": "GT6596499",
       *                "name": "testing edit",
       *                "purposeId": "631747bcd77165ad9c3a8575",
       *                "purposeText": "testing purpose 123",
       *                "description": "this is testing edit.",
       *                "goalInterval": "2",
       *                "createdBy": "62dfcb21fb89c4b45de44685",
       *                "totalMembers": 1,
       *                "totalSubgroup": 0,
       *                "subGroupLimit": 0,
       *                "isDeleted": true,
       *                "createdAt": "2022-09-07T09:43:28.367Z",
       *                "updatedAt": "2022-09-09T13:07:49.317Z",
       *                "__v": 2
       *            },
       *            "execTime": 263
       *        }
       *    }
       * @apiSuccessExample {json} Success-Response: Request rejected
       *   {
       *        "status": 206,
       *        "statusText": "REJECTED",
       *        "message": "Group join request rejected",
       *        "data": {
       *            "group": {
       *                "_id": "631867c02f264cd844f194ab",
       *                "groupIcon": "group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg",
       *                "groupCode": "GT6596499",
       *                "name": "testing edit",
       *                "purposeId": "631747bcd77165ad9c3a8575",
       *                "purposeText": "testing purpose 123",
       *                "description": "this is testing edit.",
       *                "goalInterval": "2",
       *                "createdBy": "62dfcb21fb89c4b45de44685",
       *                "totalMembers": 1,
       *                "totalSubgroup": 0,
       *                "subGroupLimit": 0,
       *                "isDeleted": true,
       *                "createdAt": "2022-09-07T09:43:28.367Z",
       *                "updatedAt": "2022-09-09T13:07:49.317Z",
       *                "__v": 2
       *            },
       *            "execTime": 263
       *        }
       *    }
       * @apiErrorExample {json} Error1 : Request not found
       * {
       *        "status": 400,
       *        "statusText": "BAD_REQUEST",
       *        "message": "Join request not found",
       *        "data": {
       *            "groupId": "631867c02f264cd844f194ab"
       *        }
       *    }
       * @apiErrorExample {json} Error3 : Invalid group Id
       * {
       *        "status": 400,
       *        "statusText": "BAD_REQUEST",
       *        "message": "Invalid group id",
       *        "data": {
       *            "groupId": "631867c02f264cd844f194ad"
       *        }
       *    }
       *
       */

    async groupRequestAction(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const isAccept = req.body.isAccept;
            const user = req.user as UserInterface;
            const groupId = req.params.id;
            const group = await GroupModel.findById(groupId);
            if (!group) return ResponseHelper.badRequest(res, res.__('invalid_group_id'), { groupId });
            const requestData = await GroupRequestService.groupRequest(group, user, isAccept);
            if (requestData.requestNotExists) return ResponseHelper.badRequest(res, res.__('no_request_found'), { groupId })
            if (requestData.isRequestAccepted) return ResponseHelper.ok(res, res.__('group_joined'), { group });
            return ResponseHelper.responseHandler(res, 206, 'REJECTED', res.__('join_group_request_rejected'), { group });
        } catch (error) {
            next(error);
        }
    }



    /**
       * @api {get} /api/v1/app/group/user-list/:id user list for a group to add member
       * @apiHeader {String} App-Version Version Code 1.0.0.
       * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
       * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......
       * @apiVersion 1.0.0
       * @apiName user-list
       * @apiGroup App-Group
       * 
       * @apiDescription pass group _id as params
       * 
       * @apiParam {Number} [limit] number of records per page 
       * @apiParam {Number} [page] page number default = 1 
       * 
       * @apiSuccessExample {json} Success-Response: Users List
       * {
       *    "status": 200,
       *    "statusText": "SUCCESS",
       *    "message": "users_list",
       *    "data": {
       *        "count": 65,
       *        "list": [
       *            {
       *                "_id": "62da9963b647612af2d9b831",
       *                "email": "kamal.chauhan@mobilecoderz.com",
       *                "avatar": "user-profiles/1663217637392-/5af03212-a4fd-40cd-b84c-5c209196be0d.jpg",
       *                "description": "Write something for……\n",
       *                "firstName": "Kamal chauhan ",
       *                "lastName": "Vvipkamal",
       *                "name": "Kamal chauhan  Vvipkamal",
       *                "facebookProfileUrl": "https://www.facebook.com/pukhrajsaini",
       *                "instagramUsername": "pukhrajsaini",
       *                "linkedinProfileUrl": "https://www.linkedin.com/in/pukhrajsaini",
       *                "twitterUsername": "@pukhrajsaini",
       *                 "customerCode": "WFU911547"
       *            }
       *    }
       * 
       * */

    async userList(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const groupId = req.params.id as string;
            const queryString = req.query;
            const userId = req.user._id;

            const match = {
                isDeleted: false,
                isAccountActive: true,
                isCompleted: true,
                _id: { '$ne': userId },
                groups: { '$ne': groupId },
            }
            
            const query = UserModel.find(
                match,
                {
                    name: 1,
                    avatar: 1,
                    customerId: 1,
                    description: 1,
                    facebookProfileUrl: 1,
                    linkedinProfileUrl: 1,
                    twitterUsername: 1,
                    instagramUsername: 1,
                    email: 1,
                    firstName: 1,
                    lastName: 1,
                    customerCode: 1
                }
            );
            const queryCount = UserModel.find(match);
            const countQuery = new ApiFeatures(queryCount, queryString)
                .filtering()
                .searching(['name'])
                .getCount();

            const usersQuery = new ApiFeatures(query, queryString)
                .filtering()
                .searching(['name'])
                .sorting('name')
                .pagination();
            const count = await countQuery.query;
            const list = await usersQuery.query;
            res.logMsg = `Users list for group *${groupId}* fetched successfully`;
            return ResponseHelper.ok(res, res.__('users_list'), { count, list });
        } catch (error) {
            next(error);
        }
    }


    /**
       * @api {get} /api/v1/app/group/request-list Group request list for a user
       * @apiHeader {String} App-Version Version Code 1.0.0.
       * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
       * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.......
       * @apiVersion 1.0.0
       * @apiName request-list
       * @apiGroup App-Group
       * 
       * @apiParam {Number} [limit] number of records per page 
       * @apiParam {Number} [page] page number default = 1 
       * @apiParam {String} [search] search by group name
       * 
       * @apiSuccessExample {json} Success-Response: Users List
       * {
       *        "status": 200,
       *        "statusText": "SUCCESS",
       *        "message": "Group request list",
       *        "data": {
       *            "count": 1,
       *            "list": [
       *                {
       *                    "_id": "631edda11e346f50e1313190",
       *                    "group": {
       *                        "_id": "631867c02f264cd844f194ab",
       *                        "groupIcon": "group-icons/1662632226790-85e642626dbbbee704edf3f6f33ef837.jpg",
       *                        "groupCode": "GT6596499",
       *                        "name": "testing edit",
       *                        "purposeText": "testing purpose 123"
       *                    },
       *                    "groupRequestStatus": 1,
       *                    "createdAt": "2022-09-12T07:20:01.606Z",
       *                    "updatedAt": "2022-09-15T10:42:48.197Z",
       *                    "requestSentBy": "62dfcb21fb89c4b45de44685",
       *                    "sentBy": {
       *                        "_id": "62dfcb21fb89c4b45de44685",
       *                        "avatar": "user-profiles/1659706277298-pukhraj_saini_mce242.png",
       *                        "name": "puhraj saini"
       *                    }
       *                }
       *            ],
       *            "execTime": 123
       *        }
       *    }
       * 
       * */

    async requestList(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.user._id;
            const queryString = req.query;
            const data = await GroupRequestService.groupRequestList(userId, queryString);
            return ResponseHelper.ok(res, res.__('group_requests'), data);
        } catch (error) {
            next(error);
        }
    }
}

export default new GroupRequestController();