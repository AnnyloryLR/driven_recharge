import { RechargeData } from "protocols/types";
import { rechargePhone } from "../repositories/recharges-repository";

export async function createRecharge(rechargeData: RechargeData){
    const newRecharge = await rechargePhone(rechargeData);

    return newRecharge;
} 