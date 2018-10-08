import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable ,of} from 'rxjs';
import 'rxjs/add/operator/take';
import 'rxjs-compat/add/operator/do';
import 'rxjs/add/operator/map';
import {SessionsService} from './sessions.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: SessionsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url = state.url;
    console.log('This is the URL We wanna Go to: ' + url);
    this.authService.redirectUrl = url;
    const roles = route.data['roles'] as Array<string>;
    return this.authService.isAuthenticated(roles)
 
      .do(authenticated => {

        if (!authenticated) {
          console.log('Access Denied');
          this.router.navigate(['/login']);
        }
      });
  }
  
}
