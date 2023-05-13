import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private token : TokenService,
    private router: Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

    const authenticate = this.token.isAuthenticated();
    if(authenticate){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false
    }
  }
}