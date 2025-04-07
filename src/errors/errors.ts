export function conflictError(entity:string){
    return{
        type:"conflict",
        message:`${entity} já está cadastrado!`
    }
}

export function notFound(entity:string){
    return{
        type:"notFound",
        message:`${entity} não existe!`
    }
}

export function UnprocessableEntity(){
    return{
        type:"UnprocessableEntity",
        message:"não é possível processar!"
    }
}

export function badRequest(){
    return{
        type: "badRequest",
        message: "esta operação não pode ser realizada sem a data de devolução!"
    }
}
