import { NextFunction } from 'express';
import * as Joi from 'joi';
import { validate } from '../../helpers/ValidateHelper';
import { ReqInterface, ResInterface } from '../../interfaces/ReqInterface';

class BrandValidator {
    async addBrand(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().trim().required(),
                categories: Joi.string().trim().required(),
                logoImage: Joi.any().required(),
            });

            const isValid = await validate({ ...req.body, ...req.files }, res, schema)
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async editBrand(req:ReqInterface, res:ResInterface, next:NextFunction){
        try {
            const schema = Joi.object().keys({
                name: Joi.string().trim().required(),
                categories: Joi.string().trim().required(),
                logoImage: Joi.any().optional(),
            });

            const isValid = await validate({ ...req.body, ...req.files }, res, schema)
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

}

export default new BrandValidator();