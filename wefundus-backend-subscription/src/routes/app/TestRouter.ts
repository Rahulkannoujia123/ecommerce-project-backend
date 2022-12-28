import { Router } from "express";
import TestController from "../../controllers/app/TestController";

class TestRouter{
    public router: Router;

    constructor(){
        this.router = Router();
        this.postRoutes();
    }

    postRoutes(){
        this.router.post(
            '/',
            TestController.test
        )
    }
}

export default new TestRouter().router;