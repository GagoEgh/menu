import { HttpClient, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { IHttpResponse } from '../models/IHttpResponse';
import { ILoginResponse } from '../models/ILoginResponse';
import { IUser } from '../models/IUser';
import { LoginDTO } from '../models/LoginDTO';
import { IS_AUTH_NEEDED } from './main.interceptor'


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!: IUser

  
  
  constructor(
    private _http: HttpClient
  ) { }


  loginUser(data: LoginDTO) {
    return this._http.post<IHttpResponse<ILoginResponse>>(`/auth/login`, data, {
      context: new HttpContext().set(IS_AUTH_NEEDED, false)
    })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.error.error.message
        })
      )
  }

  getUser(): Observable<IHttpResponse<IUser>> {
    return this._http.get<IHttpResponse<IUser>>('/user/me')
      .pipe(map((res: IHttpResponse<IUser>) => {
        this.user = res.data
        return res
      }))
  }

}
