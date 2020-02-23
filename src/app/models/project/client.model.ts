
export class ClientModel {
    id: number;
    fullName: string;
    country: string;
    address: string;
    email: string;
    phoneNumber: string;

    constructor(init?: Partial<ClientModel>) {
        Object.assign({}, init);
    }
}
