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

  user!:IUser
  userForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    
    this.getUserData();
     this.formInit();
  }


  getUserData(){
    this._loginService.getUserData()
    .subscribe({
      next:(res)=>{
        this.user = res;
      }
    })
  }


  formInit() {
    this.userForm = this._fb.group(
      {
        firstName: [this.user?.firstName],
        lastName: [this.user?.lastName],
        email: [this.user?.email]
      }
    )

  }

  formDisabled() {
    const newUser = {
      firstName:this.userForm.get('firstName')?.value,
      lastName:this.userForm.get('lastName')?.value,
      email:this.userForm.get('email')?.value
      };
      this._loginService.setUserData(newUser)
  
  }
}
