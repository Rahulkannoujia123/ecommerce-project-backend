
import { CartInterface } from "../../interfaces/CartInterface";
import CartModel from "../../models/CartModel";

class CartService {
    /**
        * @param productId {string} product of user
        * @param quantity{number} quantity
        * @param next {NextFunction} next function
        * @return {Promise<CartInterface>} add Cart
        */
    async add(
        productId: string,
        userId: any,
        quantity: number
    ): Promise<CartInterface> {
        const newCart: CartInterface = await CartModel.create({ productId, userId, quantity });
        return newCart;
    }


     /**
     * 
     * @param id {String} cart id for deleting cart
     * @returns {Promise<CartInterface>} deleted cart
     */

    async delete(
        id: string,
    ): Promise<CartInterface> {
        const deletedCart: CartInterface = await CartModel.findByIdAndDelete(id)
        return deletedCart;
    }

}

export default new CartService();