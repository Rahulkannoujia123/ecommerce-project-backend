import { Router } from "express";
import AuthController from "../../controllers/app/AuthController";
import UserMiddleware from "../../middlewares/userMiddleware";
import AuthValidator from "../../validators/app/AuthValidator";


class AuthRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
    }

    postRoutes() {
        this.router.post(
            '/signup',
            UserMiddleware.checkUser,
            AuthController.signUp
        );

        this.router.post(
            '/login',
            AuthValidator.login,
            AuthController.login,
        );

        this.router.post(
            '/forgot-password',
            AuthValidator.forgotPassword,
            AuthController.forgotPassword
        );

        this.router.post(
            '/reset-password',
            AuthValidator.resetPassword,
            AuthController.resetPassword
        );

        this.router.post(
            '/resend-verification',
            AuthValidator.resendVerification,
            AuthController.resendVerification
        );
       
    }

    patchRoutes() {
        this.router.patch(
            '/verify-account',
            AuthController.verifyAccount
        );
    }
}

export default new AuthRouter().router;