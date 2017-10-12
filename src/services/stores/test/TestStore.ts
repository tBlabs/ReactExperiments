import { ITestStore } from './ITestStore';
import { injectable, inject } from "inversify";
import { observable, reaction } from 'mobx';
import { IHttp } from "services/http/IHttp";
import { TYPES } from "IoC/TYPES";

@injectable()
export class TestStore implements ITestStore
{
    @observable
    public text: string = "initial";

    private _http: IHttp;

    constructor(@inject(TYPES.IHttp) http: IHttp)
    {
        this._http = http;

        reaction(() => this.text, async (text) =>
        {
            console.log("reaction: " + text);

            let status = await this._http.Post('http://www.localhost:4444/test', { text });

            console.log("save status: ", status);
        });
    }
}
