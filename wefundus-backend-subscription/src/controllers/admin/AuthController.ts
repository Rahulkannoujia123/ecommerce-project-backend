import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import AdminModel from "../../models/AdminModel";
import AuthService from "../../services/admin/AuthService";
import { Auth } from "../../utils/Auth";

class AuthController {


  /**
    * @api {post} /api/v1/admin/auth/login Log In
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiVersion 1.0.0
    * @apiName login
    * @apiGroup Admin-Auth
    *
    * @apiParam {String} email Email Id.
    * @apiParam {String} password 
    * 
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     {
            "status": 200,
            "data": {
              "admin": {
                      "email": "admin@wefundus.com",
                      "_id": "615bdfd735a0fd20a8d80d02",
                      "name": "We Fund us",
                      "createdAt": "2021-10-05T05:17:11.254Z"
                    },
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9UyZmViNDFkOGU1NDZ....."
                }
            }
    *
    * @apiErrorExample {json} Error-Response:
    * HTTP/1.1 400 Bad Request
    *  {
    *        "status": 400,
    *        "message": "Incorrect email or password"
    *  }
    *
    *
    */
  async login(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const data = await AuthService.login(
        email,
        password,
        res,
        next
      );

      if (data)
        return ResponseHelper.ok(res, res.__('login_successfully'), data);


    } catch (error) {
      next(error);
    }
  }



  /**
      * @api {post} /api/app/admin/change-password Change Password
      * @apiHeader {String} App-Version Version Code 1.0.0.
      * @apiVersion 1.0.0
      * @apiName change-password
      * @apiGroup Admin-Auth
      *
      * @apiParam {String} passwordCurrent
      * @apiParam {String} password 
      * 
      * @apiSuccessExample {json} Success-Response:
      *     HTTP/1.1 200 OK
      *     {
      *        "status": 200,
      *        "message": "password changed successfully"
      *     }
      *
      * @apiErrorExample {json} Error-Response:
      * HTTP/1.1 400 Bad Request
      *  {
      *        "status": 400,
      *        "message": "Invalid password"
      *  }
      *
      *
      **/

  async changePassword(req: ReqInterface, res: ResInterface, next: NextFunction) {
    try {
      const passwordCurrent = req.body.passwordCurrent;
      const password = req.body.password;

      const admin: any = await AdminModel.findById(req.admin._id);

      const isPasswordCurrentCorrect = await new Auth().comparePassword(passwordCurrent, admin.password);

      if (!isPasswordCurrentCorrect) {
        return ResponseHelper.badRequest(res, res.__('incorrect_password'));
      }

      const encryptedPassword = await new Auth().encryptPassword(password);

      admin.password = encryptedPassword;
      await admin.save();

      res.logMsg = 'Admin password changed successfully'

      return ResponseHelper.ok(res, res.__('admin_password_changed'), {});
    } catch (err) {
      next(err);
    }
  }

}

export default new AuthController();