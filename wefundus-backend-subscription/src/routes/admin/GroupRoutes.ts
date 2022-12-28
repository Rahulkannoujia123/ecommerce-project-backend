import { Router } from "express";
import GroupController from "../../controllers/admin/GroupController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";


class GroupRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.deleteRoutes();
    }



    getRoutes() {
        this.router.get(
            "/",
            AuthenticationMiddleware.admin,
            GroupController.groupList
        );
        this.router.get(
            "/:id",
             AuthenticationMiddleware.admin,
           GroupController.groupDetails
        );

        this.router.get(
            '/:id/members',
            AuthenticationMiddleware.admin,
            GroupController.groupMembers
        )
    }
    deleteRoutes() {
        this.router.patch(
            "/",
            AuthenticationMiddleware.admin,
            GroupController.removeGroup
        );
    }

}

export default new GroupRoutes().router;