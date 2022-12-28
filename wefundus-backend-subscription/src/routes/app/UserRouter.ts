import { Router } from "express";
import UserController from "../../controllers/app/UserController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";
import UserValidator from "../../validators/app/UserValidator";

class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.patchRoutes();
        this.getRoutes();
    }

    getRoutes() {
        this.router.get(
            '/my-profile',
            AuthenticationMiddleware.user,
            UserController.myProfile
        )
    }

    patchRoutes() {
        this.router.patch(
            '/update-social',
            AuthenticationMiddleware.user,
            UserValidator.updateSocial,
            UserController.update
        );

        this.router.patch(
            '/verify-email',
            AuthenticationMiddleware.user,
            UserValidator.verifyEmail,
            UserController.verifyEmail
        );

        this.router.put(
            '/edit-profile',
            AuthenticationMiddleware.user,
            FileUploadMiddleware.upload,
            UserValidator.profile,
            UserController.editProfile
        );

        this.router.patch(
            '/change-password',
            AuthenticationMiddleware.user,
            UserValidator.changePassword,
            UserController.changePassword
        );
    }
}

export default new UserRouter().router;