import { Id, Recharge, RechargeData, Recharges } from "protocols/types";
import db from "../config/database";


export async function getPhoneId(phone:string){
    const result = await db.query<Id>(
        `SELECT id FROM phones WHERE phone_number = $1;`, [phone]
    );

    return result;
}

export async function rechargePhone(rechargeData:RechargeData){
    const {recharge, phone} = rechargeData;
    const phoneId = await getPhoneId(phone);

    const phone_id = phoneId.rows[0].id;

    const result = await db.query<Recharge>(
        `INSERT INTO recharges (phone_id, recharge)
         VALUES ($1,$2);`, [phone_id, recharge]
    );

    return result;
}

export async function getRecharges(number:string){
    const phoneId = await getPhoneId(number)

    const phone_id = phoneId.rows[0].id;

    const result =  await db.query<Recharges>(`
        SELECT recharge FROM recharges WHERE phone_id = $1;`, [phone_id]);

    return result.rows;
}