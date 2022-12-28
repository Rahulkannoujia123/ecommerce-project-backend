
import { NextFunction } from 'express';
import * as Joi from 'joi';
import { validate } from '../../helpers/ValidateHelper';
import { ReqInterface, ResInterface } from '../../interfaces/ReqInterface';

class SubcategoryValidator{
    async add(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().required(),
                price:Joi.number().required(),
                subscriptionType: Joi.number().valid(1,2),
              }).when(Joi.object({type: Joi.number().valid(1)}).unknown(), {
                then: Joi.object({
                  group: Joi.string().optional(),
                })
              })
              .when(Joi.object({type: Joi.number().valid(2)}).unknown(), {
                then: Joi.object({
                subgroup:Joi.string().required(),
                memberLimit:Joi.number().required(),
                subgroupLimit:Joi.string().required(),
                description:Joi.string().required(),
                timePeriod:Joi.string().required(),
            
            })
        })
        
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
                name: Joi.string().required(),
               
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