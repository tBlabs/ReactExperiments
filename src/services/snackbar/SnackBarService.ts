import { SnackData } from './ISnackData';
import { injectable } from 'inversify';
import { observable, action } from 'mobx';
import { ISnackBarService } from './ISnackBarService';
import { ISnackBarServiceEngine } from './ISnackBarServiceEngine';
import * as Rx from 'rxjs';

@injectable()
export class SnackBarService implements ISnackBarService, ISnackBarServiceEngine
{
    public data: Rx.Subject<SnackData> = new Rx.Subject();

    public Info(message: string): void
    {
        console.log('Snack!');

        const snackData: SnackData = new SnackData();
        snackData.snackVisability = true;
        snackData.snackMessage = message;

        this.data.next(snackData);
    }
}