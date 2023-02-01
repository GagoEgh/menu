import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // user!: IUser;
  userForm!: FormGroup
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.user = JSON.parse(localStorage.getItem('user')!);
    this.formInit();
   // this.userForm.disable()
  }

  formInit() {
    this.userForm = this._fb.group(
      {
        firstName: [''],
        lastName: [''],
        phoneNumber: [''],
        email: ['']
      }
    )
  }


  formDisabled() {

    this.userForm.disable();

  }
}
