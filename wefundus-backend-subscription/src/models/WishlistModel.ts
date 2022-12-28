import { Schema, model, Types } from "mongoose";
import { WishlistInterface } from "../interfaces/WishlistInterface";

const wishlistSchema = new Schema({
    productId: {
        type: Types.ObjectId,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

wishlistSchema.index({ user: 1, product: 1 });

const WishlistModel = model<WishlistInterface>('Wishlist', wishlistSchema);
export default WishlistModel;