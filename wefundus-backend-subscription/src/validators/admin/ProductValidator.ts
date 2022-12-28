import { NextFunction } from 'express';
import * as Joi from 'joi';
import { validate } from '../../helpers/ValidateHelper';
import { ReqInterface, ResInterface } from '../../interfaces/ReqInterface';

class ProductValidator {
    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().required(),
                price: Joi.number().optional(),
                categoryId: Joi.string().required(),
                categoryName: Joi.string().optional(),
                subcategoryName: Joi.string().optional(),
                subcategoryId: Joi.string().required(),
                brandId: Joi.string().required(),
                sectionId: Joi.string().required(),
                sectionName: Joi.string().optional(),
                author: Joi.string().required(),
                stock: Joi.number().required(),
                description: Joi.string().required(),
                regularPrice: Joi.number().required(),
                salePrice: Joi.number().required(),
                taxClass: Joi.string().required(),
                taxStatus: Joi.string().required(),
                taxClassCode: Joi.string().required(),
                stockQuantity: Joi.number().required(),
                allowBackOrders: Joi.boolean().required(),
                lowStockThreshold: Joi.number().required(),
                soldIndividualStock: Joi.number().required(),
                weight: Joi.number().required(),
                weightUnit: Joi.string().required(),
                dimensions: Joi.string().required(),
                shippingClass: Joi.string().required(),
                upSells: Joi.boolean().required(),
                crossSells: Joi.boolean().required(),
                material: Joi.string().required(),
                purchasedNote: Joi.string().required(),
                menuOrder: Joi.string().required(),
                isReviewEnabled: Joi.boolean().required(),
                adminCommissionType: Joi.string().required(),
                adminCommission: Joi.number().required(),
                cashbackTypes: Joi.array().required(),
                colors: Joi.array().items(
                    Joi.string().trim()
                ).optional()
                //coverPhoto:Joi.string().required(),
                // photos:Joi.string().required(),
            });

            const isValid = await validate(req.body, res, schema);

            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }
}
export default new ProductValidator();