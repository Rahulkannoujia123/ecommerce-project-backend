import { NextFunction } from 'express';
import * as Joi from 'joi';
import { any } from 'joi';
import { validate } from '../../helpers/ValidateHelper';
import { ReqInterface, ResInterface } from '../../interfaces/ReqInterface';

class BannerValidator {
    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                photo: any,
                clickUrl: Joi.string().required(),
                deviceType: Joi.string().required()
            });
            const isValid = await validate(req.body, res, schema)
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

}

export default new BannerValidator();