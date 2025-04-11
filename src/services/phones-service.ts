import { Phone } from "protocols/types";
import { getPhone, insertPhone, phoneLimit, sameNumber } from "../repositories/phones-repository";
import { conflictError, conflictError2 } from "../errors/errors";


export async function createPhone(phone: Phone){
    const {cpf} = phone;
    const {phone_number} = phone;

    const same = await sameNumber(phone_number);
    const limit = await phoneLimit(cpf);

    if(same.rowCount > 0){throw conflictError(phone_number)}; 

    if(limit.rowCount >= 3){ throw conflictError2()};
   
    const newPhone = await insertPhone(phone);   
    
    return newPhone;
}

export async function getByCpf(document:string){
    const phone = await getPhone(document);

   return phone;
}