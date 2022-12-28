import { Document, ObjectId } from 'mongoose';
export interface ReportReasonInterface extends Document{
    _id?: ObjectId;
    categoryId:string;
    title: string;
    text: string;
    isActive: Boolean;
   
}