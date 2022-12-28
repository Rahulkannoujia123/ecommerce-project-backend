import { ProductReportInterface } from "../../interfaces/ProductReportInterface";
import ProductReportModel from "../../models/ProductReportModel";

class ProductReportService {
  async list(
    queryString: any
  ): Promise<{ count: number, reports: ProductReportInterface[] }> {
    // const countQuery = productReportModel.find();
    // const countFeature = new ApiFeatures(countQuery, queryString)
    //     .searching(['text'])
    //     .getCount();

    // const lisQuery = productReportModel.find();
    // const listFeature = new ApiFeatures(lisQuery, queryString)
    //     .searching(['text'])
    //     .sorting('-createdAt')
    //     .pagination();

    // const count = await countFeature.query;
    // const list = await listFeature.query;

    const page = queryString.page * 1 || 1;
    const search = queryString.search;
    const limit = queryString.limit * 1 || 100;
    let skip = (page - 1) * limit;
    let match = {};

    if (search && search.trim()) {
      match = {
          'product.name': {
            '$regex': search,
            '$options': '$i'
          }
        
      }
    }
    const agg: any = [
      [
        {
          '$lookup': {
            'from': 'products',
            'localField': 'productId',
            'foreignField': '_id',
            'as': 'product'
          }
        }, {
          '$unwind': {
            'path': '$product'
          }
        }, {
          '$lookup': {
            'from': 'users',
            'localField': 'userId',
            'foreignField': '_id',
            'as': 'reporter'
          }
        }, {
          '$unwind': {
            'path': '$reporter'
          }
        }, {
          '$project': {
            'createdAt': 1,
            'product': {
              'name': 1,
              '_id': 1,
              'salePrice': 1,
              'coverPhoto': 1
            },
            'reporter': {
              'name': 1,
              '_id': 1
            },
            'reasonText': 1
          }
        }, {
          '$match': match
        },
          {
          '$facet': {
            'count': [
              {
                '$count': 'count'
              }
            ],
            'reports': [
              {
                '$sort': {
                  'createdAt': -1
                }
              }, {
                '$skip': skip
              }, {
                '$limit': limit
              }
            ]
          }
        }, {
          '$project': {
            'count': {
              '$first': '$count.count'
            },
            'reports': 1
          }
        }
      ]
    ]

    const reports: any = await ProductReportModel.aggregate(agg);

    return reports;
  }

}

export default new ProductReportService;