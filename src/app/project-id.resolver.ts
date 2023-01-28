import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { IHttpResponse } from './models/IHttpResponse';
import { IProjectResponse } from './models/IProjectResponse';
import { OrderService } from './services/order.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectIdResolver implements Resolve<boolean> {
  constructor(
    private _orderService: OrderService,
    private _router: Router
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    const id = route.paramMap.get('id');
    return this._orderService.getProject(+id!)
      .pipe(catchError(() => {
        this._router.navigate(['/nav', 'new-orders'])
        return EMPTY
      }))

  }
}
