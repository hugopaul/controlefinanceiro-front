import { Injectable } from '@angular/core';
import { Token } from '../../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  generate(){
    let token = new Token;
    token.token = ""+localStorage.getItem("Jwt");
     return token;
 }

}
