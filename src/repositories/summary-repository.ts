import { Phones } from 'protocols/types';
import db from '../config/database';

export async function getSummary(cpf:string){
    const result1 = await db.query<Phones>(`
        SELECT * FROM phones WHERE cpf= $1;`,[cpf]);
    
    const carrier_name = result1.rows[0].carrier; 
    
    const result2 = await db.query<Phones>(`
        SELECT * FROM carriers WHERE name= $1;`,[carrier_name]);
    
    const id = result1.rows[0].id;
    
    const result3 = await db.query<Phones>(`
        SELECT * FROM recharges WHERE phone_id= $1;`,[id]);
        
    const result = {
        document:result1.rows[0].cpf,
        phones: result1.rows,
        carrier:result2.rows[0],
        recharges:result3.rows
        };

    return result
}