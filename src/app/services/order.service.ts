import { Injectable } from '@angular/core';
import { catchError,  Observable, of, } from 'rxjs';
import { IWaiter } from '../models/IWaiter';
import { OrdersClass } from '../orders';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(
    private _http: HttpClient
  ) { }


  getOreder(id: number): Observable<IWaiter> {
    return of(OrdersClass.Orders.find((order: IWaiter) => order.code === id)!)
  }

}
