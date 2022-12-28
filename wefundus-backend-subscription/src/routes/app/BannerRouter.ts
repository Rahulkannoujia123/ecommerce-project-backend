import { Router } from "express";
import BannerController from "../../controllers/app/BannerController";


class BannerRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }


    getRoutes() {
        this.router.get(
            '/',
            BannerController.getBannerList
        );

      
    }

}

export default new BannerRouter().router;