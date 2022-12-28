import { Router } from "express";
import UserController from "../../controllers/admin/UserController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";

class UserRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.patchRoutes();
      
    }
    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.admin,
            UserController.list
        
        );
        this.router.get(
            '/:id',
            AuthenticationMiddleware.admin,
            UserController.findUserById
        
        );
    }
    patchRoutes() {
        this.router.patch (
            '/:id/status',
            AuthenticationMiddleware.admin,
            UserController.activeUpdateStatus
        );
      }
}

export default new UserRoutes().router;