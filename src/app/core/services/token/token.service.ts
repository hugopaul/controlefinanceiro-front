import { Injectable } from '@angular/core';
import { Token } from '../../models/token.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  jwtHelper : JwtHelperService = new JwtHelperService();


  generate() {
    let token = new Token;
    token.token = "" + localStorage.getItem("Jwt");
    return token;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("Jwt");
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token)
      console.log("login expirado")
      return !expired
    }
    return false
  }
}
