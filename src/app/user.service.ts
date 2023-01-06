import { Injectable } from '@angular/core';
import { IUser } from './models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user!: IUser;
  constructor() { }

  getUser() {
    return this._user
  }

  setUser(loginUser: IUser) {
    this._user = loginUser
  }
}


