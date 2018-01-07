import { MobileOrderStatus } from './../models/MobileOrderStatus';
import { GetActiveOrderQuery } from '../messages/orders/GetActiveOrderQuery';
import { Credentials } from './../models/Credentials';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { GetOrdersQuery } from '../messages/orders/GetOrdersQuery';
import { AuthToken } from '../models/AuthToken';
import { MobileLoginQuery } from '../messages/auth/LoginQuery';
import { Order } from '../models/Order';
import { AxiosResponse, AxiosError } from 'axios';

@injectable()
export class HttpMock
{
    public async Post(url, messagePackage, headers): Promise<AxiosResponse>
    {
        const axiosResponse: AxiosResponse = {} as AxiosResponse;
        axiosResponse.status = 200;

        const axiosError: AxiosError = {} as AxiosError;



        if (url === 'http://gravel-server.herokuapp.com/api/cqrsbus')
        {
            const messageName = Object.keys(messagePackage)[0];
            const messageBody = messagePackage[messageName];

            switch (messageName)
            {
                case MobileLoginQuery.name:
                    const credentials = messageBody as Credentials;
                    if ((credentials.name === 'Janusz Testowy') && (credentials.password === 'janusz'))
                    {
                        axiosResponse.data = new AuthToken("fake_jwt_token");
                        return axiosResponse;
                    }
                    else
                    {
                        axiosResponse.status = 401;
                        axiosResponse.data = { code: 0, message: 'wrong credentials' };
                        axiosError.response = axiosResponse;
                        throw axiosError;
                    }

                case GetOrdersQuery.name:
                    axiosResponse.data = this.ORDERS;
                    return axiosResponse;

                case GetActiveOrderQuery.name:
                    axiosResponse.data = this.ORDERS[0];
                    return axiosResponse;
            }

        }
    }


    private ORDERS: Order[] = [
        {
            id: "0001",
            status: MobileOrderStatus.OnTheWay,
            from: "Warszawa",
            to: "Kętrzyn"
        },
        {
            id: "0002",
            status: MobileOrderStatus.Initial,
            from: "Częstochowa",
            to: "Radom"
        }
    ]
}