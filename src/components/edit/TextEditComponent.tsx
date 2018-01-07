import * as React from "react";
import * as ReactDOM from 'react-dom';

interface TextEditProps
{
    text: string;
    readOnly?: boolean;
}

enum InputState
{
    Normal,
    Changed
}

interface TextEditState
{
    value: string;
    color: "red" | "white";
}

export class TextEditComponent extends React.Component<TextEditProps, TextEditState>
{
    constructor(props)
    {
        super(props);

        this.state = { value: this.props.text, color: "white" };
    }

    componentWillReceiveProps(newProps: TextEditProps)
    {
        this.setState({ value: newProps.text, color: "red" });
    }

    private Input_Change(event): void
    {
        if (this.props.readOnly) 
        {
            return;
        }

        this.setState({ value: event.target.value });

        if (this.props.text !== event.target.value)
        {
            this.setState({ color: "red" });
        }
        else
        {
            this.setState({ color: "white" });
        }
    }

    render()
    {
        return (
            <div>
                <input
                    style={ { background: this.state.color } }
                    value={ this.state.value }
                    onChange={ (event) => this.Input_Change(event) } />
            </div>
        );
    }
}