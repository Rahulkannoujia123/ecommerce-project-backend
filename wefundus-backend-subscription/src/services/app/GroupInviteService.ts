import { UserInterface } from "../../interfaces/UserInterface";
import GroupModel from "../../models/GroupModel";
import UserModel from "../../models/UserModel";
import GroupRequestService from "./GroupRequestService";
import axios from 'axios';
import { env } from "../../environments/Env";
import { Email } from "../../utils/Email";
import GroupInviteModel from "../../models/GroupInviteModel";
import { GroupInterface } from "../../interfaces/GroupInterface";

class GroupInviteService {

    async inviteMember(sender: UserInterface, groupId: string, emails: string[], content: string): Promise<{
        groupNotExists?: boolean,
        notAdmin?: boolean,
        isInvited?: boolean
    }> {
        const inviteEmails: string[] = [];
        const group = await GroupModel.findById(groupId);
        if (!group) return { groupNotExists: true };
        if (JSON.stringify(group.createdBy) !== JSON.stringify(sender._id)) return { notAdmin: true };
        for (const email of emails) {
            const userExists = await UserModel.findOne({ email, isDeleted: false });
            if (userExists) {
                await GroupRequestService.createRequest(userExists._id, groupId, group.groupCode, sender._id);
            }
            else {
                inviteEmails.push(email);
            }
        }
        this.sendInvitationEmails(group, sender, inviteEmails, content);
        return {
            isInvited: true
        }

    }

    /**
     * 
     * @param groupId 
     * @param emails 
     * @param content 
     */
    async sendInvitationEmails(group: GroupInterface, sender: UserInterface, emails: string[], content: string) {
        const groupId = group._id as string;
        const invitationLink = await this.getDeepLink('/root/signup?groupId=', groupId);
        for (const email of emails) {
            if (!await GroupInviteModel.exists({ email, invitedBy: sender._id, groupId: group._id }))
                await GroupInviteModel.create({
                    email,
                    groupCode: group.groupCode,
                    groupId: group._id,
                    invitedBy: sender._id
                });
            await new Email(email).sendInvitationEmail(invitationLink, content);
        }
    }

    /**
     * 
     * @param endPoint 
     * @param token 
     * @returns 
     */

    async getDeepLink(endPoint: string, token: string): Promise<string> {
        // return id;
        const link = await axios({
            method: 'post',
            url: 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDHEggHNDGlr_u3oT5wNMPzivVXESAIwE4',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                dynamicLinkInfo: {
                    domainUriPrefix: 'https://wefundus.page.link',
                    link: `${env().webUrl}${endPoint}${token}`,
                    iosInfo: {
                        iosBundleId: 'com.wefundus.mobilecoderz',
                        iosFallbackLink: 'https://staging.wefundus.com'
                    },
                    androidInfo: {
                        androidPackageName: 'com.wefundus.mobilecoderz',
                        androidFallbackLink: 'https://staging.wefundus.com'
                    },

                },
                suffix: {
                    option: 'SHORT',
                },
            }
        });
        return link.data.shortLink;
    }
}

export default new GroupInviteService();