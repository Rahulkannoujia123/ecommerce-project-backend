"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../../controllers/app/UserController");
const AuthenticationMiddleware_1 = require("../../middlewares/AuthenticationMiddleware");
const FileUploadMiddleware_1 = require("../../middlewares/FileUploadMiddleware");
const UserValidator_1 = require("../../validators/app/UserValidator");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.patchRoutes();
        this.getRoutes();
    }
    getRoutes() {
        this.router.get('/my-profile', AuthenticationMiddleware_1.default.user, UserController_1.default.myProfile);
    }
    patchRoutes() {
        this.router.patch('/update-social', AuthenticationMiddleware_1.default.user, UserValidator_1.default.updateSocial, UserController_1.default.update);
        this.router.patch('/verify-email', AuthenticationMiddleware_1.default.user, UserValidator_1.default.verifyEmail, UserController_1.default.verifyEmail);
        this.router.put('/edit-profile', AuthenticationMiddleware_1.default.user, FileUploadMiddleware_1.default.upload, UserValidator_1.default.profile, UserController_1.default.editProfile);
        this.router.patch('/change-password', AuthenticationMiddleware_1.default.user, UserValidator_1.default.changePassword, UserController_1.default.changePassword);
    }
}
exports.default = new UserRouter().router;
