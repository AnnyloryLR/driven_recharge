import { Phone } from "protocols/types";
import { getPhone, insertPhone, phoneLimit, sameNumber } from "../repositories/phones-repository";
import { conflictError } from "../errors/errors";


export async function createPhone(phone: Phone){
    const {cpf} = phone;
    const {phoneNumber} = phone;

    const same = await sameNumber(phoneNumber);
    const limit = await phoneLimit(cpf);

    if(same.rowCount > 0){throw conflictError(phoneNumber)}; 

    if(limit.rowCount === 3){ throw conflictError(cpf)};
   
    const newPhone = await insertPhone(phone);   
    
    return newPhone;
}

export async function getByCpf(document:string){
    const phone = await getPhone(document);

   return phone;
}