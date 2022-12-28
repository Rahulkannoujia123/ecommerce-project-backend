import { model, Types, Schema } from 'mongoose';
import { GroupFavoriteInterface } from '../interfaces/GroupFavoriteInterface';

const favoriteSchema = new Schema({
    groupId: {
        type: Types.ObjectId,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        required: true
    }
}, { timestamps: true });

favoriteSchema.index({ groupId: 1, userId: 1 }, { unique: true });
const GroupFavoriteModel = model<GroupFavoriteInterface>('GroupFavorite', favoriteSchema);
export default GroupFavoriteModel;