import { Router } from "express";
import ReportReasonController from "../../controllers/app/ReportReasonController";

class ReportReason {
    public router: Router;

    constructor() {
        this.router = Router();

        this.getRoutes();
    }

    getRoutes() {
        this.router.get(
            '/:id',
            ReportReasonController.getReportReasonList
        )
    }

}

export default new ReportReason().router;