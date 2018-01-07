import { MobileOrderStatus } from '../../models/MobileOrderStatus';
import { Order } from '../../models/Order';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LazyInject } from "IoC/IoC";
import { OrdersService } from '../../services/orders/OrdersService';
import { LocalStorage } from 'services/localStorage/LocalStoreService';

interface IInitProps
{
    history: any;
}

export class InitComponent extends React.Component<IInitProps, {}>
{
    @LazyInject(OrdersService)
    private _orders: OrdersService;

    @LazyInject(LocalStorage)
    private _storage: LocalStorage;

    constructor(props)
    {
        super(props);
    }
    
    async componentDidMount()
    {
        try
        {
            const orders: Order[] = await this._orders.Fetch();
            this._storage.SaveOrders(orders);

            // Is any active?
            if (orders.some((i: Order) => i.status !== MobileOrderStatus.Initial))
            {
                this.props.history.push('/flow');
            }
            else
            {
                this.props.history.push('/orders');
            }
        }
        catch (ex)
        {
            switch (ex.code)
            {
                case "Unauthorized": this.props.history.push('/login');
                    break;
            }
        }
    }

    render(): React.ReactElement<{}>
    {
        return (
            <div>
                Obtaining current state...
            </div>
        );
    }
}
