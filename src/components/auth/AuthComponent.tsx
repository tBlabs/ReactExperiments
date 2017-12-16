import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LazyInject } from "IoC/IoC";
import { AuthService } from '../../services/auth/AuthService';
import { Credentials } from 'models/Credentials';

interface AuthComponentProps
{
    LoginButton_Click(name): void;
}

export class AuthComponent extends React.Component<AuthComponentProps, {}>
{
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
        return (
            <div>
                <input value="Janusz" ref={ (input) => this.nameInput = input } />
                <input value="janusz" ref={ (input) => this.passwordInput = input } />
                <input value="NKE12GX" ref={ (input) => this.platesInput = input } />
                <button onClick={ () => this.props.LoginButton_Click(this.GetCredentials()) }>Login</button>
            </div>
        );
    }
}