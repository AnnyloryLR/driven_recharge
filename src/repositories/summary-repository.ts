import db from '../config/database';

export async function getSummary(cpf:string){
    const result = await db.query(`
        SELECT * FROM phones WHERE cpf= $1`,[cpf]);

    console.log(result.rows);
}