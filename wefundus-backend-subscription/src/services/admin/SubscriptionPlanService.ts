

import { SubscriptionPlanInterface } from "../../interfaces/SubscriptionPlanInterface";
import SubscriptionPlanModel from "../../models/SubscriptionPlanModel";
import { ApiFeatures } from "../../utils/ApiFeatures";

class SubscriptionPlanService {
  /**
   *
   * @param name {string} name of subscription
   * @param price {number} price of subscription
   * @param subscriptionType{string} subscriptionType of subscription
   * @param memberLimit{number} memberLimit of subscription
   * @param subgroupLimit{number} subgroupLimit of subscription
   * @param description{string} description of subscription
   * @param timePeriod{number} timePeriod of subscription
   * @returns subscription {Promise<SubscriptionPlanInterface>} new added subscription
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
    isSubsAlreadyExists?: boolean;
    subscription?: SubscriptionPlanInterface;
  }> {
    if (await SubscriptionPlanModel.exists({ name }))
      return { isSubsAlreadyExists: true };
    return {
      subscription: await SubscriptionPlanModel.create({
        name,
        price,
        subscriptionType,
        memberLimit,
        subgroupLimit,
        description,
        timePeriod,
      }),
    };
  }

  /**
   *
   * @param _id id of subscription plan
   * @param name name of subscription plan
   * @param price price of subscription
   * @param subscriptionType subscriptionType of subscription plan
   * @param memberLimit memberLimit of subscription plan
   * @param subgroupLimit subgroupLimit of subscription plan
   * @param description description of subscription plan
   * @param timePeriod timePeriod of subscription plan
   * @returns  {Promise<SubscriptionPlanInterface>} updated subscription
   */

 
    async update(
    subscriptionId: string,
    name: string,
    price: number,
    subscriptionType: number,
    memberLimit: number,
    subgroupLimit: number,
    description: string,
    timePeriod: number
  ): Promise<SubscriptionPlanInterface> {
    const  isExists = await SubscriptionPlanModel.findOne( name);
    if(isExists){
      const subscriptionPlan = await SubscriptionPlanModel.findById( subscriptionId);
    subscriptionPlan.price=price
    subscriptionPlan.subscriptionType=subscriptionType
    subscriptionPlan.memberLimit=memberLimit
    subscriptionPlan.subgroupLimit=subgroupLimit
    subscriptionPlan.description=description
    subscriptionPlan.timePeriod=timePeriod
    if(subscriptionPlan.name!=name){
      subscriptionPlan.name=name

  }
 await subscriptionPlan.save();
 return subscriptionPlan
}

  }

  
   

     

  


  /**
    * @description listing of subscription plan
    * @param queryString req query object
    * @returns 
    */

  async list(
    queryString: any
  ): Promise<{ count: number, list: SubscriptionPlanInterface[] }> {
    const countQuery = SubscriptionPlanModel.find({ isDeleted: false });
    const countFeature = new ApiFeatures(countQuery, queryString)
      .searching(['name'])
      .getCount();

    const lisQuery = SubscriptionPlanModel.find({ isDeleted: false });
    const listFeature = new ApiFeatures(lisQuery, queryString)
      .searching(['name'])
      .sorting('-createdAt')
      .pagination();

    const count = await countFeature.query;
    const list = await listFeature.query;

    return { list, count };
  }

}
export default new SubscriptionPlanService();