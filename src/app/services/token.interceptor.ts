import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const IS_AUTH_NEEDED = new HttpContextToken(() => true);
export const IS_CONTENT_TYPE = new HttpContextToken(()=>false)

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  apiUrl = environment.apiUrl;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers;

   // req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    if(request.context.get(IS_CONTENT_TYPE)===true){
      headers=headers.set('Content-Type', 'multipart/form-data')
    }
   
   if (request.context.get(IS_AUTH_NEEDED) === true) {
      headers = headers.set('Authorization', `Bearer ${localStorage.getItem("accessToken")}`)
    }

    const newReq = request.clone({
      url: `${this.apiUrl}${request.url}`,
      headers: headers
    })

    return next.handle(newReq)
      .pipe(
        catchError((err) => {
          throw err.error.error.message
        })
      )

  }
}
