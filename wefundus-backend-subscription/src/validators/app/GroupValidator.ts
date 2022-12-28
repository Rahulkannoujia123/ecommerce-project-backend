import { NextFunction } from "express";
import Joi = require("joi");
import { validate } from "../../helpers/ValidateHelper";
import { GoalInterval } from "../../interfaces/GroupInterface";
import { ReqInterface, ResInterface } from "../../interfaces/ReqInterface";

class GroupValidator {
    async createGroup(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().required(),
                description: Joi.string().required(),
                goalInterval: Joi.number().required().valid(GoalInterval.daily, GoalInterval.weekly, GoalInterval.yearly),
                goalPrice: Joi.number().required(),
                showContactInfo: Joi.boolean().optional(),
                phoneNumber: Joi.string().required(),
                email: Joi.string().trim().email().required(),
                address: Joi.string().required(),
                showSocialInfo: Joi.boolean().optional(),
                facebookUrl: Joi.string().optional(),
                twitterUrl: Joi.string().optional(),
                others: Joi.boolean().optional(),
                purpose: Joi.string().required(),
                groupIcon: Joi.any().optional(),
                city: Joi.string().trim().required(),
                state: Joi.string().trim().required(),
                zipCode: Joi.string().trim().optional(),
            })

            const isValid = await validate({ ...req.body, ...req.files }, res, schema);
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async editGroup(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().optional(),
                goalInterval: Joi.number().optional().valid(GoalInterval.daily, GoalInterval.weekly, GoalInterval.yearly),
                goalPrice: Joi.number().optional(),
                description: Joi.string().optional(),
                showContactInfo: Joi.boolean().optional(),
                showSocialInfo: Joi.boolean().optional(),
                phoneNumber: Joi.string().optional(),
                email: Joi.string().trim().email().optional(),
                address: Joi.string().optional(),
                facebookUrl: Joi.string().optional(),
                twitterUrl: Joi.string().optional(),
                city: Joi.string().optional(),
                state: Joi.string().optional(),
                zipCode: Joi.string().optional(),
                groupIcon: Joi.any().optional(),
            })

            const isValid = await validate({ ...req.body, ...req.files }, res, schema);
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }


    async addMember(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                userId: Joi.string().trim().required(),
                groupId: Joi.string().trim().required()
            });

            const isValid = await validate(req.body, res, schema);
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async groupRequestAction(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                isAccept: Joi.boolean().required(),
            });
            const isValid = await validate(req.body, res, schema);
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async removeMember(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                memberId: Joi.string().trim().required(),
            });
            const isValid = await validate(req.body, res, schema);
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async addToFavourite(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                groupId: Joi.string().trim().required()
            });
            const isValid = await validate(req.body, res, schema);
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }

    async join(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                groupId: Joi.string().trim().required()
            });
            const isValid = await validate(req.body, res, schema);
            if (isValid) {
                next();
            }
        } catch (error) {
            next(error);
        }
    }
    async inviteMember(req: ReqInterface, res: ResInterface, next: NextFunction) {
        try {
            const schema = Joi.object().keys({
                groupId: Joi.string().trim().required(),
                emails: Joi.array().items(Joi.string().trim().required()),
                content: Joi.string().trim().required()
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

export default new GroupValidator();