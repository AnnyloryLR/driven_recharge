import { getSummary } from "../repositories/summary-repository";

export async function getClientSummary(cpf:string){
    const result = await getSummary(cpf);

    return result;
}