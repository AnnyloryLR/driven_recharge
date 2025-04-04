import { rechargePhone } from "../repositories/recharges-repository";


export async function createRecharge(recharge:number, phone:string){
    const newRecharge = await rechargePhone(recharge, phone);

    return newRecharge;
} 