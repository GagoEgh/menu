import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWaiter } from '../models/IWaiter';
import { OrdersClass } from '../orders'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOreder(id: number):Observable<IWaiter>{
   
    return  of(OrdersClass.Orders.find((order: IWaiter) => order.code === id)!)
  }
}
