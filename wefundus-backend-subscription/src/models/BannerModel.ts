import { model, Schema } from 'mongoose';
import { BannerInterface } from '../interfaces/BannerInterface';
const bannerSchema = new Schema({
    clickUrl: {
        type: String, 
    },
    photo: {
        type: String,
    },
    deviceType:{
       type:String,
       enum:['WEB','MOBILE']
    },
    isActive: {
        type: Boolean,
        default:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const BannerModel = model<BannerInterface>('Banner', bannerSchema);
export default BannerModel;