import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ResInterface, ReqInterface } from "../../interfaces/ReqInterface";
import { UserInterface } from "../../interfaces/UserInterface";
import GroupInviteService from "../../services/app/GroupInviteService";


class GroupInviteController {

    /**
           * @api {post} api/v1/app/group/invite-member Invite a member to join wefundus and a group via email
           * @apiHeader {String} App-Version Version Code 1.0.0.
           * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
           * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........
           * @apiVersion 1.0.0
           * @apiName invite-member
           * @apiGroup App-Group
           * 
           * @apiParam {String} groupId 
           * @apiParam {String[]} emails array of email ids
           * @apiParam {String} content
           * 
           * @apiParamExample {json} Request-Body
           * {
           *         "groupId": "6321d770c49be8f2c62454ac",
           *         "emails": [
           *             "pukhraj@mailinator.com",
           *             "pukhraj1@mailinator.com",
           *             "pukhraj2@mailinator.com",
           *             "pukhraj3@mailinator.com",
           *             "pukhraj4@mailinator.com",
           *             "pukhraj5@mailinator.com"
           *         ],
           *         "content": "aaiye or join wefundus for growing an orgnasition"
           *     } 
           * 
           * @apiSuccessExample {json} Success-Response
           *   {
           *         "status": 200,
           *         "statusText": "SUCCESS",
           *         "message": "Invitation sent successfully",
           *     }
           *
           */
    async inviteMember(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const user = req.user as UserInterface;
            const emails = req.body.emails as string[];
            const groupId = req.body.groupId as string;
            const content = req.body.content as string;
            const result = await GroupInviteService.inviteMember(user, groupId, emails, content);
            if (result.groupNotExists) return ResponseHelper.badRequest(res, res.__('invalid_group_id'));
            if(result.notAdmin) return ResponseHelper.badRequest(res, res.__('only_admin_can_invite'))
            return ResponseHelper.ok(res, res.__('invitation_sent'), {});
        } catch (error) {
            next(error);
        }
    }
}

export default new GroupInviteController();