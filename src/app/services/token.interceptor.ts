import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jsonToken = localStorage.getItem("accessToken");

    if (jsonToken) {

      const newReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${jsonToken}`)
      })
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}
