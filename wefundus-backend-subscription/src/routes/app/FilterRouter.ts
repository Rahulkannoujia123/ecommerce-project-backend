import { Router } from "express";
import FilterController from "../../controllers/app/FilterController";


class FilterRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
    }


    getRoutes() {
        this.router.get(
            '/list-by-id/:id',
            FilterController.getFilterById
        );

        this.router.get(
            '/list-by-slug/:slug',
            FilterController.getFilterBySlug
        );

      
    }

    postRoutes(): void {
        this.router.post(
            '/breadcrumb',
            FilterController.getBreadCamp
        )
    }

}

export default new FilterRouter().router;