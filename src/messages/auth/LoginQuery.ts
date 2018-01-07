import { Credentials } from './../../models/Credentials';

export class MobileLoginQuery
{
    public name: string;
    public password: string;
    public plateNumber: string;
    
    constructor(credentials: Credentials)
    {
        this.name = credentials.name;
        this.password = credentials.password;
        this.plateNumber = credentials.plates;
    }
}
