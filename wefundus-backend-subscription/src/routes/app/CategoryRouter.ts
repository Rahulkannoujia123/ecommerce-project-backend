import { Router } from "express";
import CategoryController from "../../controllers/app/CategoryController";


class CategoryRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }


    getRoutes() {
        this.router.get(
            '/',
            CategoryController.categoryList
        );

        this.router.get(
            '/list',
            CategoryController.categoryListAll
        );

        this.router.get(
            '/stores',
            CategoryController.storeList
        );


        this.router.get(
            '/:sub-list-id/:id',
            CategoryController.subcategoryListById
        );

        this.router.get(
            '/:sub-list-slug/:slug',
            CategoryController.subcategoryListBySlug
        );

        this.router.get(
            '/section-list/:subcategorySlug',
            CategoryController.sectionList
        )
    }

}

export default new CategoryRouter().router;