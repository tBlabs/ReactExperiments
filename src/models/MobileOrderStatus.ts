export enum MobileOrderStatus
{
    Initial = "Initial",
    OnTheWay = "OnTheWay",
    AwaitInWeightQueueEmpty = "AwaitInWeightQueueEmpty",
    AwaitInWeightQueue = "AwaitInWeightQueue",
    GoToLoading = "GoToLoading",
    GoToWeighing = "GoToWeighing",
    CorrectTheCargo = "CorrectTheCargo",
    WZReady = "WZReady",
    WZAccepted = "WZAccepted",
    GoingToClient = "GoingToClient",
    Delivered = "Delivered"
}
