import { OrderSelectWindow } from '../orderSelect/OrderSelectWindow';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LazyInject } from "IoC/IoC";
import { Credentials } from '../../models/Credentials';
import { Router, Windows } from '../../services/router/Router';
import { AuthComponent } from '../auth/AuthComponent';
import { AuthService } from 'services/auth/AuthService';

export class WindowSelector extends React.Component<{}, {}>
{
    @LazyInject(Router)
    private _router: Router;

    @LazyInject(AuthService)
    private _auth: AuthService;

    private async Login(credentials: Credentials)
    {
        console.log('cred', credentials);
        try
        {
            await this._auth.Login(credentials);
            this._router.GoTo(Windows.OrderSelect);
            this.forceUpdate();
        }
        catch (ex)
        {
            console.log('login ex:', ex);
        }
    }
    
    render(): React.ReactElement<{}>
    {
        this._router.GoTo(Windows.OrderSelect);
        switch (this._router.CurrentWindow)
        {
            case Windows.Auth:
                return <AuthComponent LoginButton_Click={ (credentials) => this.Login(credentials) } />;

            case Windows.OrderSelect:
                return <OrderSelectWindow />;
        }

        return <p>No window</p>;
    }
}
