import { NextFunction, Request, Response } from "express";
import { Error } from "../protocols/types"

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction){
    console.log(error);

    if(error.type === "conflict"){
      return res.status(409).send(error.message)
    }
    if(error.type === "notFound"){
        return res.status(404).send(error.message)
    }
    if(error.type === "UnprocessableEntity"){
        return res.status(422).send(error.message)
    }
    if(error.type === "badRequest"){
        return res.status(400).send(error.message)
    }

    res.status(500).send(error.message)
}
