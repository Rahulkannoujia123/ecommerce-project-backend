
import { model, Schema, Types } from 'mongoose';
import { CartInterface } from '../interfaces/CartInterface';

const CartSchema = new Schema({
    productId: {
        type: Types.ObjectId,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
    },
    color: {
        type: String,
        default: null
    },
    attributes: {
        type: [
            {
                _id: false,
                name: String,
                value: String
            }
        ],
        default: []
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

const CartModel = model<CartInterface>('Cart', CartSchema);
export default CartModel;