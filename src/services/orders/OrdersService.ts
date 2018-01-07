import { GetActiveOrderQuery } from '../../messages/orders/GetActiveOrderQuery';
import { guid } from '../../types/guid.type';
import { GetOrdersQuery } from './../../messages/orders/GetOrdersQuery';
import { injectable } from 'inversify';
import { Order } from '../../models/Order';
import { CqrsBus } from 'services/cqrsBus/CqrsBusService';

@injectable()
export class OrdersService
{
    constructor(private _cqrsBus: CqrsBus)
    { }

    public async Fetch(): Promise<Order[]>
    {
        console.log("Fetching orders...");

        return this._cqrsBus.Send(new GetOrdersQuery());
    }

    public async Active(): Promise<guid>
    {
        return this._cqrsBus.Send(new GetActiveOrderQuery());
    }
}