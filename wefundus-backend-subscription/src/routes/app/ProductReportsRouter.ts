import { Router } from "express";
import ProductReportController from "../../controllers/app/ProductReportController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import ProductReportValidator from "../../validators/app/ProductReportValidator";

class ProductReportRouter {
    public router: Router
    constructor() {
        this.router = Router();
        this.postRoutes();

    }

    getRoutes() {

    }

    postRoutes() {
        this.router.post('/',
            AuthenticationMiddleware.user,
            ProductReportValidator.productReport,
            ProductReportController.add
        )
    }

    patchRoutes() {

    }

    putRoutes() {

    }

}

export default new ProductReportRouter().router