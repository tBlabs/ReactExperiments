import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/main/Main';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './components/app/AppComponent';
import * as io from 'socket.io-client';

console.log(`Start in ${ process.env.NODE_ENV === 'production' ? 'production' : 'development' } mode`);

// const socket = io('http://localhost:3000');
// socket.on('connected', () =>
// {
//     console.log('socket connected');
// });

ReactDOM.render(
    <BrowserRouter>
        <AppComponent>
            <Main />
        </AppComponent>
    </BrowserRouter>,
    document.getElementById('root')
);