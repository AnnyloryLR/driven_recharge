import { Phone } from "protocols/types";
import { insertPhone } from "repositories/phones-repository";

export async function createPhone(phone: Phone){
    const newPhone = await insertPhone(phone);
    
    return newPhone;
}