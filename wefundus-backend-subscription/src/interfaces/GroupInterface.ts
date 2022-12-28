import { Document, ObjectId } from 'mongoose';

/**
 * Interface for group.
 * @interface
 */
export interface GroupInterface extends Document {
    _id?: ObjectId | string;
    groupIcon?: string;
    groupCode: string;
    name: string;
    purposeId?: ObjectId | string;
    purposeText?: string;
    description: string;
    goalInterval: GoalInterval;
    goalPrice: number;
    showContactInfo?: boolean;
    phoneNumber: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    showSocialInfo?: boolean;
    facebookUrl?: string;
    twitterUrl?: string;
    others?: boolean;
    purpose?: string;
    members?: (ObjectId | string)[];
    createdBy: ObjectId;
    totalMembers?: number;
    totalSubgroup?: number;
    subGroupLimit?: number;
    isDeleted?: boolean;
    groupSubscribed: boolean;
    subGroupSubscribed: boolean;
}

export enum GoalInterval {
    daily = 1,
    weekly = 2,
    yearly = 3
}