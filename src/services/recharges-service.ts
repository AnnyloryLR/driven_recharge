import { RechargeData } from "protocols/types";
import { getPhoneId, getRecharges, rechargePhone } from "../repositories/recharges-repository";
import { notFound } from "../errors/errors";

export async function createRecharge(rechargeData: RechargeData){
    const { phone } = rechargeData;
    
    const exist = await getPhoneId(phone);

    if(exist.rowCount === 0){throw notFound(phone)}
    const newRecharge = await rechargePhone(rechargeData);

    return newRecharge;
} 

export async function getPhoneRecharges(number:string){
    const recharges = await getRecharges(number);

    const rechargesList = recharges.map(e => e.recharge)

    return rechargesList;
}