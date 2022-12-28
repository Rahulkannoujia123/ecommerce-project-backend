import { Router } from "express";
import ReviewController from "../../controllers/app/ReviewController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import ReviewValidator from "../../validators/app/ReviewValidator";



class BannerRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
    }


    postRoutes() {
        this.router.post(
            '/',
            AuthenticationMiddleware.user,
            ReviewValidator.addReview,
            ReviewController.add
        );


    }
    patchRoutes() {
        this.router.patch(
            '/:id',
            AuthenticationMiddleware.user,
            ReviewValidator.editReview,
            ReviewController.edit
        );

    }
}
export default new BannerRouter().router;