import { IHttp } from './IHttp';
import { injectable } from 'inversify';
import { AxiosResponse } from 'axios';
import axios from 'axios';

@injectable()
export class Http
{
    public async Post(url: string, data: any, headers: any): Promise<AxiosResponse>
    {
        console.log('POST ', url, data, headers);

        try
        {
            const response: AxiosResponse = await axios.post(url, data, { headers: headers });

            return response;
        } 
        catch (ex)
        {
            throw new Error(ex.response);
        }
    }
}