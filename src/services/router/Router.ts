import { injectable } from "inversify";


export enum Windows
{
    Auth,
    OrderSelect,
    Flow
}

@injectable()
export class Router
{
    private currentWindow: Windows = Windows.Auth;

    public GoTo(window: Windows)
    {
        this.currentWindow = window;
    }

    get CurrentWindow(): Windows
    {
        return this.currentWindow;
    }
}
