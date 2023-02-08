import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
} from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const IS_AUTH_NEEDED = new HttpContextToken(() => true);


@Injectable()
export class MainInterceptor implements HttpInterceptor {
  apiUrl = environment.apiUrl;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers;

   
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
          console.log('interseptor',err.error.error.message)
          throw err.error.error.message
        })
      )

  }
}
