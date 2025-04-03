import joi from "joi";
import { Phones } from "protocols/types";

const phoneSchema = joi.object <Phones>({
    phoneNumber: joi.string().min(11).max(11).required(),
    carrier: joi.string().required(),
    name: joi.string().required(),
    cpf: joi.string().min(11).max(11).required(),
    description: joi.string().required()
});


export default phoneSchema;