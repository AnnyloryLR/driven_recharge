import joi from 'joi';
import { RechargeData } from "../protocols/types";


export const rechargeDataSchema = joi.object<RechargeData>({
    recharge:joi.number().min(10).max(1000).required(),
    phone:joi.string().length(11).required()
})