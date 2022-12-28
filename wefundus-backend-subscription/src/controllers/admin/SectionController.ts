import { NextFunction } from "express";
import ResponseHelper from "../../helpers/ResponseHelper";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import SectionModel from "../../models/SectionModel";
import SearchService from "../../services/admin/SearchService";
import SectionService from "../../services/admin/SectionService";

class SectionController {

    /**
    * @api {post} /api/v1/admin/section Add Section
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
    * @apiVersion 1.0.0
    * @apiName add-section
    * @apiGroup Admin-Section
    *
    * @apiParam {String} name
    * @apiParam {String} category
    * @apiParam {String} subcategory 
    * 
    * @apiParamExample {json} Request-Body: 
    * {
    *        "category": "62c565ce198c336e57acf4a7",
    *        "subcategory": "62c57716f96069e70cf20b57",
    *        "name": "dresses"
    *    }
    * 
    * @apiSuccessExample {json} Success-Response:
    *  HTTP/1.1 200 OK
    * {
    *        "status": 201,
    *        "statusText": "CREATED",
    *        "message": "Section created successfully",
    *        "data": {
    *            "section": {
    *                "category": "62c565ce198c336e57acf4a7",
    *                "subcategory": "62c57716f96069e70cf20b57",
    *                "name": "dresses",
    *                "isActive": true,
    *                "isDeleted": false,
    *                "_id": "62c57985e157e053e48266ce",
    *                "createdAt": "2022-07-06T12:01:09.501Z",
    *                "updatedAt": "2022-07-06T12:01:09.501Z",
    *                "__v": 0
    *            }
    *    }
    *
    */

    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const image = req.files.image;
            if (!image) return ResponseHelper.badRequest(res, res.__('image_is_required'));
            const { name, category, subcategory } = req.body;
            const section = await SectionService.add(category, subcategory, name, image, res);
            if (section) {
                res.logMsg = `Section added successfully for category *${category}* and *${subcategory}*`;
                return ResponseHelper.created(res, res.__('section_created'), { section });
            }

        } catch (error) {
            next(error);
        }
    }

    /**
  * @api {get} /api/v1/admin/section/_id Get section 
   * @apiHeader {String} App-Version Version Code 1.0.0.
   * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
   * @apiVersion 1.0.0
   * @apiName Get-Section
   * @apiGroup Admin-Section
   * @apiDescription pass section _id as params
   * @apiSuccessExample {json} Success-Response:
  *  HTTP/1.1 200 OK
  *{
  * "status": 200,
  *"statusText": "SUCCESS",
  *"message": "Section list get successfully",
  *"data": {
  * *   "section": {
  *        "_id": "62c57985e157e053e48266ce",
  *        "category": "62c565ce198c336e57acf4a7",
  *        "subcategory": "62c57716f96069e70cf20b57",
  *        "name": "dresses",
  *        "isActive": true,
  *        "isDeleted": false,
  *        "createdAt": "2022-07-06T12:01:09.501Z",
   *       "updatedAt": "2022-07-06T12:01:09.501Z",
   *       "__v": 0
    *  },
   *   "execTime": 88
  *}
}
  *
  */


    async getSectionById(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const sectionId = req.params.id;
            const section = await SectionService.getSectionData(sectionId);
            if (section) {
                res.logMsg = `Section data fetched Successfully`;
                return ResponseHelper.ok(res, res.__('section_list'), { section });
            }
        } catch (error) {
            next(error)
        }
    }


    /**
      * @api {delete} /api/v1/admin/section/_id Delete Section
      * @apiHeader {String} App-Version Version Code 1.0.0.
      * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
      * @apiVersion 1.0.0
      * @apiName Delete Section
      * @apiGroup Admin-Section
      *
      * @apiDescription pass section _id as params
      * 
      * @apiSuccessExample {json} Success-Response:
      *HTTP/1.1 200 OK
      * {
      * "status": 200,
      * "statusText": "SUCCESS",
      * "message": "Section deleted successfully",
      * "data": {
      *     "section": {
      *        "_id": "62c6a9725336da285a65cc84",
      *        "category": "62c6a900437247fa040492c9",
      *        "subcategory": "62c6a92d437247fa040492ce",
      *        "name": "mandresss",
      *        "isActive": true,
      *       "isDeleted": false,
      *       "createdAt": "2022-07-07T09:37:54.016Z",
      *      "updatedAt": "2022-07-07T09:37:54.016Z",
      *        "__v": 0
      *    },
      *    "execTime": 63
      * }
  }
      *
      */


    async delete(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const sectionId = req.params.id;
            const section = await SectionService.delete(sectionId);
            if (section) {
                res.logMsg = 'Section deleted successfully';
                ResponseHelper.ok(res, res.__('section_deleted'), { section });
            }
        } catch (error) {
            next(error);
        }
    }


    /**
    * @api {patch} /api/v1/admin/section/_id Update section 
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
    * @apiVersion 1.0.0
    * @apiName update-section
    * @apiGroup Admin-Section
    * 
    * @apiDescription pass section _id as params
    *
    * @apiParam {String} name
    * @apiParam {String} category
    * @apiParam {String} subcategory 
    * 
    * @apiParamExample {json} Request-Body: 
    * {
    *        "category": "62c565ce198c336e57acf4a7",
    *        "subcategory": "62c57716f96069e70cf20b57",
    *        "name": "dresses"
    *    }
    * 
    * @apiSuccessExample {json} Success-Response:
    *  HTTP/1.1 200 OK
    * {
    *        "status": 201,
    *        "statusText": "SUCCESS",
    *        "message": "Section updated successfully",
    *        "data": {
    *            "section": {
    *                "category": "62c565ce198c336e57acf4a7",
    *                "subcategory": "62c57716f96069e70cf20b57",
    *                "name": "dresses",
    *                "isActive": true,
    *                "isDeleted": false,
    *                "_id": "62c57985e157e053e48266ce",
    *                "createdAt": "2022-07-06T12:01:09.501Z",
    *                "updatedAt": "2022-07-06T12:01:09.501Z",
    *                "__v": 0
    *            },
    *        }
    *    }
    *
    */


    async update(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const sectionId = req.params.id;
            const image = req.files.image;

            const { name, category, subcategory } = req.body;
            const section = await SectionService.update(sectionId, category, subcategory, name, image, res);
            if (section) {
                res.logMsg = `Section updated successfully for category *${category}* and *${subcategory}*`;
                return ResponseHelper.created(res, res.__('section_updated'), { section });
            }

        } catch (error) {
            next(error);
        }
    }

    /**
    * @api {get} /api/v1/admin/section/_id Get Section List 
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF..........
    * @apiVersion 1.0.0
    * @apiName list-section
    * @apiGroup Admin-Section
    * @apiDescription pass subcategory _id as params 
    * @apiSuccessExample {json} Success-Response:
    *  HTTP/1.1 200 OK
    *    {
    *    "status": 200,
    *    "statusText": "SUCCESS",
    *    "message": "Section list get successfully",
    *    "data": {
    *        "list": [
    *            {
    *                "_id": "62c6a963437247fa040492d4",
    *                "category": "62c6a900437247fa040492c9",
    *                "subcategory": "62c6a92d437247fa040492ce",
    *                "name": "man dresss",
    *                "isActive": true,
    *                "isDeleted": false,
    *                "createdAt": "2022-07-07T09:37:39.752Z",
    *                "updatedAt": "2022-07-07T09:37:39.752Z"
    *            }
    *        ],
    *        "count": 1,
    *        "execTime": 100
    *        }
    *    }
    *
    */


    async list(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const queryString = req.query;
            const subcategoryId = req.params.id;

            const data = await SectionService.list(queryString, subcategoryId);

            if (data) {
                res.logMsg = `Section list fetched Successfully`;
                return ResponseHelper.ok(res, res.__('section_list'), data);
            }
        } catch (error) {
            next(error)
        }
    }

    /**
    * @api {patch} /api/v1/admin/section/_id/status Update Status Section
    * @apiHeader {String} App-Version Version Code 1.0.0.
    * @apiHeader {String} Authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmZlMGNmMTdiYmU2ZjY2NzI3MzlmMyIsImVtYWlsIjoiYWRtaW5Ad2VmdW5kdXMuY29tIiwiaWF0IjoxNjU4NDAxMDc2LCJleHAiOjE2NTg0ODc0NzZ9.zvsp9yJKoXl9FUfp76BxnG3fDbUCVeRUNqf8jqQbBgw
    * @apiVersion 1.0.0
    * @apiName update-status-section
    * @apiGroup Admin-Section
    * @apiDescription pass section _id as params
    * @apiSuccessExample {json} Success-Response:
    *HTTP/1.1 200 OK
   {
    "status": 200,
    "statusText": "SUCCESS",
    "message": "section_update",
    "data": {
        "_id": "62c57985e157e053e48266ce",
        "category": "62c565ce198c336e57acf4a7",
        "subcategory": "62c57716f96069e70cf20b57",
        "name": "dresses",
        "isActive": false,
        "isDeleted": false,
        "createdAt": "2022-07-06T12:01:09.501Z",
        "updatedAt": "2022-07-06T12:01:09.501Z",
        "__v": 0
    }
}
    *
    */
    async activeupdateStatus(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            let sectionId = req.params.id;
            let section = await SectionModel.findOne({
                "_id": sectionId
            });
            section.isActive = !section.isActive;
            section.save();

            await SearchService.updateSectionDocument(section, false);
            res.logMsg = 'Section update status  successfully';
            return ResponseHelper.ok(res, res.__('section_changed_status'), section);
        } catch (error) {
            next(error)
        }
    };
}

export default new SectionController();