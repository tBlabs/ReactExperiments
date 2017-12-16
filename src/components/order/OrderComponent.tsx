import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface OrderComponentProps
{
    id: string;
    from: string;
    to: string;
}

export class OrderComponent extends React.Component<OrderComponentProps, {}>
{

    render(): React.ReactElement<{}>
    {
        return (
            <div>
                {this.props.from} ---> {this.props.to}
            </div>
        );
    }
}