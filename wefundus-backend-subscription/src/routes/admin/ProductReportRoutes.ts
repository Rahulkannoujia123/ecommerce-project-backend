import { Router } from "express";
import ProductReportController from "../../controllers/admin/ProductReportController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";

class ProductReportRoutes {

    public router: Router;
    constructor() {
        this.router = Router();
        this.getRoutes();
    }



    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.admin,
            ProductReportController.list
        );
    }

}

export default new ProductReportRoutes().router;