import { Router } from "express";
import ReportReasonController from "../../controllers/admin/ReportReasonController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import ReportReasonValidator from "../../validators/admin/ReportReasonValidator";

class ReportReasonRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
        this.getRoutes();
    }

    postRoutes() {
        this.router.post(
            '/',
            AuthenticationMiddleware.admin,
            ReportReasonValidator.add,
            ReportReasonController.add
        );
    }

    patchRoutes() {
        this.router.patch(
            '/:id',
            AuthenticationMiddleware.admin,
            ReportReasonController.update
        );
        this.router.patch(
            '/:id/status',
            AuthenticationMiddleware.admin,
            ReportReasonController.activeupdateStatus
        );
    }

    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.admin,
            ReportReasonController.list
        );
    }
}

export default new ReportReasonRoutes().router;