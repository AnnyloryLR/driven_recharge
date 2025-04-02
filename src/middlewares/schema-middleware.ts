import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';

export function schemaValidate(schema: ObjectSchema){
    return (req: Request, res: Response, next: NextFunction)=> {

        const validation = schema.validate(req.body, {abortEarly: false});
        if(validation.error){
            const messages = validation.error.details.map(detail => detail.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(messages)
        }

        next();
    };
}