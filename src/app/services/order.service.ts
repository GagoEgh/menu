import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IWaiter } from '../models/IWaiter';
import { OrdersClass } from '../orders';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IHttpResponse } from '../models/IHttpResponse';
import { ILoginResponse } from '../models/ILoginResponse';
import { LoginDTO } from '../models/LoginDTO';
import { IProjectResponse } from '../models/IProjectResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl=environment.apiUrl
  constructor(
    private _http:HttpClient
  ) { }

  // jnjel
  getOreder(id: number):Observable<IWaiter>{
   
    return  of(OrdersClass.Orders.find((order: IWaiter) => order.code === id)!)
  }

  loginUser(data: LoginDTO) {
    return this._http.post<IHttpResponse<ILoginResponse>>( `https://api.dev.padcllc.com/auth/login`, data)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.error.error.message
        })
      )
  }



// ????????????????
  getTraining(){
    const obj = {
      name:"Angular Training",
      description:"Nice Angular Training",
      date:new Date(),
      image:"",
      type:"free"
    }

   // return this._http.post(`${this.apiUrl}/trainings`,obj)
    return this._http.get(`${this.apiUrl}/trainings/3`)
    
  }

  // ???????????????????
  // Not Found
  postVacancies(){
    return this._http.post(`${this.apiUrl}/vacancies`,
    {
      shortDescription:"test",
      description:"test"
    })
  }

  getVacancies(){
    return this._http.get(`${this.apiUrl}/vacancies`)
  }

  getProjects():Observable<IHttpResponse<IProjectResponse[]>>{
    return this._http.get<IHttpResponse<IProjectResponse[]>>(`${this.apiUrl}/projects/all`)
  }

  getProject(id:number):Observable<IHttpResponse<IProjectResponse>>{
    return this._http.get<IHttpResponse<IProjectResponse>>(`${this.apiUrl}/projects/${id}`)
  }
}
