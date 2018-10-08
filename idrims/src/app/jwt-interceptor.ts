import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor,HttpErrorResponse, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterceptorSkipHeader, SessionsService} from './authentication/sessions.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: SessionsService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    const authRequest = request.clone({
    headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(authRequest).do(
      (event:any)=>{},
      (error:any)=>{
        if(error instanceof HttpErrorResponse){
         // if(error.status == 0){
            console.error(error.status)
        //  }
        }
      }
    );
  }
}

