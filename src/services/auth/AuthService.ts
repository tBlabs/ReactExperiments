import { Credentials } from './../../models/Credentials';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { CqrsBus } from '../cqrsBus/CqrsBusService';
import { LocalStorage } from '../localStorage/LocalStoreService';

@injectable()
export class AuthService
{
    constructor(
        private _cqrsBus: CqrsBus,
        private _localStorage: LocalStorage)
    { }

    public async Login(credentials: Credentials): Promise<void>
    {
        const token: string = await this._cqrsBus.Send({ LoginQuery: { name: credentials.name, password: credentials.password, plates: credentials.plates } });
        console.log('token:', token);
        this._localStorage.StoreAuthToken(token);
    }
}
