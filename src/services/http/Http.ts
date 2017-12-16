import { IHttp } from './IHttp';
import { injectable } from 'inversify';
import { AxiosResponse } from 'axios';
import axios from 'axios';

@injectable()
export class Http
{
    public async Post(url: string, data: any, headers: any): Promise<any>
    {
        const response: AxiosResponse = await axios.post(url, data, { headers: headers});

        return response.data;
    }
}