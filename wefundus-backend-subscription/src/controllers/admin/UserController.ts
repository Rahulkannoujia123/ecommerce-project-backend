import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import UserModel from "../../models/UserModel";
import UserService from "../../services/admin/UserService";

class UserController{

 /**
     * @api {get} /api/v1/admin/user Get User List 
     * @apiHeader {String} App-Version Version Code 1.0.0.
     * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
     * @apiVersion 1.0.0
     * @apiName list-user
     * @apiGroup Admin-User
     * @apiSuccessExample {json} Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *  "status": 200,
     *  "statusText": "SUCCESS",
     *  "message": "User list fetched successfully",
     *  "data": {
     *    "count": 127,
     *    "list": [
     *        {
     *            "_id": "62d8ef88c075177dd13aa9bd",
     *            "email": "chandranshurajsingh@gmail.com",
     *            "isEmailVerified": true,
     *            "isAccountActive": true
     *        },
     *        {
     *            "_id": "62da57b132cd49d7e9350cbb",
     *            "email": "rajat1010114@yopmail.com",
     *            "isEmailVerified": false,
     *            "isAccountActive": false
     *        },
     *        {
     *            "_id": "62d016d1ff9b93f5383b097f",
     *            "email": "freed@free.commd",
     *            "isEmailVerified": false,
     *            "isAccountActive": false
     *        },
     *        {
     *            "_id": "62d6898ef055ab9d06da8aee",
     *            "email": "vishwa92.piyush1@gmail.com",
     *            "isEmailVerified": true,
     *            "isAccountActive": true
     *        },
     *        {
     *            "_id": "62d01e3aff9b93f5383b0bf6",
     *            "email": "kamal@test.com",
     *            "isEmailVerified": false,
     *            "isAccountActive": false
     *        },
     *         ],
     *    "execTime": 111
     * }
     * }
     */
    async list(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const queryString = req.query;
            const userId = req.params.id;
            const data = await UserService.list(queryString, userId);
            if (data) {
                res.logMsg = `User list fetched successfully`;
                return ResponseHelper.ok(res, res.__('user_list'), data);
            }
        } catch (error) {
            next(error)
        }
    }
      /**
    * @api {patch} /api/v1/admin/banner/_id/status Update Status User
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4MzAyNzUzLCJleHAiOjE2NTgzODkxNTN9.sZHSncgjZAdM_gYbP7tIK8NTFTrAo2j10UkG4bHWhxs
    * @apiVersion 1.0.0
    * @apiName update-status-user
    * @apiGroup Admin-User
    * @apiDescription pass user _id as params
    * @apiSuccessExample {json} Success-Response:
    *HTTP/1.1 200 OK
    *  {
    *  "status": 200,
    *  "statusText": "SUCCESS",
    *  "message": "User update status  successfully",
    *  "data": {
    *    "_id": "62dfcb21fb89c4b45de44685",
    *    "email": "najariya.query@gmail.com",
    *    "isEmailVerified": true,
    *    "isAccountActive": false,
    *    "__v": 0,
    *    "currentDeviceType": "IOS",
    *    "accountNumber": 20231949278,
    *    "avatar": "user-profiles/1659434425401-test3.jpeg",
    *    "description": "it is good",
    *    "displayName": "ASDF",
    *    "firstName": "Pukhraj",
    *    "lastName": "Saini",
    *    "name": "pukhraj Saini",
    *    "paypalEmail": "pukhraj.saini97@gmail.com",
    *    "changedEmail": "pukhraj.query@gmail.com"
    *   }
    *  }
    *
    */
    async activeUpdateStatus(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            let userId = req.params.id;
            let userData = await UserModel.findOne({
                "_id": userId
            });
            userData.isAccountActive = !userData.isAccountActive;
            userData.save();
            res.logMsg = 'User update status  successfully';
            return ResponseHelper.ok(res, res.__('user_change_status'), userData);
        } catch (error) {
            next(error)
        }
    };
    /**
   * @api {get} /api/v1/admin/user/_id Get UserById
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
   * @apiVersion 1.0.0
   * @apiName Get-user
   * @apiGroup Admin-User
   * @apiDescription pass user _id as params
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   * "status": 200,
   * "statusText": "SUCCESS",
   * "message": "User fetched successfully",
   * "data": {
   *     "user": {
   *         "_id": "62daa7c9df7ccbd75ff90c18",
   *         "email": "rahul@123gmail.com",
   *         "isEmailVerified": true,
   *         "isAccountActive": true,
   *         "__v": 0,
   *         "accountNumber": 37378731355699,
   *         "avatar": "user-profiles/1658497014545-mobilebanner4.jpeg",
   *         "description": "bnkbnkbnkbrkbr",
   *         "displayName": "rahulkannoujia",
   *         "firstName": "ankit",
   *         "lastName": "kannoujia",
   *         "name": "ankit kannoujia",
   *         "paypalEmail": "rahul@127gmail.com"
   *     },
   *     "execTime": 71
   * }
   * }
   */

    async findUserById(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const userId = req.params.id;
            const user = await UserService.findUser(userId);
            if (user) {
                res.logMsg = 'User fetched successfully';
                ResponseHelper.ok(res, res.__('user_fetched'), { user });
            }
        } catch (error) {
            next(error);
        }
    }
}
export default  new UserController();