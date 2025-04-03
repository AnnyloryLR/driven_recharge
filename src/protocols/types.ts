export type Error = {
    type : string,
    message: string
};

export type Phones = {
    phoneNumber:string,
    carrier: string,
    name: string,
    cpf: string,
    description:string[],
};