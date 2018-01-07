import { SnackData } from './ISnackData';
import * as Rx from 'rxjs';

export interface ISnackBarServiceEngine
{
    data: Rx.Subject<SnackData>;
}