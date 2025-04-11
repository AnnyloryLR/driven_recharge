export type Error = {
    type : string,
    message: string
};
export type Phones = {
    id:number,
    phone_number:string,
    carrier: string,
    name: string,
    cpf: string,
    description:string,
};
export type Phone = Omit<Phones, "id">;

export type Id = {
    id:number
}

export type Recharge = {
    phone_id:number,
    recharge:number
}

export type RechargeData = {
    phone:string,
    recharge:number
}