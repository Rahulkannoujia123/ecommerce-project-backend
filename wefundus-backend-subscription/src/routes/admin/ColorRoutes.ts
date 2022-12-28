import { Router } from "express";
import ColorController from "../../controllers/admin/ColorController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";


class ColorRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.deleteRoutes();
    }


    postRoutes() {
        this.router.post(
            "/",
            AuthenticationMiddleware.admin,
            ColorController.addColor
        );
    }

    getRoutes() {
        this.router.get(
            "/",
            AuthenticationMiddleware.admin,
            ColorController.getColor
        );
    }

    deleteRoutes() {
        this.router.delete(
            '/:id',
            AuthenticationMiddleware.admin,
            ColorController.delete
        )
    }

}

export default new ColorRoutes().router;