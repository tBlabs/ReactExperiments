import { MobileOrderStatus } from '../../models/MobileOrderStatus';
import { Order } from '../../models/Order';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OrdersService } from '../../services/orders/OrdersService';
import * as io from 'socket.io-client';

interface IFlowProps
{
    history: any;
}

interface IFlowState
{
    info: string;
    button: string;
}

interface IScreen
{
    info: string;
    button: string;
}

export class FlowComponent extends React.Component<IFlowProps, IFlowState>
{
    // private _pushService: PushService;

    private screens: { [state: string]: IScreen } = // [MobileOrderStatus]
        {
            [MobileOrderStatus.OnTheWay]:
                {
                    info: 'Jesteś w drodze. Wciśnij guzik kiedy dojedziesz do kopalni',
                    button: 'Jestem w kopalni'
                },
            [MobileOrderStatus.AwaitInWeightQueueEmpty]:
                {
                    info: 'Ustaw się w kolejce do ważenia na pusto',
                    button: ''
                },
            [MobileOrderStatus.GoToLoading]:
                {
                    info: 'Ustaw się w kolejce do załadunku',
                    button: ''
                },
        }

    async componentDidMount()
    {
        console.log('FLow mounted');

        // this._pushService.Message.subscribe((msg) =>
        // {
        //     this.setState({
        //         info: this.screens[msg.orderStatus].info,
        //         button: this.screens[msg.orderStatus].button
        //     });
        // });
        // const socket = io();

        // socket.on('hello', () =>
        // {
        //     console.log('connected');
        // });

        // socket.on('message', msg =>
        // {
        //     this.setState({
        //         info: this.screens[msg.orderStatus].info,
        //         button: this.screens[msg.orderStatus].button
        //     });
        // });
    }

    render(): React.ReactElement<{}>
    {
        return (
            <div>
                <div>{ this.state.info }</div>
                <div>{ this.state.button }</div>
            </div>
        );
    }
}
