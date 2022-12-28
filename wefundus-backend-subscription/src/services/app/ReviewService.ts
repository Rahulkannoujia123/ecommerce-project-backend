import { ReviewInterface } from "../../interfaces/ReviewInterface";
import ReviewModel from "../../models/ReviewModel";


class ReviewService {
    /**
    * 
    * @param productId
    * @param userId
    * @param rating 
    * @param description
    * @returns new added review
    */
    async add(
        productId: string,
        userId: any,
        rating: number,
        description: string
    ): Promise<ReviewInterface> {
        const newReview: ReviewInterface = await ReviewModel.create({ productId, userId, rating, description });
        return newReview;
    }
    /** @param id {String} review id for updating review
   * @param rating rating of review
   * @param description description of review
   * @returns {Promise<ReviewInterface>} updated review
   */
    async edit(
        _id: string,
        rating: number,
        description: string
    ): Promise<ReviewInterface> {
        const editreview: ReviewInterface = await ReviewModel.findByIdAndUpdate(
            _id,
            {
                rating,
                description,
            },
            {
                new: true
            }
        );
        return editreview;
    }
}
export default new ReviewService();