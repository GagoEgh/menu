import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserProfile = false;
  user!: IUser
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.user = this._loginService.user;
    },300)
    
  }

 

  logout() {
    localStorage.removeItem('accessToken');
    this._router.navigate(['']);
  }

}
