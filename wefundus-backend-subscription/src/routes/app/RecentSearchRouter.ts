import { Router } from "express";
import RecentSearchController from "../../controllers/app/RecentSearchController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import RecentSearchValidator from "../../validators/app/RecentSearchValidator";

class ReportReason {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.deleteRoutes();
        this.getRoutes();
    }


    getRoutes(){
        this.router.get(
            '/',
            AuthenticationMiddleware.user,
            RecentSearchController.list
        );
    }

    postRoutes(){
        this.router.post(
            '/',
            AuthenticationMiddleware.user,
            RecentSearchValidator.add,
            RecentSearchController.add
        )
    }
    deleteRoutes() {
        this.router.delete(
            '/:id',
            AuthenticationMiddleware.user,
            RecentSearchController.delete
        )
        this.router.delete(
            '/',
            AuthenticationMiddleware.user,
            RecentSearchController.clear

        )
    }

}

export default new ReportReason().router;