import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import { SubscriptionInterface } from "../../interfaces/SubscriptionInterface";
import SubscriptionService from "../../services/admin/SubscriptionService";



class SubscriptionController {
    async addSubscription(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const { name, price, subscriptionType, memberLimit, subgroupLimit, description, timePeriod } = req.body as SubscriptionInterface;
            const result = await SubscriptionService.add(name, price, subscriptionType, memberLimit, subgroupLimit, description, timePeriod);
            if (result.isSubsAlreadyExists) return ResponseHelper.conflict(res, res.__('subscription_already_exists'))
            return ResponseHelper.created(res, res.__('new_subscription_added'), { subscription: result.subscription })
        } catch (error) {
            next(error);
        }
    }
}
export default new SubscriptionController();