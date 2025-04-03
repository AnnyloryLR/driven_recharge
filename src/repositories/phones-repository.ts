import { Phone, Phones } from "../protocols/types";
import db from "../config/database";

export async function insertPhone( phone: Phone) {
    const { phoneNumber, carrier, name, cpf, description } = phone;
    const result = await db.query<Phones>(
        `INSERT INTO phones (phone_number, carrier, name, cpf, description)
         VALUES ($1, $2, $3, $4, $5);`, [phoneNumber, carrier, name, cpf, description]
    )
    return result;
}

export async function getPhone(document:string){
    const result = await db.query(
        `SELECT * FROM phones WHERE cpf=$1`,[document]);

   return result.rows[0];
}
