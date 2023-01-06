import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!:IUser
  constructor(
    private _userService:UserService
  ) { }

  ngOnInit(): void {
    this.user = this._userService.getUser();
    console.log(this.user)
  }


}
