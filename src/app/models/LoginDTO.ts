import { FormControl, FormGroup } from "@angular/forms"

export class LoginDTO {
    email!: string
    password!: string
    constructor(loginForm:FormGroup){
        this.email = (loginForm.get('email') as FormControl).value 
        this.password = (loginForm.get('password') as FormControl).value
    }

}