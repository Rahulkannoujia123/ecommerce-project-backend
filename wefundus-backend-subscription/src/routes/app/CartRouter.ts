import { Router } from "express";
import CartController from "../../controllers/app/CartController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";

class CartRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
        this.getRoutes();
        this.deleteRoutes();
    }

    postRoutes() {
        this.router.post(
            '/',
            AuthenticationMiddleware.user,
            // CartValidator.add,
            CartController.add
        );
    }
    patchRoutes() {
        this.router.patch(
            '/:id/:order',
            AuthenticationMiddleware.user,
            CartController.update
        );
    }
    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.user,
            CartController.list
        )
    }
    deleteRoutes() {
        this.router.delete(
            '/:id',
            AuthenticationMiddleware.user,
            CartController.delete
        );
        this.router.delete(
            '/',
            AuthenticationMiddleware.user,
            CartController.clear

        )
    }
}

export default new CartRoutes().router;