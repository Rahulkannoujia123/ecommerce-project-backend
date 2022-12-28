import { RecentSearchInterface } from "../../interfaces/RecentSearchInterface";
import RecentSearchModel from "../../models/RecentSearchModel";

class RecentSearchService {
    /**
 
    * @param userId
    * @param searchText 
    * @returns new added recentsearch
    */
    async add(
        userId: any,
        searchText: string
    ): Promise<RecentSearchInterface> {
        const newRecentSearch: RecentSearchInterface = await RecentSearchModel.create({ userId, searchText });
        return newRecentSearch;
    }
    /**
         * 
         * @param id {String} recentsearch id for deleting recentsearch
         * @returns {Promise<RecentSearchInterface>} deleted recentsearch
         */
    async delete(
        id: string,
    ): Promise<RecentSearchInterface> {
        const deleteRecentSearch: RecentSearchInterface = await RecentSearchModel.findByIdAndDelete(id);
        return deleteRecentSearch;
    }
}
export default new RecentSearchService();