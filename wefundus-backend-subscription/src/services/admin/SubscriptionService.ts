


import { SubscriptionInterface } from "../../interfaces/SubscriptionInterface";
import SubscriptionModel from "../../models/SubscriptionModel";




class SubscriptionTypeService {

    /**
     * 
     * @param name {string} name of subscription
     * @param price {number} price of subscription
     * @param subscriptionType{string} subscriptionType of subscription
     * @param memberLimit{number} memberLimit of subscription
     * @param subgroupLimit{number} subgroupLimit
     * @param description{string} description
     * @param timePeriod{number} timePeriod
     * @returns subscription {Promise<SubscriptionInterface>} new added subscription
     */
    async add(
        name: string,
        price: number,
        subscriptionType: number,
        memberLimit: number,
        subgroupLimit: number,
        description: string,
        timePeriod: number
    ): Promise<{
        isSubsAlreadyExists?: boolean,
        subscription?: SubscriptionInterface
    }> {
        if (await SubscriptionModel.exists({ name })) return { isSubsAlreadyExists: true };
        return { subscription: await SubscriptionModel.create({ name, price, subscriptionType, memberLimit, subgroupLimit, description, timePeriod }) };
    }




}
export default new SubscriptionTypeService();