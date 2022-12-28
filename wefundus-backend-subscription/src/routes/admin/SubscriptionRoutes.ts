import { Router } from "express";
import SubscriptionController from "../../controllers/admin/SubscriptionController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";


class SubscriptionRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.postRoutes();
        this.getRoutes();
    }

postRoutes(){
    this.router.post(
        '/add-subscription',
        AuthenticationMiddleware.admin,
        SubscriptionController.addSubscription
    )
}

    getRoutes() {

    }

}

export default new SubscriptionRoutes().router;