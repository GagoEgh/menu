import { IClient } from "./IClient";
import { IWaiter } from "./IWaiter";

export interface IOrders{
    
    waiter:IWaiter[],
    client:IClient
}