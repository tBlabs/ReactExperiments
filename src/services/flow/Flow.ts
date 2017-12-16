export enum State  
{
    OnTheWay,
    InMiner,
    AwaitInWeightQueue,
    GoToLoading
}

export enum Action
{
    OnTheWay,
    InMiner,
    CargoCorrected,
    WZAccepted,
    GoingToClient,
    Delivered
}

export class UI
{
    textLabel: string;
    buttonLabel: string;
}

export class Flow
{
    public SetState(state: State): Action
    {
        switch (state)
        {
            case State.OnTheWay:
                return Action.OnTheWay;
        }
    }

    public MapStateToUI(state: State): UI
    {
        switch (state)
        {
            case State.OnTheWay:
                return { textLabel: 'Jesteś w drodze do kopalni.', 
                         buttonLabel: 'Jestem w kopalni' }; 
        }
    }
}

