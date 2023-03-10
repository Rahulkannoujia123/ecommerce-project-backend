import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import CartModel from "../../models/CartModel";


class CartController {
    /**
       * @api {post} /api/v1/app/cart Add 2 Cart
       * @apiHeader {String} App-Version Version Code 1.0.0.
       * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
       * @apiVersion 1.0.0
       * @apiName add-cart
       * @apiGroup App-Cart
       * @apiParam {Array[]} products array of productId and quantity
       * 
       * @apiParamExample {json} Request-Body: 
       * {
       *    "products": [
       *       {
       *       "productId":"62cfb67426bd109f9ae2d7cf",
       *       "quantity":16
       *     }
       *     ]
       *       
       *    }
       * 
       * @apiSuccessExample {json} Success-Response:
       *  HTTP/1.1 200 OK
       * {
       *    "status": 201,
       *     "statusText": "CREATED",
       *      "message": "Product has been added in your cart",
       *    "data": {
       *       "cart": {
       *         "productId": "62cfb67426bd109f9ae2d7cf",
       *         "userId": "62e0e20233728726535d2de1",
       *         "quantity": 16,
       *          "_id": "62f0d21a63975314768ee3e7",
       *         "createdAt": "2022-08-08T09:06:34.032Z",
       *         "updatedAt": "2022-08-08T09:06:34.032Z",
       *          "__v": 0
       *   },
       * "execTime": 118
       * }
       *    } 
       *
       */
    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.user._id;
            const products = req.body.products as { productId: string, quantity: number, color: string, attributes: { name: string, value: string }[] }[];

