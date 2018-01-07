import { TextEditComponent } from '../edit/TextEditComponent';
import { InitComponent } from '../init/InitComponent';
import { OrdersListComponent } from '../ordersList/OrdersListComponent';
import { NotFoundComponent } from '../notFound/NotFoundComponent';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LazyInject } from "IoC/IoC";
import { Credentials } from '../../models/Credentials';
// import { NotFoundComponent } from '../notFound/NotFoundComponent';
// import { Router, Windows } from 'services/router/Router';
import { AuthComponent } from 'components/auth/AuthComponent';
import { AuthService } from 'services/auth/AuthService';
import { SnackBarService } from 'services/snackbar/SnackBarService';
import { Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';

interface IMainState
{
    text: string;
}

export class Main extends React.Component<{}, IMainState>
{
    // @LazyInject(Router)
    // private _router: Router;



    constructor(props)
    {
        // document.title = "Main";

        super(props);

        this.state = { text: 'init' };
    }

    // componentDidMount()
    // {
    //     this.setState({ redirect: '' });
    // }


    // private async Login(credentials: Credentials): Promise<void>
    // {
    //     console.log('Login(', credentials);
    //     try
    //     {
    //         await this._auth.Login(credentials);

    //         this.Redirect('/orders');
    //         // window.history.pushState({}, 'orders', '/orders');
    //     }
    //     catch (ex)
    //     {
    //         console.log('login ex:', ex);
    //     }
    // }

    // private Redirect(to: string)
    // {
    //     document.title = to;
    //     this.setState({ redirect: to });
    // }

    render(): React.ReactElement<{}>
    {
        console.log('Main render');

        return (
            <div>
                <button onClick={ ()=>this.setState({text:"aaa"})}>text=aaa</button>
                <button onClick={ ()=>this.setState({text:"bbb"})}>text=bbb</button>
                <TextEditComponent text={this.state.text} />
                <TextEditComponent text={this.state.text} readOnly />

                <Switch>
                    <Route path='/a' render={ ({ history }) => (
                        <button
                            type='button'
                            onClick={ () => { history.push('/orders') } }
                        >
                            Click Me!
                    </button>
                    ) } />
                    <Route exact path='/' component={ (props) => <InitComponent history={ props.history } /> } />
                    <Route exact path='/login' render={ (props) => <AuthComponent history={ props.history } /> } />
                    <Route exact path='/orders' render={ (props) => <OrdersListComponent history={ props.history } /> } />
                    <Route exact path='/flow' render={ () => <p>flow</p> } />
                    <Redirect to='/' />
                </Switch>

                <Link to="/">Init</Link>
                <Link to="/login">Login</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/flow">Flow</Link>

                <hr />
            </div>
        );

        // if (this.state.redirect)
        // {
        //     console.log('red:', this.state.redirect, ', path:', location.pathname);

        //     // this.setState({ redirect: ""});
        //     if (this.state.redirect !== location.pathname)
        //     {
        //         document.title = this.state.redirect;
        //         return <Redirect to={ this.state.redirect } push={ true } />;
        //     }
        // }

        // return (
        //     <div>
        //         <Switch>
        //             <Route exact path='/' render={ () => (<p>home</p>) } />
        //             <Route path='/login' render={ (history) =>
        //                 <AuthComponent onLoginClick={ (c) => this.Login(c) } />
        //             } />
        //             <Route path='/orders' render={ () => (<p>Current orders list</p>) } />
        //             <Route render={ () => (<p>404</p>) } />
        //         </Switch>
        //         <Link to="/aaa">aaa</Link>
        //         <Link to="/login">login</Link>
        //         <Link to="/xxx">xxx</Link>
        //     </div>
        // );

    }
}


// try
// {
//     currentState = GetPendingOrderState()
//     if (currentState === "none") 
//         window = SelecTorder
// }
// catch (ex)
// {
//     switch (ex.code)WindowSelectorWindowSelector
//     {
//         case "NotAuthorized":
//         case "NoOrderSelected":
//     }
// }

// switch (window)
// {
//     case Login: <Loign onSuccess={ GoTo(SelectOrder)} />
//     case SelectOrder: <SelectOrder ord
// }