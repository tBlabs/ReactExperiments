import { Order } from '../../models/Order';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LazyInject } from "IoC/IoC";
import { OrdersService } from '../../services/orders/OrdersService';

interface IOrdersListProps
{
    history: any;
}

interface IOrdersListState
{
    orders: Order[];
}

export class OrdersListComponent extends React.Component<IOrdersListProps, IOrdersListState>
{
    @LazyInject(OrdersService)
    private _ordersService: OrdersService;

    constructor(props)
    {
        super(props);

        this.state = { orders: [] };
    }

    async componentDidMount()
    {
        const orders: Order[] = await this._ordersService.Fetch();

        this.setState({ orders });
    }

    OrderClicked(order: Order)
    {
        console.log('clicked', order);

        this.props.history.push('/flow');
    }

    render(): React.ReactElement<{}>
    {
        return (
            <div>
                {
                    this.state.orders.map((o: Order) =>
                    {
                        return (<p key={ o.id } onClick={ () => this.OrderClicked(o) }>
                            { o.from } - { o.to }
                        </p>);
                    })
                }
            </div>
        );
    }
}
