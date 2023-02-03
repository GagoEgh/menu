import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/models/IUser';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: IUser;
  userForm!: FormGroup
  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.user = this._loginService.user;
    this.formInit();
  }

  formInit() {
    this.userForm = this._fb.group(
      {
        firstName: [this.user.firstName],
        lastName: [this.user.lastName],
        email: [this.user.email]
      }
    )
  }


  formDisabled() {
    this.userForm.disable();
  }
}
