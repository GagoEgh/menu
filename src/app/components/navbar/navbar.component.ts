import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!:IUser;
  isUserProfile = false
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!)
  }
 
  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('tocken');
    this._router.navigate(['']);
  }

}
