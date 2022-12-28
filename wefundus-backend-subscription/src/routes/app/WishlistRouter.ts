import { Router } from "express";
import WishlistController from "../../controllers/app/WishlistController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import WishlistValidator from "../../validators/app/WishlistValidator";


class WishlistRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.getRoutes();
        this.deleteRoutes();
    }
    postRoutes() {
        this.router.post(
            '/',
            AuthenticationMiddleware.user, 
            WishlistValidator.add,
            WishlistController.add
        );
    }
    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.user,
            WishlistController.list
        );
    }
    deleteRoutes() {
        this.router.delete(
            '/:id',
            AuthenticationMiddleware.user,
            WishlistController.delete
        );
    }
}

export default new WishlistRouter().router;