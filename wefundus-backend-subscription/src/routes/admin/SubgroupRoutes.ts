import { Router } from "express";
import SubgroupController from "../../controllers/admin/SubgroupController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";


class SubgroupRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }



    getRoutes() {
        this.router.get(
            "/",
            AuthenticationMiddleware.admin,
            SubgroupController.subgroupList
        );
        this.router.get(
            "/:id",
            AuthenticationMiddleware.admin,
            SubgroupController.subgroupDetails
        );
    }

}

export default new SubgroupRoutes().router;