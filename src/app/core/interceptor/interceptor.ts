import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class Interceptor implements HttpInterceptor{

    
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("/api/auth/authenticate")){
        return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + window.localStorage.getItem('Jwt'),
        'Access-Control-Allow-Origin': environment.urlbase
      }
    });
    return next.handle(request);
  }
}
