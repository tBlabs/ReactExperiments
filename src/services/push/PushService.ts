import * as io from 'socket.io-client';
import * as Rx from 'rxjs';

export class PushService
{
    private message$: Rx.Subject<any> = new Rx.Subject();

    constructor()
    {
    }
    
    public Connect()
    {
        const socket = io('http://localhost:3000/');
    
        socket.on('message', (msg) =>
        {
            this.message$.next(msg);
        });
    }

    public get Message(): Rx.Subject<any>
    {
        return this.message$;
    }

    public Symulate(msg)
    {
        this.message$.next(msg);
    }
}