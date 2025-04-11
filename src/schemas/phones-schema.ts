import joi from 'joi';
import { Phone } from "../protocols/types";

export const phoneSchema = joi.object<Phone>({
    phone_number: joi.string().length(11).required(),
    carrier: joi.string().required(),
    name: joi.string().required(),
    cpf: joi.string().length(11).required(),
    description: joi.string().required()
});

