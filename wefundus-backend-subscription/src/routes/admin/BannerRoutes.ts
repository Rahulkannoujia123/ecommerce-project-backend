import { Router } from "express";
import BannerController from "../../controllers/admin/BannerController";
import Authentication from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";

class BannerRoutes {
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
            FileUploadMiddleware.upload,
            BannerController.addBanner
        );
    }
    patchRoutes() {
        this.router.patch(
            '/:id/status',
            Authentication.admin,
            BannerController.activeUpdateStatus
        );
        this.router.patch(
            '/:id/edit',
            Authentication.admin, FileUploadMiddleware.upload,
            BannerController.edit
        );
    }

    getRoutes() {
        this.router.get(
            '/',
            Authentication.admin,
            BannerController.list
        );
    }

    deleteRoutes() {

    }

    putRoutes() {

    }
}

export default new BannerRoutes().router;