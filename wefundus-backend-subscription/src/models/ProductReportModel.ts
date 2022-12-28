import { model, Schema, Types } from 'mongoose';
import { ProductReportInterface } from '../interfaces/ProductReportInterface';
import ProductModel from './ProductModel';


const productReportSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    required: true
  },
  productId: {
    type: Types.ObjectId,
    required: true

  },
  reasonId: {
    type: Types.ObjectId,
    required: true

  },
  reasonText: {
    type: String,
    default: null
  }

}, { timestamps: true });

productReportSchema.index({ userId: 1, productId: 1 }, { unique: true });
productReportSchema.post('save', async function (doc: ProductReportInterface) {
  await ProductModel.findByIdAndUpdate(
    doc.productId,
    {
      $inc: { 'totalReports': 1 }
    }
  )
});

const ProductReportModel = model<ProductReportInterface>('ProductReport', productReportSchema)
export default ProductReportModel;

