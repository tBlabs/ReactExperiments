import { injectable } from 'inversify';
import { Order } from '../../models/Order';

@injectable()
export class OrdersService
{
    public async Fetch(): Promise<Order[]>
    {
        console.log("Fetching orders...");
        
        const ORDERS: Order[] = [
            {
                id: "0001",
                from: "Warszawa",
                to: "Kętrzyn"
            }
        ]

        return ORDERS;
    }
}