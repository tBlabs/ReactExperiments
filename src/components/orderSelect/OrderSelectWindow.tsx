import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LazyInject } from "IoC/IoC";
import { OrdersService } from '../../services/orders/OrdersService';
import { Order } from 'models/Order';
import { OrderComponent } from 'components/order/OrderComponent';

interface OrderSelectWindowState
{
    orders: Order[];
}

export class OrderSelectWindow extends React.Component<{}, OrderSelectWindowState>
{
    @LazyInject(OrdersService)
    private _ordersService: OrdersService;

    constructor()
    {
        super();

        this.state = { orders: [] };
    }

    async componentDidMount()
    {
        const orders: Order[] = await this._ordersService.Fetch();

        this.setState({ orders });
    }

    render(): React.ReactElement<{}>
    {
        return (
            <div>
                {
                    this.state.orders.map((o: Order) =>
                    {
                        return <OrderComponent {...o} />
                    })
                }
            </div>
        );
    }
}
