
import { Schema, model, Types } from "mongoose";
import { RecentSearchInterface } from "../interfaces/RecentSearchInterface";

const recentSearchSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true
    },
    searchText: {
        type: String,
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

recentSearchSchema.index({ searchText: 1, userId: 1 }, { unique: true })

const RecentSearchModel = model<RecentSearchInterface>('recentSearch', recentSearchSchema);
export default RecentSearchModel;