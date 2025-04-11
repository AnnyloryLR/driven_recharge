import db from "../config/database";
import { Phone, Phones } from "../protocols/types";

export async function phoneLimit(cpf:string){
    const limit = await db.query<Phones>(`
        SELECT phone_number FROM phones WHERE cpf = $1;`, [cpf]);

    return limit;
}

export async function sameNumber(phone_number:string){
    const result = await db.query<Phones>(`
        SELECT id FROM phones WHERE phone_number=$1;`,[phone_number]);

    return result;
}

export async function insertPhone( phone: Phone) {
    const { phone_number, carrier, name, cpf, description } = phone;

    const carrierId = await db.query(`
        SELECT id FROM carriers WHERE name = $1;`,[carrier]);
        
    const carrier_id = carrierId.rows[0].id;

    const result = await db.query<Phones>(
        `INSERT INTO phones (phone_number, carrier, name, cpf, description, carrier_id)
         VALUES ($1, $2, $3, $4, $5, $6)`, [phone_number, carrier, name, cpf,
             description, carrier_id]
    );

   return result;
}

export async function getPhone(document:string){
    const result = await db.query<Phones>(
        `SELECT phone_number FROM phones WHERE cpf=$1`,[document]);

  const phones = result.rows.map(e => e.phone_number);

  return phones
}

