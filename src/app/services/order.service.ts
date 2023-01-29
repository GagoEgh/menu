import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of, switchMap } from 'rxjs';
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

  apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) { }

  // jnjel
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



  // ????????????????
  getTraining() {
    const obj = {
      name: "Angular Training",
      description: "Nice Angular Training",
      date: new Date(),
      image: "",
      type: "free"
    }

    return this._http.post(` https://api.dev.padcllc.com/trainings`, obj)
    // return this._http.get(`${this.apiUrl}/trainings/33`)

  }

  // ???????????????????
  // Not Found
  postVacancies() {
    return this._http.post(`${this.apiUrl}/vacancies`,
      {
        shortDescription: "test",
        description: "test"
      })
  }

  getVacancies() {
    return this._http.get(`${this.apiUrl}/vacancies`)
  }

  // projects

  postProjects(): Observable<IHttpResponse<IProjectResponse[]>> {
    return this._http.post<IHttpResponse<IProjectResponse[]>>(`${this.apiUrl}/projects/`, {
      "title": "test",
      "description": "<b>strong_updated<b>strong_updated</b><b>strong_updated</b></b><b>strong_updated</b>v "
    })

  }
  getProjectsAll(): Observable<IHttpResponse<IProjectResponse[]>> {
    return this._http.get<IHttpResponse<IProjectResponse[]>>(`${this.apiUrl}/projects/all`)



  }

  getProjectById(id: number): Observable<IHttpResponse<IProjectResponse>> {
    return this._http.get<IHttpResponse<IProjectResponse>>(`${this.apiUrl}/projects/${id}`)
  }

  putProject(id: number, project: IProjectResponse) {
    return this._http.put<IHttpResponse<IProjectResponse>>(`${this.apiUrl}/projects/${id}`, project)

  }

  deleteProject(id: number) {
    return this._http.delete(`${this.apiUrl}/projects/${id}`)
      .pipe(switchMap(() => {
        return this.getProjectsAll()
      }))

  }

}
