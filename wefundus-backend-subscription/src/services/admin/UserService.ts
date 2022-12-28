
import { ObjectId } from "aws-sdk/clients/codecommit";
import { UserInterface } from "../../interfaces/UserInterface";
import UserModel from "../../models/UserModel";
import { ApiFeatures } from "../../utils/ApiFeatures";

class UserService{

     /**
    * @description listing of user
    * @param queryString req query object
    * @params User id of user
    * @returns 
    */

    async list(
        queryString: any,
        user: string
    ): Promise<{ count: number, list: UserInterface[] }> {
        const countQuery = UserModel.find({ isDeleted: false, user });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const lisQuery = UserModel.find({ isDeleted: false, user });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .filtering()
            .searching(['name'])
            .sorting('-createdAt')
            .fieldsLimiting()
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;

        return { count, list };
    }
      /**
    * @description get user by id
    * @param id {String} user id for fetching user
    * @returns {Promise<UserInterface>} user data by id
    */

       async findUser(
        id: string | ObjectId
    ): Promise<UserInterface> {
        const userData: UserInterface = await UserModel.findById(id);
        return userData;
    }
}
export default new UserService();