import { Request, Response } from 'express';
import { getClientSummary } from '../services/summary-service';

export async function getSummary(req: Request, res: Response){
    const {document} = req.params;
    const result = await getClientSummary(document);

    res.status(200).send(result);

}