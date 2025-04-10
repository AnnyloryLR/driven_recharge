export function conflictError(entity:string){
    return{
        type:"conflict",
        message:`${entity} já existe!`
    }
}

export function conflictError2(){
    return{
        type:"conflict2",
        message:`são permitidos no máximo 3 telefones por CPF!`
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
        message:"não é possível processar essa tipo de dado!"
    }
}

export function badRequest(){
    return{
        type: "badRequest",
        message: "esta operação não pode ser realizada!"
    }
}
