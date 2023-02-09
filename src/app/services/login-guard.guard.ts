import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable} from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const tocken = localStorage.getItem('accessToken')
    if (tocken) {
     
      this._loginService.getUser()
      .subscribe()
     return true;
    }

    return this._router.navigate([''])

  }


}
