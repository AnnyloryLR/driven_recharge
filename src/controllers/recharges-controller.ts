import {Request, Response} from 'express';
import { Recharge, RechargeData } from 'protocols/types';
import { createRecharge } from 'services/recharges-service';
import httpStatus from 'http-status';


export async function newRecharge(req: Request, res:Response){
    const {recharge, phone} = req.body as RechargeData;

    await createRecharge(recharge, phone);

    res.sendStatus(httpStatus.CREATED)
}