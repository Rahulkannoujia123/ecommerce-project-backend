import { NextFunction } from "express";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";
import * as Joi from 'joi'
import { validate } from "../../helpers/ValidateHelper";

class SectionValidator {
    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                category: Joi.string().required(),
                subcategory: Joi.string().required(),
                name: Joi.string().required()
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

export default new SectionValidator();