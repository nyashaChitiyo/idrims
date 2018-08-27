import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
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
   // console.log('Headers: ' + authRequest.headers['Authorization']);
    return next.handle(authRequest);
  }
}


  ////////////////////////////////////
//   constructor(public auth: SessionsService) {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // const dupReq = request.clone({headers: request.headers.set('Access-Control-Allow-Origin','*') });
//     // return next.handle(dupReq);
//     if (request.headers.has(InterceptorSkipHeader)) {
//       const headers = request.headers.delete(InterceptorSkipHeader);
//       console.log('not adding token');
//       return next.handle(request.clone({ headers }));
//     } else {
//       const token = this.auth.getToken();
//       const myHeaders = new HttpHeaders()
//         // .set('X-CustomHeader', 'custom header value')
//         .set('Content-Type', 'Application/json')
//         .set('Authorization', `Bearer ${token}`);
//         // .set('Access-Control-Allow-Origin', '*');
//       const authRequest = request.clone({
//         headers: myHeaders
//       });
//       console.log('Headers: ' + authRequest.headers['Authorization']);
//       return next.handle(authRequest);
//     }
//     }
// }

