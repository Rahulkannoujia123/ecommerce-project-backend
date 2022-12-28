
import { Schema, model } from "mongoose";
import { SubscriptionInterface, SubscriptionType } from "../interfaces/SubscriptionPlanInterface";

const subscriptionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    subscriptionType: {
        type: Number,
        required: true,
        enum: [SubscriptionType.group, SubscriptionType.subgroup]
    },
    memberLimit: {
        type: Number,
        required: true
    },
    subgroupLimit: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timePeriod: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const SubscriptionModel = model<SubscriptionInterface>('Subscription', subscriptionSchema);
export default SubscriptionModel;