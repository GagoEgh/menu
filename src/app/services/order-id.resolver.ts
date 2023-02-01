import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { OrderService } from './order.service';
import { IWaiter } from '../models/IWaiter';

@Injectable({
  providedIn: 'root'
})
export class OrderIdResolver implements Resolve<IWaiter> {

  constructor(
    private _orderService: OrderService,
    private _router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IWaiter> {
    const activeId = route.paramMap.get('id');
    return this._orderService.getOreder(+activeId!)
      .pipe(catchError(() => {
        this._router.navigate(['/nav','new-orders'])
        return EMPTY
      }))

  }
}
