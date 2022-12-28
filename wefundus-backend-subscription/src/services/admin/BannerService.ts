

import { S3_DIRECTORY } from "../../constants/S3Constant";
import { BannerInterface } from "../../interfaces/BannerInterface";
import BannerModel from "../../models/BannerModel";
import { ApiFeatures } from "../../utils/ApiFeatures";
import { FileUpload } from "../../utils/FileUpload";

class BannerService {

    /**
     * 
     * @param photo {string} photo of banner
     * @param clickUrl {string} absolute path of banner clickUrl
     * @returns banner {Promise<BannerInterface>} new added banner
     */
    async add(
        photo: any,
        clickUrl: string,
        deviceType: string
    ): Promise<BannerInterface> {
        const url = await this.uploadPhoto(photo, S3_DIRECTORY.banner);
        const newBanner: BannerInterface = await BannerModel.create({ photo: url, clickUrl, deviceType });
        return newBanner;
    }

    /**
     * 
     * @param photo {File} photo to be uploaded
     * @param directory {String} photo directory 
     * @returns {Promise<{url: string}>} uploaded photo base path
     */

    private async uploadPhoto(
        photo: any,
        directory: string,
    ): Promise<string> {
        const fileName = `${Date.now()}-${photo.originalFilename}`;
        return await new FileUpload().uploadFileOnS3(photo, directory, fileName);
    }

    /**
     * 
     * @param queryString 
     * @returns 
     */
    
    async list(
        queryString: any
    ): Promise<{ count: number, list: BannerInterface[] }> {
        const countQuery = BannerModel.find({ isDeleted: false });
        const countFeature = new ApiFeatures(countQuery, queryString)
            .filtering()
            .searching(['name'])
            .getCount();

        const listQuery = BannerModel.find({ isDeleted: false });
        const listFeature = new ApiFeatures(listQuery, queryString)
            .filtering()
            .searching(['name'])
            .sorting('-createdAt')
            .fieldsLimiting()
            .pagination();

        const count = await countFeature.query;
        const list = await listFeature.query;
        return { list, count };
    }
    /**
       * 
       * @param id {String} banner id for edit banner
       * @param directory {String} photo directory 
       * @returns {Promise<ProductInterface>} edit banner
       */
    async edit(
        id: string,
        photo: any,
        clickUrl: string,
        deviceType: string
    ): Promise<BannerInterface> {
        const banner = await BannerModel.findById(id)
        let url = banner.photo;

        if (photo) {
            url = await this.uploadPhoto(photo, S3_DIRECTORY.banner);
        }

        const updateBanner: BannerInterface = await BannerModel.findByIdAndUpdate(
            id,
            {
                photo: url,
                clickUrl,
                deviceType,
            },
            {
                new: true
            }
        );
        return updateBanner;
    }


}

export default new BannerService();