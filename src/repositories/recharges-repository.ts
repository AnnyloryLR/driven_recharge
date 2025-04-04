import { Id, Recharge, RechargeData } from "protocols/types";
import db from "../config/database";


export async function getPhoneId(phone:string){
    const result = await db.query<Id>(
        `SELECT id FROM phones WHERE phone_number = $1;`, [phone]
    );

    return result.rows[0].id;
}

export async function rechargePhone(rechargeData:RechargeData){
    const {recharge, phone} = rechargeData;
    const phone_id = await getPhoneId(phone);

    const result = await db.query<Recharge>(
        `INSERT INTO recharges (phone_id, recharge)
         VALUES ($1,$2);`, [phone_id, recharge]
    );

    return result;
}