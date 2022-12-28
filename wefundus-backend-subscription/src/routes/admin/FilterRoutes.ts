import { Router } from "express";
import FilterController from "../../controllers/admin/FilterController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";


class FilterRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }


    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.admin,
            FilterController.list
        );

      
    }

}

export default new FilterRoutes().router;