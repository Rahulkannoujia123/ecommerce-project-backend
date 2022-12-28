import { Router } from "express";
import SubcategoryController from "../../controllers/admin/SubcategoryController";
import Authentication from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";
import SubcategoryValidator from "../../validators/admin/SubcategoryValidator";

class SubcategoryRoutes {
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
            SubcategoryValidator.add,
            SubcategoryController.add
        );
    }

    patchRoutes() {
        this.router.patch(
            '/:id',
            Authentication.admin,
            SubcategoryValidator.update,
            SubcategoryController.update
        );
        this.router.patch(
            '/:id/status',
            Authentication.admin,
           SubcategoryController.activeupdateStatus
        );
    }

    getRoutes() {
        this.router.get(
            '/:id',
            Authentication.admin,
            SubcategoryController.list
        );

        this.router.get(
            '/:id/subcategory',
            Authentication.admin,
            SubcategoryController.get
        );
    }

    deleteRoutes() {
        this.router.delete(
            '/:id',
            Authentication.admin,
            SubcategoryController.delete
        );
    }

    putRoutes(){
        this.router.put(
            '/',
            Authentication.admin,
            FileUploadMiddleware.upload,
            SubcategoryController.uploadImage
        );
    }


}

export default new SubcategoryRoutes().router;