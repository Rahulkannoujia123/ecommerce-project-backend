import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import { Email } from "../../utils/Email";
// import SubgroupModel from "../../models/SubgroupModel";

class TestController {
    async test(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            // await SubgroupModel.deleteMany();
            await new Email('ashrafhussain@mobilecoderz.com').sendTestMail('google.com');

            return ResponseHelper.ok(res, 'ok', {});
        } catch (error) {
            next(error);
        }
    }
}

export default new TestController();