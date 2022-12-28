import ResponseHelper from '../../helpers/ResponseHelper';
import { ReqInterface, ResInterface } from '../../interfaces/ReqInterface';
import { Auth } from '../../utils/Auth';
import { DeviceType } from '../../interfaces/UserInterface';
import { NextFunction } from 'express';
import { UserInterface } from "../../interfaces/UserInterface";
import UserModel from '../../models/UserModel';
import { Email } from '../../utils/Email';
// import { FirebaseDynamicLinks } from 'firebase-dynamic-links';
import axios from 'axios';
import { env } from '../../environments/Env';
import SessionModel from '../../models/SessionModel';
import UserService from '../app/UserService';

class AuthService {
    /**
     * @param email {string} email of user
     * @param password {string} Encrypted password
     * @param next {NextFunction} next function
     * @return {Promise<UserInterface>} new created user
     */
    async createUser(
        email: string,
        password: string,
        groupId: string,
        req: ReqInterface,
        next: NextFunction,
    ): Promise<{ user: UserInterface, verifyAccountToken: string } | void> {
        try {
            const customerCode = await UserService.generateCustomerCode();
            const user = await UserModel.create({
                email,
                password,
                customerCode,
                groupId
            });

            user.password = undefined;

            const verifyAccountToken = await new Auth().getToken(
                {
                    id: user._id,
                    role: 'VERIFY_ACCOUNT'
                },
                '1d',
                next
            );


            const endPoint = '/root/login?token=';
            const deepLinkUrl = await this.getDeepLink(endPoint, verifyAccountToken);
            await new Email(email).sendVerificationEmail(deepLinkUrl);

            return { user, verifyAccountToken: verifyAccountToken };
        } catch (error) {
            next(error);
        }
    }

    /**
     * 
     * @param email {String} user email
     * @param password {Password} user password
     * @param deviceType user device type
     * @param res {ResInterface} 
     * @param next {NextFunction} next function
     * @return {Promise<{admin: AdminInterface, token: string}>}
     */
    async login(
        email: string,
        password: string,
        deviceType: DeviceType,
        res: ResInterface,
        next: NextFunction
    ): Promise<{ user: UserInterface, token: string } | void> {
        try {
            const user = await UserModel.findOne({ email }).select('+password');

            if (!user) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }

            if (!user.isEmailVerified) {
                const verifyAccountToken = await new Auth().getToken(
                    {
                        id: user._id,
                        role: 'VERIFY_ACCOUNT'
                    },
                    '1d',
                    next
                );
                const endPoint = '/root/login?token=';
                const verificationUrl: string = await this.getDeepLink(endPoint, verifyAccountToken);
                await new Email(user.email).sendVerificationEmail(verificationUrl);
                return ResponseHelper.forbidden(res, res.__('email_not_verified'));
            }
            if (!user.isAccountActive) {
                return ResponseHelper.forbidden(res, res.__('account_not_active'));
            }
            const isPasswordCorrect = await new Auth().comparePassword(password, user.password);

            if (!isPasswordCorrect) {
                return ResponseHelper.badRequest(res, res.__('invalid_email_password'));
            }


            /**
             * create a session for user
             */

            const session = await SessionModel.create({
                user: user._id,
                deviceType,
            });

            const payload = {
                id: session._id,
                email: user.email,
                deviceType,
            }

            const token = await new Auth().getToken(
                payload,
                '365d',
                next
            );

            user.currentDeviceType = deviceType;
            user.lastLogin = new Date();
            await user.save();
            user.password = undefined;

            return {
                user,
                token
            }

        } catch (error) {
            next(error);
        }
    }

    /**
     * 
     * @param email 
     * @param req 
     * @param res 
     * @param next 
     * @returns {Promise<string>}
     */
    async forgotPassword(
        email: string,
        req: ReqInterface,
        res: ResInterface,
        next: NextFunction
    ): Promise<string | void> {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return ResponseHelper.unAuthorize(res, res.__('no_account_exist'));
        }

        const resetPasswordToken = await new Auth().getToken(
            {
                id: user._id,
                role: 'FORGOT_PASSWORD'
            },
            '1h',
            next
        );
        const endPoint = '/root/reset-password?resetToken=';
        const resetUrl = await this.getDeepLink(endPoint, resetPasswordToken);
        await new Email(user.email).sendForgetPasswordEmail(resetUrl);
        return resetUrl;
    }

    /**
     * 
     * @param password 
     * @param token 
     * @param res 
     * @param next 
     * @returns {Promise<{user: UserInterface, token: string}>}
     */

    async resetPassword(
        password: string,
        token: string,
        res: ResInterface,
        next: NextFunction
    ): Promise<{ user: UserInterface, token: string } | void> {
        const decoded = await new Auth().decodeJwt(token);

        if (decoded.role !== 'FORGOT_PASSWORD') {
            return ResponseHelper.badRequest(res, res.__('invalid_reset_token'));
        }

        const userId = decoded.id;
        const user = await UserModel.findById(userId);

        const tokenCreatedTimeDiff = Math.floor(new Date().getTime() / 1000) - decoded.iat;

        console.log('tokenCreatedTimeDiff', tokenCreatedTimeDiff);
        if (tokenCreatedTimeDiff > 10 * 60) {
            return ResponseHelper.expired(res, res.__('reset_token_expired'))
        }
        const encryptedPassword = await new Auth().encryptPassword(password);

        const payload = {
            id: user._id,
            email: user.email,
            deviceType: user.currentDeviceType,
        }

        const newToken = await new Auth().getToken(
            payload,
            '1d',
            next
        );

        user.password = encryptedPassword;
        user.lastLogin = new Date();
        user.passwordChangedAt = new Date();
        await user.save();
        user.password = undefined;

        return {
            user,
            token: newToken
        }
    }

    /**
     * 
     * @param token {String} verificationToken
     * @param res {ResInterface} 
     * @param next {NextFunction} next function
    * @return {Promise<UserInterface>} user data
     */
    async verifyAccount(
        token: string,
        res: ResInterface,
        next: NextFunction
    ): Promise<{ user: UserInterface } | void> {
        const decoded = await new Auth().decodeJwt(token);
        if (decoded.role !== 'VERIFY_ACCOUNT') {
            return ResponseHelper.badRequest(res, res.__('invalid_verification_token'));
        }
        const userId = decoded.id;
        const user = await UserModel.findById(userId);
        const tokenCreatedTimeDiff = Math.floor(new Date().getTime() / 1000) - decoded.iat;
        console.log(tokenCreatedTimeDiff);
        if (tokenCreatedTimeDiff > 10 * 60) {
            return ResponseHelper.expired(res, res.__('verification_token_expired'))
        }
        user.isEmailVerified = true;
        user.isAccountActive = true;
        await user.save();
        user.password = undefined;
        return {
            user
        }
    }
    /**
    * 
    * @param user {UserInterface}
    * @param req {ReqInterface} 
    * @param next {NextFunction} next function
    * @return {Promise<UserInterface>} user data
    */

    async resendVerification(
        user: UserInterface,
        req: ReqInterface,
        next: NextFunction
    ): Promise<{ user: UserInterface } | void> {
        const verifyAccountToken = await new Auth().getToken(
            {
                id: user._id,
                role: 'VERIFY_ACCOUNT'
            },
            '1d',
            next
        );
        const endPoint = '/root/login?token=';
        const verificationUrl: string = await this.getDeepLink(endPoint, verifyAccountToken);
        await new Email(user.email).sendVerificationEmail(verificationUrl);
        return {
            user
        }
    }



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


export default new AuthService();