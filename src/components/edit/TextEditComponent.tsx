import * as React from "react";
import * as ReactDOM from 'react-dom';

export interface TextEditProps
{
    text: string;
    readOnly?: boolean;
}

export interface TextEditState
{
    value: string;
    inputState: InputState;
}

enum InputState
{
    Normal,
    Changed
}

export class TextEditComponent extends React.Component<TextEditProps, TextEditState>
{
    private INPUT_STYLES = {
        [InputState.Normal]: { background: "white" },
        [InputState.Changed]: { background: "red" }
    }

    constructor(props)
    {
        super(props);

        this.state = {
            value: this.props.text,
            inputState: InputState.Normal
        };
    }

    componentWillReceiveProps(newProps: TextEditProps)
    {
        this.setState({
            value: newProps.text,
            inputState: InputState.Changed
        });
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
            this.setState({ inputState: InputState.Changed });
        }
        else
        {
            this.setState({ inputState: InputState.Normal });
        }
    }

    render()
    {
        return (
            <div>
                <input
                    style={ this.INPUT_STYLES[this.state.inputState] }
                    value={ this.state.value }
                    onChange={ (event) => this.Input_Change(event) } />
            </div>
        );
    }
}