import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';
import { Phone } from 'protocols/types';

export function schemaValidate(schema: ObjectSchema){
    return (req: Request, res: Response, next:NextFunction):Promise<void> => {
        const body = req.body as Phone;
        const validation = schema.validate(body);

        if(validation.error){
             res.status(httpStatus.UNPROCESSABLE_ENTITY)
            .send(validation.error.details.map(detail => detail.message));
            return 
        }

        next();
    };
}