import { Request, Response } from "express";
import { Phone } from "../protocols/types";
import { createPhone, getByCpf } from "../services/phones-service";
import httpStatus from 'http-status';


export async function createNewPhone( req: Request, res: Response){
    const phoneData = req.body as Phone;
    await createPhone(phoneData);

    res.sendStatus(httpStatus.CREATED)
}

export async function getPhoneByCpf( req: Request, res: Response){
    const {document} = req.params;
    
    const result = await getByCpf(document);

    res.status(200).send(result);
}