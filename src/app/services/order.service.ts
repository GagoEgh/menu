import { Injectable } from '@angular/core';
import { catchError,  Observable, of, } from 'rxjs';
import { IWaiter } from '../models/IWaiter';
import { OrdersClass } from '../orders';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IHttpResponse } from '../models/IHttpResponse';
import { ILoginResponse } from '../models/ILoginResponse';
import { LoginDTO } from '../models/LoginDTO';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) { }


  getOreder(id: number): Observable<IWaiter> {
    return of(OrdersClass.Orders.find((order: IWaiter) => order.code === id)!)
  }

  loginUser(data: LoginDTO) {
    return this._http.post<IHttpResponse<ILoginResponse>>(`https://api.dev.padcllc.com/auth/login`, data)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.error.error.message
        })
      )
  }

}
