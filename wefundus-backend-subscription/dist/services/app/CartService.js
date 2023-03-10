"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartModel_1 = require("../../models/CartModel");
class CartService {
    /**
        * @param productId {string} product of user
        * @param quantity{number} quantity
        * @param next {NextFunction} next function
        * @return {Promise<CartInterface>} add Cart
        */
    add(productId, userId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCart = yield CartModel_1.default.create({ productId, userId, quantity });
            return newCart;
        });
    }
    /**
    *
    * @param id {String} cart id for deleting cart
    * @returns {Promise<CartInterface>} deleted cart
    */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCart = yield CartModel_1.default.findByIdAndDelete(id);
            return deletedCart;
        });
    }
}
exports.default = new CartService();