            for (const product of products) {
                const isExists = await CartModel.findOne({ userId, productId: product.productId })
                if (isExists) {
                    isExists.quantity = product.quantity;
                    isExists.attributes = product.attributes;
                    isExists.color = product.color;
                    await isExists.save();
                }
                else {
                    await CartModel.create({ userId, productId: product.productId, attributes: product.attributes, color: product?.color || null, quantity: product.quantity });
                }
            }
            return ResponseHelper.ok(res, res.__('cart_created'), {});

        } catch (error) {
            next(error);
        }
    }
    /**
   * @api {patch} /api/v1/app/cart/_id/inc Update Cart
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWI4YTk3YmViMWRiZmFjMTdmZDg1YiIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU5NjAzNjA3LCJleHAiOjE2NTk2OTAwMDd9.IX0HiOYvZd0eteYvH6z2wRFxLtjtyfjDzPtA8ElNMcI
   * @apiVersion 1.0.0
   * @apiName update-cart
   * @apiGroup App-Cart
   * @apiDescription pass cart _id as params, and order  'inc'|'dec' after cart _id
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   *  {
   *  "status": 200,
   *   "statusText": "SUCCESS",
   *    "message": "Cart updated successfully",
   *    "data": {
   *        "cart": {
   *           "_id": "62f0d21a63975314768ee3e7",
   *           "productId": "62cfb67426bd109f9ae2d7cf",
   *            "userId": "62e0e20233728726535d2de1",
   *            "quantity": 15,
   *            "createdAt": "2022-08-08T09:06:34.032Z",
   *            "updatedAt": "2022-08-08T09:06:34.032Z",
   *           "__v": 0
   *       },
   *       "execTime": 78
   *   }
   * }
   */
    async update(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const id = req.params.id;
            let order = req.params.order;
            let incOrder = 1;
            if (order === 'dec') {
                incOrder = -1;
                const cart = await CartModel.findByIdAndUpdate(id, { $inc: { quantity: incOrder } }, { new: true })
                res.logMsg = `Cart updated successfully`;
                return ResponseHelper.ok(res, res.__('cart_updated'), { cart });
            }
            if (order === 'inc') {
                incOrder = 1;
                const cart = await CartModel.findByIdAndUpdate(id, { $inc: { quantity: incOrder } }, { new: true })
                res.logMsg = `Cart updated successfully`;
                ResponseHelper.ok(res, res.__('cart_updated'), { cart });
            }


        } catch (error) {
            next(error);
        }
    }
    /**
     * @api {delete} /api/v1/app/cart/_id Delete Product from cart
     * @apiHeader {String} App-Version Version Code 1.0.0.
     * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
     * @apiVersion 1.0.0
     * @apiName delete-cart
     * @apiGroup App-Cart
     * @apiDescription pass cart _id as params 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     * "status": 200,
     *  "statusText": "SUCCESS",  
     *  "message": "Cart deleted successfully",
     *  "data": {
     *      "cart": {
     *      "_id": "62eb77913cdbc3fc3ad9a813",
     *      "productId": "62cfb67426bd109f9ae2d7cf",
     *      "userId": "62e0e20233728726535d2de1",
     *      "quantity": 12,
     *      "createdAt": "2022-08-04T07:38:57.480Z",
     *      "updatedAt": "2022-08-04T07:38:57.480Z",
     *      "__v": 0
     *  },
     *   "execTime": 102
     * }
     *}
     *
     */


    async delete(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const cartId = req.params.id;
            const userId = req.user._id;
            const cart = await CartModel.findById(cartId);
            if (cart && JSON.stringify(userId) !== JSON.stringify(cart.userId)) {
                return ResponseHelper.badRequest(res, res.__('cart_not_found'))
            }
            await cart.delete();
            res.logMsg = 'Cart deleted successfully';
            return ResponseHelper.ok(res, res.__('cart_deleted'), { cart });

        } catch (error) {
            next(error);
        }
    }
    /**
    * @api {delete} /api/v1/app/cart Clear Cart
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJhZjQyYzYzZGE5OWRhODJjZTcyOCIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU5NjEyOTk0LCJleHAiOjE2NTk2OTkzOTR9.BgVLC42cM61I2A0Y456FprkCbKskGrH1qa3kqljq9g0
    * @apiVersion 1.0.0
    * @apiName clear-cart   
    * @apiGroup App-Cart 
    * @apiSuccessExample {json} Success-Response:
    *  *HTTP/1.1 200 OK
    * 
    *   {
    *     "status": 200,
    *  "statusText": "SUCCESS",
    *   "message": "Cart all clear",
    *   "data": {
    *       "execTime": 105
    *   }
    *   }
    *    
    */
    async clear(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.user._id;
            await CartModel.deleteMany({ userId });
            res.logMsg = 'Cart all clear';
            return ResponseHelper.ok(res, res.__('cart_clear'), {});

        } catch (error) {
            next(error);
        }
    }

    /**
     * @api {get} /api/v1/app/cart MyCart listing
     * @apiHeader {String} App-Version Version Code 1.0.0.    
     *  @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
     *  @apiVersion 1.0.0
     *  @apiName cart-list
     *  @apiGroup App-Cart
     * @apiSuccessExample {json} Success-Response-1:
     * {
     *       "status": 200,
     *       "statusText": "SUCCESS",
     *       "message": "Cart list fetch successfully",
     *       "data": {
     *           "priceSubTotal": 90000,
     *           "tax": 23,
     *           "priceTotal": 90023,
     *           "list": [
     *               {
     *                   "_id": "63070c96dee2905ca2484b86",
     *                   "productId": "62cfb67426bd109f9ae2d7cf",
     *                   "quantity": 2,
     *                   "attributes": [
     *                       {
     *                           "name": "sizes",
     *                           "value": "xl",
     *                           "_id": "630762fe61693f8bd2d2d488"
     *                       }
     *                   ],
     *                   "color": "red",
     *                   "product": {
     *                       "_id": "62cfb67426bd109f9ae2d7cf",
     *                       "name": "Mobile",
     *                       "categoryName": "Electronics",
     *                       "subcategoryName": "Digital",
     *                       "regularPrice": 40000,
     *                       "salePrice": 45000,
     *                       "coverPhoto": "product/62cfb67426bd109f9ae2d7cf/cover-photo/default.png",
     *                       "categorySlug": "women's-fashion",
     *                       "subcategorySlug": "women's-bottoms"
     *                   },
     *                   "priceTotal": 90000
     *               }
     *           ],
     *           "execTime": 132
     *       }
     *   }
     *       
     *      
     */
    async list(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.user._id;
            const cart = await CartModel.aggregate(
                [
                    {
                        '$match': {
                            'userId': userId
                        }
                    }, {
                        '$lookup': {
                            'from': 'products',
                            'localField': 'productId',
                            'foreignField': '_id',
                            'as': 'product'
                        }
                    }, {
                        '$unwind': {
                            'path': '$product',
                            'preserveNullAndEmptyArrays': true
                        }
                    }, {
                        '$project': {
                            '_id': 1,
                            'productId': 1,
                            'quantity': 1,
                            'priceTotal': {
                                '$multiply': [
                                    '$product.salePrice', '$quantity'
                                ]
                            },
                            'attributes': 1,
                            'color': 1,
                            'product': {
                                '_id': 1,
                                'regularPrice': 1,
                                'salePrice': 1,
                                'name': 1,
                                'categoryName': 1,
                                'categorySlug': 1,
                                'brandName': 1,
                                'brandSlug': 1,
                                'subcategoryName': 1,
                                'subcategorySlug': 1,
                                'coverPhoto': 1
                            }
                        }
                    }
                ]
            );


            const priceSubTotal = cart.reduce((total: number, item: any) => {
                return total = total + item.priceTotal;
            }, 0);

            console.log(priceSubTotal);
            const tax = 23;
            const priceTotal = priceSubTotal + tax;

            return ResponseHelper.ok(res, res.__('cart_list'), { priceSubTotal, tax, priceTotal, list: cart });

        } catch (error) {
            next(error);
        }
    }
}
export default new CartController();