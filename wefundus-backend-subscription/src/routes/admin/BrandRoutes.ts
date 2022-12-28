import { Router } from "express";
import BrandController from "../../controllers/admin/BrandController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";
import BrandValidator from "../../validators/admin/BrandValidator";


class BrandRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.admin,
            BrandController.list
        );
    }

    postRoutes() {

    }

    patchRoutes(){
        this.router.patch(
            '/:id',
            AuthenticationMiddleware.admin,
            FileUploadMiddleware.upload,
            BrandValidator.editBrand,
            BrandController.update
        )

        this.router.patch('/:id/status',
        AuthenticationMiddleware.admin,
        BrandController.ChangeBrandStatus
        
        )
    }

    putRoutes() {
        this.router.put(
            '/',
            AuthenticationMiddleware.admin,
            FileUploadMiddleware.upload,
            BrandValidator.addBrand,
            BrandController.addBrand
        );
    }

    deleteRoutes() {

    }


}

export default new BrandRoutes().router;