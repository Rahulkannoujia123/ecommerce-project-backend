import { Router } from "express";
import SectionController from "../../controllers/admin/SectionController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";
import SectionValidator from "../../validators/admin/SectionValidator";


class SectionRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
        this.getRoutes();
    }

    postRoutes() {
        this.router.post(
            '/',
            AuthenticationMiddleware.admin,
            FileUploadMiddleware.upload,
            SectionValidator.add,
            SectionController.add
        );
    }

    patchRoutes() {
        this.router.patch(
            '/:id',
            AuthenticationMiddleware.admin,
            FileUploadMiddleware.upload,
            SectionValidator.add,
            SectionController.update
        );
        this.router.patch(
            '/:id/status',
           AuthenticationMiddleware.admin,
            SectionController.activeupdateStatus
        );
    }

    getRoutes() {
        // this.router.get(
        //     '/list/:id',
        //     AuthenticationMiddleware.admin,
        //     SectionController.list
        // );

        this.router.get(
            '/:id',
            AuthenticationMiddleware.admin,
            SectionController.list
        );
    }

    deleteRoutes() {
        this.router.delete(
            '/:id',
            AuthenticationMiddleware.admin,
            SectionController.delete
        );
    }


}

export default new SectionRoutes().router;