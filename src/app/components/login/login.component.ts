import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/user.service';
import { UseresClass } from 'src/app/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  user!: IUser | undefined;
  private users = UseresClass.User;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      name: [''],
      password: ['']
    })
  }

  isLogin = false
  onLogin() {
    let [firstName, lastName] = [... (this.loginForm.value.name as string).split(' ')]
    this.user = this.users.find((user) => {
      return user.firstName.toLowerCase() === firstName.toLowerCase()
        && user.lastName.toLowerCase() === lastName.toLowerCase()
    });

    if (this.user) {
      this._userService.setUser(this.user);
      localStorage.setItem('tocken', 'acssesTocken');
      this._router.navigate(['nav']);
    }else{
      this.isLogin = true
    }
  }
}
