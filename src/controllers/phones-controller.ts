import { Request, Response } from "express";
import { Phone } from "../protocols/types";
import { createPhone } from "../services/phones-service";
import httpStatus from 'http-status';


export async function createNewPhone( req: Request, res: Response){
    const phoneData = req.body as Phone;
    await createPhone(phoneData);

    res.sendStatus(httpStatus.CREATED)
}