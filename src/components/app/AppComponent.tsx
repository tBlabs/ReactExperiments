import { SnackData } from '../../services/snackbar/ISnackData';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Snackbar, IconButton } from "material-ui";
import { LazyInject } from "IoC/IoC";
import { TYPES } from "IoC/TYPES";
import { ISnackBarServiceEngine } from "services/snackbar/ISnackBarServiceEngine";
import CloseIcon from 'material-ui-icons/Close';

interface AppComponentState extends SnackData
{

}

export default class AppComponent extends React.Component<{}, AppComponentState>
{
    @LazyInject(TYPES.ISnackBarServiceEngine)
    private _snack: ISnackBarServiceEngine;

    constructor(props)
    {
        super(props);

        this.state = {
            snackVisability: false,
            snackMessage: "(initial)"
        }
    }

    componentWillMount()
    {
        console.log('App will mount');
        this._snack.data.subscribe((snackData: SnackData) =>
        {
            console.log('snack change:', snackData.snackVisability);
            this.setState({ snackVisability: snackData.snackVisability, snackMessage: snackData.snackMessage });
        });
    }

    render()
    {
        const $snackMessage: React.ReactElement<any> =
            (
                <span>{ this.state.snackMessage }</span>
            );

        const $snackCloseButton: React.ReactElement<any> =
            (
                <IconButton key="close" aria-label="Close" color="inherit"
                    onClick={ () => this.setState({ snackVisability: false }) }>
                    <CloseIcon />
                </IconButton>
            );

        console.log('App render');
        return (
            <div>
                { this.props.children }

                <Snackbar
                    open={ this.state.snackVisability }
                    message={ $snackMessage }
                    autoHideDuration={ 2500 }
                    action={ $snackCloseButton }
                    onRequestClose={
                        (reason: "timeout" | "clickaway") =>
                        {
                            this.setState({ snackVisability: false });
                        }
                    }
                />
            </div>
        );
    }
}