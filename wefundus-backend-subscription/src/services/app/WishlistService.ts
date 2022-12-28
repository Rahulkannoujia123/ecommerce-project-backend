
import { WishlistInterface } from "../../interfaces/WishlistInterface";
import WishlistModel from "../../models/WishlistModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import { ObjectId } from 'mongoose';

class WishlistService {
    /**
     * @param ProductId {string} product of user
     * @param next {NextFunction} next function
     * @return {Promise<UserInterface>} add wishlist
     */
    async add(
        productId: string,
        userId: ObjectId
    ): Promise<WishlistInterface> {
        const newWishlist: WishlistInterface = await WishlistModel.create({ productId, userId });
        return newWishlist;
    }
    

    /**
     * 
     * @param queryString 
     * @returns 
     */
    async list(
        queryString: any
    ): Promise<{ count: number, list: WishlistInterface[] }> {
        const countQuery = WishlistModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const lisQuery = WishlistModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .filtering()
            .searching(['name'])
            .sorting('-createdAt')
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { list, count };
    }

}
export default new WishlistService();