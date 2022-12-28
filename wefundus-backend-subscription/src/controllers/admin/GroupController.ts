
import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import GroupModel from "../../models/GroupModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import GroupService from '../../services/admin/GroupService';
class GroupController {
    /**
        * @api {get} /api/v1/admin/group Group list
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
        * @apiVersion 1.0.0
        * @apiName get-group-list
        * @apiGroup Admin-Group
        * @apiSuccessExample {json} Success-Response:
        *HTTP/1.1 200 OK
        *    {
        *        "status": 200,
        *        "statusText": "SUCCESS",
        *        "message": "Group list fetched",
        *        "data": {
        *            "list": [
        *                {
        *                    "_id": "631867a72f264cd844f1949b",
        *                    "groupIcon": null,
        *                    "groupCode": "GT5301681",
        *                    "name": "test",
        *                    "purposeId": "631747bcd77165ad9c3a8575",
        *                    "purposeText": "testing purpose 123",
        *                    "description": "this is testing.",
        *                    "goalInterval": "1",
        *                    "goalPrice": 100,
        *                    "showContactInfo": true,
        *                    "phoneNumber": "1234567890",
        *                    "email": "test@gmail.com",
        *                    "address": "this is address",
        *                    "showSocialInfo": true,
        *                    "facebookUrl": "fb.com",
        *                    "twitterUrl": "twitter.com",
        *                    "members": [
        *                        "62dfcb21fb89c4b45de44685"
        *                    ],
        *                    "createdBy": "62dfcb21fb89c4b45de44685",
        *                    "totalMembers": 1,
        *                    "totalSubgroup": 0,
        *                    "subGroupLimit": 0,
        *                    "isDeleted": false,
        *                    "createdAt": "2022-09-07T09:43:03.164Z",
        *                    "updatedAt": "2022-09-07T09:43:03.164Z",
        *                    "__v": 0
        *                }
        *            ],
        *            "count": 2,
        *            "execTime": 131
        *        }
        *    }
        *
        */
    async groupList(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const queryString = req.query;

            const query = GroupModel.find({ isDeleted: false });
            const countQuery = GroupModel.find({ isDeleted: false });

            const listFeature = new ApiFeatures(query, queryString)
                .filtering()
                .searching(['name', 'groupCode'])
                .sorting('-createdAt')
                .pagination();

            const countFeature = new ApiFeatures(countQuery, queryString)
                .filtering()
                .searching(['name', 'groupCode'])
                .getCount();

            const count = await countFeature.query;
            const list = await listFeature.query.populate('createdBy');

            res.logMsg = 'Group list fetched.';
            return ResponseHelper.ok(res, res.__('group_list'), { list, count });

        } catch (error) {
            next(error);
        }
    }


    /**
      * @api {get} /api/v1/admin/group/:id Group Details
      * @apiHeader {String} App-Version Version Code 1.0.0.
      * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
      * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU3Njk1MzQzLCJleHAiOjE2NTc3ODE3NDN9.HAJ40QWHuL2QeXo3GVQZKziiiQHbLsq0hyuMM-SgfaY
      * @apiVersion 1.0.0
      * @apiName group-details
      * @apiGroup Admin-Group
      * @apiSuccessExample {json} Success-Response:
      *   {
      *        "status": 200,
      *        "statusText": "SUCCESS",
      *        "message": "Group details",
      *        "data": {
      *            "group": {
      *                "_id": "631867a72f264cd844f1949b",
      *                "groupIcon": null,
      *                "groupCode": "GT5301681",
      *                "name": "test",
      *                "description": "this is testing.",
      *                "goalInterval": "1",
      *                "goalPrice": 100,
      *                "showContactInfo": true,
      *                "phoneNumber": "1234567890",
      *                "email": "test@gmail.com",
      *                "address": "this is address",
      *                "showSocialInfo": true,
      *                "facebookUrl": "fb.com",
      *                "twitterUrl": "twitter.com",
      *                "city": "Test",
      *                "state": "Test",
      *                "zipCode": "1233",
      *                "totalSubgroup": 0,
      *                "subGroupLimit": 0,
      *                "createdBy": {
      *                    "_id": "62dfcb21fb89c4b45de44685",
      *                    "avatar": "user-profiles/1659706277298-pukhraj_saini_mce242.png",
      *                    "displayName": "pk",
      *                    "customerCode": "WFU516341"
      *                },
      *               "purpose": {
      *               "_id": "631eddcced7496146e770bf1",
      *               "text": "Fund Raising for Birds"
      *                },
      *                "totalMembers": 1,
      *                "isJoined": true,
      *                "isAdmin": true
      *            },
      *            "execTime": 135
      *        }
      *    }
      */
    async groupDetails(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const groupId = req.params.id;

            const exist = await GroupModel.exists({ _id: groupId });

            if (!exist) {
                return ResponseHelper.badRequest(res, res.__('group_does_not_exist'));
            }
            const group = await GroupService.groupDetails(groupId);
            return ResponseHelper.ok(res, res.__('group_details'), { group });

        } catch (error) {
            next(error);
        }
    }

    /**
     * @api {patch} /api/v1/admin/group Delete Groups 
     * @apiHeader {String} App-Version Version Code 1.0.0.
     * @apiHeader {String} Authorization 
     * @apiVersion 1.0.0
     * @apiName Delete Group
     * @apiGroup Admin-Group
     * 
     * @apiParamExample {json} Request-body
     * {
     *   groupIds = ["631eddcced7496146e770bf1"]
     * }
     * @apiSuccessExample {json} Success-Response:
     * {
     *    "status": 200,
     *    "statusText": "SUCCESS",
     *    "message": "Group deleted"
     *}
     *
     */
    async removeGroup(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const groupIds = req.body.groupIds as string[];
            await GroupService.deleteGroups(groupIds);
            res.logMsg = `groups deleted successfully`;
            let msg = 'groups_deleted';
            if (groupIds.length === 1) {
                msg = 'group_deleted'
            }
            return ResponseHelper.ok(res, res.__(msg), {})
        } catch (error) {
            next(error);
        }
    }

    async groupMembers(req: ReqInterface, res: ResInterface, next: NextFunction){
        try {
            const groupId = req.params.id;
            const page: number = Number(req.query.page) * 1 || 1;
            const limit: number = Number(req.query.limit) * 1 || 20;
            let skip = (page - 1) * limit;
            const search = req.query.search as string; 
            
            const result = await GroupService.groupMemberList(groupId, skip, limit, search);
            return ResponseHelper.ok(res, res.__('Group_Member_list'), result);
        } catch (error) {
            next(error);
        }
    }
}
export default new GroupController();