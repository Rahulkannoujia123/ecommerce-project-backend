import { NextFunction } from "express";
import ResponseHelper from "../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../interfaces/ReqInterface";
import { UserInterface } from "../interfaces/UserInterface";
import AdminModel from "../models/AdminModel";
import SessionModel from "../models/SessionModel";
import { Auth } from "../utils/Auth";

class Authentication {
    async admin(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {

            let token;
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                token = req.headers.authorization.split(' ')[1];
            }

            if (!token) {
                return ResponseHelper.unAuthenticated(res, res.__('authentication_required'), {}, 'TOKEN_REQUIRED')
            }

            const decoded: any = await new Auth().decodeJwt(token);

            const admin: any = await AdminModel.findById(decoded.id);

            if (!admin) {
                return ResponseHelper.unAuthenticated(res, res.__('jwt_invalid_token'));
            }

            if (admin.passwordChangedAt && decoded.iat < admin.passwordChangedAt.getTime() / 1000) {
                return ResponseHelper.unAuthenticated(res, res.__('admin_changed_password_recently'), {}, 'OLD_PASSWORD');
            }

            req.admin = admin;
            next();

        } catch (err) {
            return next(err);
        }
    }

    async user(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {

            let token;
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                token = req.headers.authorization.split(' ')[1];
            }

            if (!token) {
                return ResponseHelper.unAuthenticated(res, res.__('authentication_required'), {}, 'TOKEN_REQUIRED')
            }

            const decoded = await new Auth().decodeJwt(token);
            const session: any = await SessionModel.findById(decoded.id).populate('user');

            if (!session) {
                return ResponseHelper.unAuthenticated(res, res.__('jwt_invalid_token'));
            }

            if (!session.isActive) {
                return ResponseHelper.expired(res, res.__('session_expired'));
            }
            const user = session.user as UserInterface;

            if (!user.isAccountActive) {
                return ResponseHelper.forbidden(res, res.__('account_inactive'));
            }

            if (user.passwordChangedAt && decoded.iat < user.passwordChangedAt.getTime() / 1000) {
                return ResponseHelper.unAuthenticated(res, res.__('user_changed_password_recently'), {}, 'OLD_PASSWORD');
            }

            req.user = user;
            next();

        } catch (err) {
            return next(err);
        }
    }
}

export default new Authentication();