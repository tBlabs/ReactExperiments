import { injectable } from 'inversify';
import { observable, action } from 'mobx';
import { ISnackBarService } from './ISnackBarService';
import { ISnackBarServiceEngine } from './ISnackBarServiceEngine';

@injectable()
export class SnackBarService implements ISnackBarService, ISnackBarServiceEngine
{
    public isVisible: boolean = false;
    public message: string = "";

    public Info(message: string): void
    {
        this.isVisible = true;
        this.message = message;
    }

    public Hide(): void
    {
        this.isVisible = false;
    }
}