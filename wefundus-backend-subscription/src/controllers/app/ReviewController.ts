import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import ReviewModel from "../../models/ReviewModel";
import ReviewService from "../../services/app/ReviewService";

class ReviewController {
    /**
        * @api {post} /api/v1/app/review Add Review
        * @apiHeader {String} App-Version Version Code 1.0.0.
        * @apiHeader {String} deviceType 'WEB'|'IOS'|'ANDROID'
        * @apiVersion 1.0.0
        * @apiName Add-review
        * @apiGroup App-Review
        * @apiSuccessExample {json} Success-Response-1:
        *
        *  "status": 201,
        *  "statusText": "CREATED",
        *  "message": "Review added successfully",
        *   "data": {
        *    "review": {
        *      "productId": "62cfba1f26bd109f9ae2d7e4",
        *        "userId": "62e0e20233728726535d2de1",
        *         "rating": 5,
        *         "description": "this pen  is best performance",
        *         "_id": "62fc974b3ef3e614562fa3f8",
        *         "createdAt": "2022-08-17T07:22:51.079Z",
        *         "updatedAt": "2022-08-17T07:22:51.079Z",
        *          "__v": 0
        *              },
        *              "execTime": 132
        *               }   
        *              }
        *
        *
        */

    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.user._id;
            const productId = req.body.productId;
            const rating = req.body.rating;
            const description = req.body.description;
            const isExists =  await ReviewModel.exists({ userId: req.user._id, productId })
            if (isExists)
                return ResponseHelper.badRequest(res, res.__('product_review_exists'));

            const review = await ReviewService.add(productId, userId, rating, description);
            if (review) {
                res.logMsg = `Review added successfully`;
                ResponseHelper.created(res, res.__("review_created"), {
                    review,
                });
            }
        } catch (error) {
            next(error);
        }
    }
    /**
            * @api {patch} /api/v1/app/review/_id Edit Review
            * @apiHeader {String} App-Version Version Code 1.0.0.
            * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4Mjk0OTQ5LCJleHAiOjE2NTgzODEzNDl9.PjHH-y-fKkDRD5Zw5fA8I029Iwc1ESWxnCYszaRTEpo
            * @apiVersion 1.0.0
            * @apiName edit-review
            * @apiGroup App-Review
            * @apiParam {Number} rating
            * @apiParam {String} description
            * @apiParamExample {json} Request-Body: 
            * {
            *      "rating":4,
            *      "description":"this product  is best performance"
            * }
            * 
            * @apiSuccessExample {json} Success-Response:
            * HTTP/1.1 200 success
            *  {
            *  "status": 200,
            *   "statusText": "SUCCESS",
            *    "message": "Review updated  successfully",
            *    "data": {
            *     "review": {
            *        "_id": "62fc974b3ef3e614562fa3f8",
            *         "productId": "62cfba1f26bd109f9ae2d7e4",
            *          "userId": "62e0e20233728726535d2de1",
            *          "rating": 4,
            *         "description": "this product  is best performance",
            *         "createdAt": "2022-08-17T07:22:51.079Z",
            *         "updatedAt": "2022-08-17T08:58:16.645Z",
            *      "__v": 0
            *         },
            *     "execTime": 81
            *       }
            *      }
            *
            */
    async edit(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const reviewId = req.params.id;
            const rating = req.body.rating;
            const description = req.body.description;
            const review = await ReviewService.edit(reviewId, rating, description);

            if (review) {
                res.logMsg = 'Review updated successfully';
                ResponseHelper.ok(res, res.__('review_updated'), { review });
            }

        } catch (error) {
            next(error);
        }
    }
}
export default new ReviewController()