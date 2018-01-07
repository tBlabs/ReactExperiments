import { MobileOrderStatus } from './MobileOrderStatus';

export class Order
{
    public id: string;
    public status: MobileOrderStatus;
    public from: string;
    public to: string;
}