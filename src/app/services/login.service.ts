import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHttpResponse } from '../models/IHttpResponse';
import { ILoginResponse } from '../models/ILoginResponse';
import { LoginDTO } from '../models/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.apiUrl;
  constructor(
    private _http: HttpClient
  ) { }


  loginUser(data: LoginDTO) {
    return this._http.post<IHttpResponse<ILoginResponse>>(`${this.apiUrl}/auth/login`, data)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.error.error.message
        })
      )
  }
}
