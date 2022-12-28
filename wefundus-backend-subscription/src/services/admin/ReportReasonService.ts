
import { ObjectId } from "aws-sdk/clients/codecommit";
import { ReportReasonInterface } from "../../interfaces/ReportReasonInterface";
import ReportReasonModel from "../../models/ReportReasonModel";
import { ApiFeatures } from "../../utils/ApiFeatures";

class ReportReasonService {

    /**
     * 
     * @param title {string} title of reportreason
     * @param text {string} text of reportreason
     * @returns reportreason {Promise<ReportReasonInterface>} new added reportreason
     */
    async add(
        categoryId:ObjectId,
        title: string,
        text: string
    ): Promise<ReportReasonInterface> {
        const newReportReason: ReportReasonInterface = await ReportReasonModel.create({ categoryId,title, text});
        return newReportReason;
    }

    /**
    * 
    * @param _id id of reportreason
    * @param title title of reportreason
    * @param text text of reportreason
    * @returns  {Promise<ReportInterface>}
    */

    async update(
        _id: string,
        title: string,
        text: string,
    ): Promise<ReportReasonInterface> {
        const updatedreportreason: ReportReasonInterface = await ReportReasonModel.findByIdAndUpdate(
            _id,
            {
                title,
                text,
            },
            {
                new: true
            }
        );
        return updatedreportreason;
    }


    /**
   * @description listing of reportreason
   * @param queryString req query object
   * @returns 
   */

    async list(
        queryString: any
    ): Promise<{ count: number, list: ReportReasonInterface[] }> {
        const countQuery = ReportReasonModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .searching(['text'])
            .getCount();

        const lisQuery = ReportReasonModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .searching(['text'])
            .sorting('-createdAt')
            .pagination();

        const count = await countFeature.query.populate('');
        const list = await listFeature.query;

        return { list, count };
    }

}
export default new ReportReasonService();