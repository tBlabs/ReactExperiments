import { Http } from '../http/Http';
import { injectable } from 'inversify';
import 'reflect-metadata';
import axios from 'axios';
import { LocalStorage } from '../localStorage/LocalStoreService';
import { SnackBarService } from 'services/snackbar/SnackBarService';

@injectable()
export class CqrsBus
{
    constructor(
        private _http: Http,
        private _localStorage: LocalStorage,
        private _snackBar: SnackBarService)
    { }

    public async Send(message: object): Promise<any>
    {
        try
        {
            // await axios('http://gravel-server.herokuapp.com', { method: 'OPTIONS' });

            const headers =
                {
                    'Content-Type': 'application/json',
                    'Authorize': this._localStorage.GetAuthToken()
                };

            // return await this._http.Post('http://gravel-server.herokuapp.com/api/cqrsbus', message, headers);
            return "tooooooooooken";
        }
        catch (ex)
        {
            console.log('cqrsBus.Send ex:', ex);
            this._snackBar.Info("CQRSBUS EX:" + ex.message);
        }
    }
}