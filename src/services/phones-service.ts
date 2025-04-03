import { Phone } from "protocols/types";
import { getPhone, insertPhone } from "../repositories/phones-repository";

export async function createPhone(phone: Phone){
    const newPhone = await insertPhone(phone);
    
    return newPhone;
}

export async function getByCpf(document:string){
    const phone = await getPhone(document);

   return phone;
}