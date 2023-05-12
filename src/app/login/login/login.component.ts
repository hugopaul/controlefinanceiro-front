import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/login.model';
import { Token } from 'src/app/core/models/token.model';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  email!:string;
  password!: string;
  errors!: String[];

  token!:Token;
  constructor(
    private router : Router,
    private http : HttpService
    ) { }

  async onSubmit(){
    let loginDTO : Login = new Login();
    loginDTO.email = this.email;
    loginDTO.password = this.password;

    try {
      const success = await this.http.postLogin(loginDTO).toPromise();
      if (success !== undefined) {
        window.localStorage.setItem('Jwt', success.token);
        this.router.navigate(['/home'])
      }
      console.log(success);
    } catch (error) {
      console.log(error);
      this.errors = ['Email e/ou senha incorretos!']
    }     
    }
  

}
