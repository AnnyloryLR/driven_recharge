import { NextFunction, Request, Response } from "express";
import { Error } from "protocols/types";

export default function errorHandler(error:Error, req: Request, res: Response, next: NextFunction): Promise<void>{

    if(error.type === "conflict"){
        res.status(409).send(error.message)
        return
    }
    if(error.type === "conflict2"){
        res.status(409).send(error.message)
        return
    }
    if(error.type === "notFound"){
        res.status(404).send(error.message)
        return    
    }
    if(error.type === "UnprocessableEntity"){
        res.status(422).send(error.message)
        return
    }
    if(error.type === "badRequest"){
        res.status(400).send(error.message)
        return
    }

    res.status(500).send(error.message)
}




