import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './components/app/AppComponent';
import * as io from 'socket.io-client';
import { WindowSelector } from 'components/windowSelector/WindowSelector';

console.log(`Start in ${ process.env.NODE_ENV === 'production' ? 'production' : 'development' } mode`);

// const socket = io('http://localhost:3000');
// socket.on('connected', () =>
// {
//     console.log('socket connected');
// });

ReactDOM.render(
    <AppComponent>
        <WindowSelector />
    </AppComponent>,
    document.getElementById('root')
);