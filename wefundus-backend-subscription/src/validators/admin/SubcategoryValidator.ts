import { NextFunction } from 'express';
import * as Joi from 'joi';
import { validate } from '../../helpers/ValidateHelper';
import { ReqInterface, ResInterface } from '../../interfaces/ReqInterface';

class SubcategoryValidator{
    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().required(),
                category:Joi.string().required(),
                image: Joi.string().required()
            });

            const isValid = await validate(req.body, res, schema);

            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async update(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
              //  _id: Joi.string().required(),
                name: Joi.string().required(),
                category:Joi.string().required(),
                image: Joi.string().required()
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

export default new SubcategoryValidator();