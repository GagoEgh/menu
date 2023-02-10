import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, share } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavbarComponent implements OnInit {

  isUserProfile = false;
  user$ = new Observable<IUser>()
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {

    this.user$ = this.getUserData().pipe(share())

  }


  private getUserData() {
    return this._loginService.getUserData()
  }


  logout() {
    localStorage.removeItem('accessToken');
    this._router.navigate(['']);
  }

}
