import { NextFunction } from "express";
import { UserInterface } from "../../interfaces/UserInterface";
import { ObjectId } from 'mongoose';
import { ResInterface } from "../../interfaces/ReqInterface";
declare class UserService {
    /**
         * @param  {File} profilePic
         * @param {UserInterface}
         * @return {Promise<UserInterface>} edit profile user
         */
    editProfile(profilePic: any, user: UserInterface, userData: any, next: NextFunction): Promise<{
        user: UserInterface;
        isEmailChanged: boolean;
    } | void>;
    addUserToGroup(user: UserInterface): Promise<boolean>;
    /**
     *
     * @param profilePic
     * @param directory
     * @returns uploaded file absolute path
     */
    private uploadPhoto;
    /**
     *
     * @param userData
     * @param user
     * @returns user
     */
    changeEmailAndUpdateProfile(userData: UserInterface, user: UserInterface, next: NextFunction): Promise<UserInterface>;
    verifyEmail(user: UserInterface, email: string, token: string, res: ResInterface, next: NextFunction): Promise<{
        user: UserInterface;
    } | void>;
    /**
     *
     * @param id
     * @param facebookProfileUrl
     * @param linkedinProfileUrl
     * @param twitterUsername
     * @param instagramUsername
     * @returns updated user
     */
    update(id: string | ObjectId, facebookProfileUrl: string, linkedinProfileUrl: string, twitterUsername: string, instagramUsername: string): Promise<UserInterface>;
    generateCustomerCode(): Promise<string>;
}
declare const _default: UserService;
export default _default;
