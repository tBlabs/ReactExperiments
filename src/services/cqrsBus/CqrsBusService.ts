import { Http } from '../http/Http';
import { injectable } from 'inversify';
import 'reflect-metadata';
import axios, { AxiosResponse } from 'axios';
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
            // const preflightHeaders =
            // { 'Access-Control-Request-Method': 'DELETE',
            //     'Access-Control-Request-Headers': 'origin, x-requested-with',
            //     'Origin': 'http://gravel-server.herokuapp.com' }

            // await this._http.Option();

            const headers =
                {
                    'Content-Type': 'application/json',
                    'Authorization': this._localStorage.GetAuthToken()
                };

            const messagePackage = { [message.constructor.name]: { ...message } };

            // return await this._http.Post('http://localhost:3000/api/cqrsbus', messagePackage, headers);
            console.log('message: '+ JSON.stringify(messagePackage));
            const response: AxiosResponse = await this._http.Post('http://gravel-server.herokuapp.com/api/cqrsbus', messagePackage, headers);
            console.log('Cqrs result: ', response.data);
            return response.data;
            // return "tooooooooooken";b
        }
        catch (ex)
        {
            console.log('CqrsBus.Send ex:', ex.response);
            this._snackBar.Info(ex.response.data.message);
            throw ex;
        }
    }
}