import { Router } from "express";
import CategoryController from "../../controllers/admin/CategoryController";
import Authentication from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";
import CategoryValidator from "../../validators/admin/CategoryValidator";


class CategoryRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
        this.getRoutes();
        this.putRoutes();
    }

    postRoutes() {
        this.router.post(
            '/',
            Authentication.admin,
            CategoryValidator.add,
            CategoryController.add
        );

        this.router.post(
            '/test',
            CategoryController.test
        )
    }

    patchRoutes() {
        this.router.patch(
            '/:id',
            Authentication.admin,
            CategoryValidator.update,
            CategoryController.update
        );
        this.router.patch(
            '/:id/status',
            Authentication.admin,
            CategoryController.activeupdateStatus
        );

        this.router.patch(
            '/:id/attributes',
            Authentication.admin,
            CategoryController.addAttributes
        );
    }

    getRoutes() {
        this.router.get('/',
            Authentication.admin,
            CategoryController.list
        );
        
        this.router.get(
            '/:id',
            Authentication.admin,
            CategoryController.findCategory

        );

         this.router.get(
            '/tax/categorylist',
            Authentication.admin,
            CategoryController.getTaxCategories
        );
        // this.router.get(
        //     '/tax/category',
        //     Authentication.admin,
        //     CategoryController.taxCategoryList
        // );



    }

    deleteRoutes() {
        this.router.delete(
            '/:id',
            Authentication.admin,
            CategoryController.delete
        );
    }

    putRoutes() {
        this.router.put(
            '/',
            Authentication.admin,
            FileUploadMiddleware.upload,
            CategoryController.uploadImage
        );
    }


}

export default new CategoryRoutes().router;