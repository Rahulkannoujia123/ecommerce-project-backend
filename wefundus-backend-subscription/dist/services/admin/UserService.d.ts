import { ObjectId } from "aws-sdk/clients/codecommit";
import { UserInterface } from "../../interfaces/UserInterface";
declare class UserService {
    /**
   * @description listing of user
   * @param queryString req query object
   * @params User id of user
   * @returns
   */
    list(queryString: any, user: string): Promise<{
        count: number;
        list: UserInterface[];
    }>;
    /**
  * @description get user by id
  * @param id {String} user id for fetching user
  * @returns {Promise<UserInterface>} user data by id
  */
    findUser(id: string | ObjectId): Promise<UserInterface>;
}
declare const _default: UserService;
export default _default;
