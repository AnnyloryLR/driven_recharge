import {Request, Response} from 'express';
import { RechargeData } from '../protocols/types';
import { createRecharge, getPhoneRecharges } from '../services/recharges-service';
import httpStatus from 'http-status';


export async function newRecharge(req: Request, res:Response){
    const rechargeData = req.body as RechargeData;

    await createRecharge(rechargeData);

    res.sendStatus(httpStatus.CREATED)
}

export async function getRecharges(req: Request, res:Response){
    const {number} = req.params;

    const result = await getPhoneRecharges(number);

    res.send(result);
}