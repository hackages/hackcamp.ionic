export interface IContact{
    username: string;
    phoneNumber: string;
}

export interface ICall {
    contact: IContact;
    missed?: Boolean;
}
