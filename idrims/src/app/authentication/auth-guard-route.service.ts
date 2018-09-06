import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardRouteService {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('accessToken')){
      console.log(localStorage.getItem('userGroup')+'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
    var userGroup:string = localStorage.getItem('userGroup');
    if(userGroup == 'ADMIN02'){
      return state.url.startsWith('/admin')
      ? true: (this.router.navigate(['/']), false);
    }
    // else{
    //   return state.url.startsWith('/admin')
    //   ? (this.router.navigate(['/']), false)
    //   : true;
    // } 
   else if(userGroup == 'ADMIN03'){
      return state.url.startsWith('/sbadmin')
      ? true: (this.router.navigate(['/']), false);
    }
    else if(userGroup == 'CUST01'){
      return state.url.startsWith('/customer')
      ? true: (this.router.navigate(['/']), false);
    }
    // else{
    //   return state.url.startsWith('/sbadmin')
    //   ? (this.router.navigate(['/']), false)
    //   : true;
    // }
  }
else
this.router.navigate(['/login']);
}
}