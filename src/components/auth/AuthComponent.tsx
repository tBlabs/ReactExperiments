import { PushService } from '../../services/push/PushService';
import { SnackBarService } from '../../services/snackbar/SnackBarService';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LazyInject } from "IoC/IoC";
import { AuthService } from 'services/auth/AuthService';
import { Credentials } from 'models/Credentials';

interface AuthComponentProps
{
    history: any;
    // onLoginClick(credentials: Credentials): void;
}

export class AuthComponent extends React.Component<AuthComponentProps, {}>
{
    @LazyInject(AuthService)
    private _auth: AuthService;
    
    @LazyInject(PushService)
    private _push: PushService;

    // @LazyInject(SnackBarService)
    // private _snack: SnackBarService;

    // constructor(props)
    // {
    //     super(props);
    // }

    async OnLoginClick(credentials: Credentials)
    {
        try
        {
            await this._auth.Login(credentials);

            this._push.Connect();
            // console.log(this.props.history);
            this.props.history.push('/orders');
        }
        catch (ex)
        {
            console.log('login ex:', ex);
            // this._snack.Info('Login error:'+ex);
        }
    }

    private nameInput: any;
    private passwordInput: any;
    private platesInput: any;

    GetCredentials(): Credentials
    {
        const credentials: Credentials = new Credentials();
        credentials.name = this.nameInput.value;
        credentials.password = this.passwordInput.value;
        credentials.plates = this.platesInput.value;
        return credentials;
    }

    render(): React.ReactElement<{}>
    {
        console.log('Auth rerender');
        return (
            <div className="window login">
                <input id='name' defaultValue="Jaaanusz Testowy" ref={ (input) => this.nameInput = input } />
                <input id='pass' defaultValue="janusz" ref={ (input) => this.passwordInput = input } />
                <input id='plates' defaultValue="NKE12GX" ref={ (input) => this.platesInput = input } />
                <button onClick={ () => this.OnLoginClick(this.GetCredentials()) }>Login</button>
            </div>
        );
    }
}
