import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IHttpResponse } from 'src/app/models/IHttpResponse';
import { ILoginResponse } from 'src/app/models/ILoginResponse';
import { LoginDTO } from'../../models/LoginDTO';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  subject$ = new Subject<void>();
  loginForm!: FormGroup;
  httpErroeMessages!: string[];

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      email: [''],
      password: ['']
    })
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return
    }

    const data = new LoginDTO(this.loginForm);

    this._loginService.loginUser(data)
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (res: IHttpResponse<ILoginResponse>) => {
          localStorage.setItem('accessToken', res.data.accessToken);
          this._router.navigate(['nav']);
          this.httpErroeMessages = []
        },
        error: (err: string[]) => {
          this.httpErroeMessages = err;
        }
      })

  }


  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete()
  }

}
