"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TestController_1 = require("../../controllers/app/TestController");
class TestRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.postRoutes();
    }
    postRoutes() {
        this.router.post('/', TestController_1.default.test);
    }
}
exports.default = new TestRouter().router;
