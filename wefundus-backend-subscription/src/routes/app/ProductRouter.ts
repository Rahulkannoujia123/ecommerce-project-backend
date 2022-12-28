import { Router } from "express";
import ProductController from "../../controllers/app/ProductController";

class ProductRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }

   getRoutes(){
    this.router.get(
        '/search', 
        ProductController.productSearch
    );
    
    this.router.get(
        '/list', 
        ProductController.productList
    );

    this.router.get(
        '/details/:id',
        ProductController.productDetails
      
    )

    this.router.post(
        '/list',
        ProductController.productListFilter,

    );

   }
}

export default new ProductRouter().router;