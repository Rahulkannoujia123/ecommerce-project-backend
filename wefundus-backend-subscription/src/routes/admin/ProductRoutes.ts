import { Router } from "express";
import ProductController from "../../controllers/admin/ProductController";
import AuthenticationMiddleware from "../../middlewares/AuthenticationMiddleware";
import FileUploadMiddleware from "../../middlewares/FileUploadMiddleware";
import ProductValidator from "../../validators/admin/ProductValidator";
class ProductRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
        this.getRoutes();
        this.putRoutes();
        this.patchRoutes();
    }
    postRoutes() {
        this.router.post(
            '/',
            AuthenticationMiddleware.admin,
            ProductValidator.add,
            ProductController.add
        );
    }
    getRoutes() {
        this.router.get(
            '/',
            AuthenticationMiddleware.admin,
            ProductController.list
        );


        this.router.get(
            '/test',
            AuthenticationMiddleware.admin,
            ProductController.test
        )

        this.router.get(
            '/:id',
            AuthenticationMiddleware.admin,
            ProductController.fetchProduct
        );

    }

    deleteRoutes() {
        this.router.delete(
            '/:id',
            AuthenticationMiddleware.admin,
            ProductController.delete
        );
        this.router.delete(
            '/:id/cover', AuthenticationMiddleware.admin,
            ProductController.deleteCoverImage
        );
        this.router.delete(
            '/:id/photo', AuthenticationMiddleware.admin,
            ProductController.deletePhoto
        );
    }

    putRoutes() {

        // this.router.put(
        //     '/coverphoto/:id', AuthenticationMiddleware.admin,
        //     FileUploadMiddleware.upload,
        //     ProductController.changeCoverImage
        // );

        this.router.put(
            '/:id',
            AuthenticationMiddleware.admin,
            FileUploadMiddleware.upload,
            ProductController.uploadImage
        );

        this.router.put('/edit/:id',
            AuthenticationMiddleware.admin,
            ProductController.edit
        );
    }


    patchRoutes() {
        this.router.patch(
            '/:id',
            AuthenticationMiddleware.admin,
            ProductController.edit
        );
        this.router.patch(
            '/:id/status',
            AuthenticationMiddleware.admin,
            ProductController.activeupdateStatus
        );

        this.router.patch(
            '/:id/attributes',
            AuthenticationMiddleware.admin,
            ProductController.addAttributes
        );


    }
}

export default new ProductRoutes().router;