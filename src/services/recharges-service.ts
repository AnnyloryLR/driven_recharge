import { RechargeData } from "protocols/types";
import { getRecharges, rechargePhone } from "../repositories/recharges-repository";

export async function createRecharge(rechargeData: RechargeData){
    const newRecharge = await rechargePhone(rechargeData);

    return newRecharge;
} 

export async function getPhoneRecharges(number:string){
    const recharges = await getRecharges(number);

    const rechargesList = recharges.map(e => e.recharge)

    return rechargesList;
}