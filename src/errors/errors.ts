import {Error} from "../protocols/types"


export function conflictError(entity: string){
    const error: Error = {
        type:"conflict",
        message:`${entity} já existe!`
    };

    return error;      
}

export function notFound(entity: string){
    const error: Error = {
        type:"notFound",
        message:`${entity} não existe!`
    }

    return error;
}

export function UnprocessableEntity(){
    const error: Error = {
        type:"UnprocessableEntity",
        message:"não é possível processar!"

    } 

    return error;
}

export function badRequest(){
    const error: Error = {
        type: "badRequest",
        message: "essa solicitação não poderá ser atendida"

    }

    return error;
    
}
