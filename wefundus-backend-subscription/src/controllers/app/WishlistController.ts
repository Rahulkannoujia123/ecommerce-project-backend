
import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import WishlistModel from "../../models/WishlistModel";
import WishlistService from "../../services/app/WishlistService";

class Wishlist {
    /**
     * @api {post} /api/v1/app/wishlist Add Wishlist
     * @apiHeader {String} App-Version Version Code 1.0.0.
     * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlMjAyMzM3Mjg3MjY1MzVkMmRlMSIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU4OTg5MDY0LCJleHAiOjE2NTkwNzU0NjR9.R330qWuTXc_ghTYwDOyquNVORxvyWmws1tDYWRZd3hY
     * @apiVersion 1.0.0
     * @apiName add-wishlist
     * @apiGroup App-Wishlist
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 success  
     *      {
     *  "status": 201,
     *  "statusText": "CREATED",
     *    "message": "Product added in wishlist",
     *      "data": {
     *      "wishlist": {
     *         "productId": "62d672c8f055ab9d06da7821",
     *        "userId": "62e0e20233728726535d2de1",
     *        "_id": "62e22a6b92e49c1f63903728",
     *       "createdAt": "2022-07-28T06:19:23.068Z",
     *       "updatedAt": "2022-07-28T06:19:23.069Z",
     *       "__v": 0
     *  },
     *  "execTime": 80
     *  }
     *    
     *       
     */
    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.user._id;
            const productId = req.body.productId;
            const isExists = await WishlistModel.exists({ userId: req.user._id, productId })
            if (isExists) {
                ResponseHelper.badRequest(res, res.__('product_wishlist_exists'))

            }
            const wishlist = await WishlistService.add(productId, userId);
            if (wishlist) {
                res.logMsg = "Product added in wishlist";
                return ResponseHelper.created(res, res.__("wishlist_created"), {
                    wishlist,
                });
            }

        } catch (error) {
            next(error);
        }
    }
    /**
   * @api {delete} /api/v1/app/wishlist/_id Delete product from wishlist Wishlist
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlMjAyMzM3Mjg3MjY1MzVkMmRlMSIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU4OTg5MDY0LCJleHAiOjE2NTkwNzU0NjR9.R330qWuTXc_ghTYwDOyquNVORxvyWmws1tDYWRZd3hY
   * @apiVersion 1.0.0
   * @apiName delete-wishlist
   * @apiGroup App-Wishlist
   * @apiDescription pass productId (product _id    ) as params
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   *  {
   * "status": 200,
   * "statusText": "SUCCESS",
   * "message": "Product deleted from wishlist successfully",   
   *   }
   *
   */

    async delete(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const productId = req.params.id;
            const userId = `${req.user._id}`;
            await WishlistModel.deleteOne({ productId, userId });
            res.logMsg = 'Wishlist deleted successfully';
            ResponseHelper.ok(res, res.__('wishlist_deleted'), {});
        } catch (error) {
            next(error);
        }
    }
    /**
   * @api {get} /api/v1/app/wishlist My Wishlist
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlMjAyMzM3Mjg3MjY1MzVkMmRlMSIsImVtYWlsIjoicmFodWxAMTI1Z21haWwuY29tIiwiaWF0IjoxNjU4OTg5MDY0LCJleHAiOjE2NTkwNzU0NjR9.R330qWuTXc_ghTYwDOyquNVORxvyWmws1tDYWRZd3hY
   * @apiVersion 1.0.0
   * @apiName my-wishlist
   * @apiGroup App-Wishlist
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   *   {
   * "status": 200,
   * "statusText": "SUCCESS",
   * "message": "Wishlist fetch successfully",
   * "data": {
   *   "wishlist": [
   *         {
   *              "_id": "62e0eaf7ea9f933858a295b1",
   *             "userId": "62e0e20233728726535d2de1",
   *              "product": {
   *                  "name": "Mobile",
   *                   "regularPrice": 40000,
   *                   "color": "blue",
   *                   "salePrice": 350,
   *                   "brandName": "nike",
   *                   "coverPhoto": "product/63087b2f224cb585fce762a6/cover-photo/default.png",
   *                 "_id": "62cfb67426bd109f9ae2d7cf"
   *             }
   *         },
   *         {
   *               "_id": "62e0eba4ea9f933858a295b6",
   *             "userId": "62e0e20233728726535d2de1",
   *            "product": {
   *                  "name": "tablefan",
   *                  "regularPrice": 40000,
   *                  "color": "blue",
   *                   "salePrice": 350,
   *                   "brandName": "nike",
   *                   "coverPhoto": "product/63087b2f224cb585fce762a6/cover-photo/default.png",
   *                  "_id": "62cfb9dc26bd109f9ae2d7dd"
   *              }
   *         }
   *     ],
   *    "execTime": 114
   *  }
   *    }
   *
   */

    async list(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.user._id;
            await WishlistService.list(userId)
            const wishlist = await WishlistModel.aggregate(
                [
                    {
                        '$lookup': {
                            'from': 'products',
                            'localField': 'productId',
                            'foreignField': '_id',
                            'as': 'product'
                        }
                    }, {
                        '$unwind': {
                            'path': '$product',
                            'preserveNullAndEmptyArrays': false
                        }
                    }, {
                        '$project': {
                            'userId': 1,
                            'product': {
                                '_id': '$product._id',
                                'name': 1,
                                'regularPrice': 1,
                                'color': 1,
                                'brandName': 1,
                                'coverPhoto': 1,
                                'salePrice': 1
                            }
                        }
                    }
                ]
            );
            return ResponseHelper.ok(res, res.__('wish_list'), { wishlist });

        } catch (error) {
            next(error);
        }
    }
}

export default new Wishlist();