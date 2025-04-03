import joi from "joi";
import { Phone } from "protocols/types";

const phoneSchema = joi.object<Phone>({
    phoneNumber: joi.string().length(11).required(),
    carrier: joi.string().required(),
    name: joi.string().required(),
    cpf: joi.string().length(11).required(),
    description: joi.string().required()
});


export default phoneSchema;