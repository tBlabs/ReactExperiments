import { Order } from './../../models/Order';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class LocalStorage
{
    public StoreAuthToken(token: string): void
    {
        window.localStorage.setItem('authToken', token);
    }

    public GetAuthToken(): string
    {
        return window.localStorage.getItem('authToken');
    }

    public SaveOrders(orders: Order[]): void
    {

    }
}