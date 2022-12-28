import { Document, ObjectId } from 'mongoose';

export interface SubscriptionInterface extends Document {
    _id?: ObjectId | string;
   name:string,
   price:number,
   subscriptionType:SubscriptionType,
   memberLimit:number,
   subgroupLimit:number,
   description:string,
   timePeriod:number,
   isActive:boolean
}
export enum SubscriptionType {
    group =1,
    subgroup=2,
  
}