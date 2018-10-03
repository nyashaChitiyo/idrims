import * as Stomp from 'stompjs';
import * as socketIo from 'socket.io-client';
import * as SockJS from 'sockjs-client';
import { Injectable } from '@angular/core';
import {Router, RouterEvent, Event} from '@angular/router';
import 'rxjs/add/operator/filter';
import {DataService} from '../main/data.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs';
import {LoadingIndicatorService} from '../loading-indicator.service';

@Injectable()
export class SessionsService {
  isLoggedIn: boolean;
  message: string;
  isTest: boolean = false;
  currentUrl: string;
  errMsg: string;
  redirectUrl: string;

  private stompClient;
  private serverUrl = 'http://108.61.174.41:7070/ws';

  constructor(public loading: LoadingIndicatorService,private router: Router, private httpClient: HttpClient, private data:DataService) {
    
    router.events.subscribe((event: Event) => {
      if (event instanceof RouterEvent ) {
        console.log('The current url is ??? : ' + event.url);
        this.currentUrl = event.url;
      }
    });
    this.getIsloggedIn();
  }
  
   login(username: string, password: string){
    this.loading.onRequestStarted();
     var msg: string = '';
    const userCredentials = {
      'password' : password,
      'phoneNumber' : username
    };
    
    const headers = new HttpHeaders().set(InterceptorSkipHeader, 'True');
    this.httpClient.post('http://108.61.174.41:7070/api/auth/signin', userCredentials, {headers}).subscribe(data => {
      
      if (data['accessToken'] != null ) {
        localStorage.setItem('accessToken', data['accessToken']);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('phoneNumber', data['phoneNumber']);
        localStorage.setItem('firstname', data['firstname']);
        localStorage.setItem('lastname', data['lastname']);
        localStorage.setItem('userGroup', data['userGroup'])
        localStorage.setItem('userStation', data['userStation'])
        localStorage.setItem('userId', data['userId']);
        localStorage.setItem('email',data['email']);
        localStorage.setItem('message', data['message']);   
        localStorage.setItem('nationalId',data['nationalId']);
        console.log('User status is '+data['userGroup']);
        
        this.isLoggedIn = true;
        var userGroup:string = localStorage.getItem('userGroup');

        this.loading.onRequestFinished();
        this.data.success('login successful');
    if(userGroup == 'CUST01'){
      this.router.navigate(['/customer/Dashboard'], { replaceUrl: true });
      msg = "success";
    }
    else if(userGroup == 'AGENT01'){
      this.router.navigate(['/agent/dashboard'], { replaceUrl: true });
      msg = "success";
    }
    else if(userGroup == 'ADMIN03'){
      this.router.navigate(['/sbadmin/dashboard'], { replaceUrl: true });
      msg = "success";
    }
    else if(userGroup == 'ADMIN02'){
      this.router.navigate(['/admin/dashboard'], { replaceUrl: true });
      msg = "success";                       
    }
    else if(userGroup == 'ADMIN04'){
      this.router.navigate(['/supervisor/dashboard'], { replaceUrl: true });
      msg = "success";
    }
    else{
        this.router.navigate(['/backOffice/dashboard'], { replaceUrl: true });
        msg = "success";
        }
      }
      else{
       return this.dispMessage();
      }
    }, error =>{
      //msg = "error";
      
      this.loading.onRequestFinished();
     
      this.data.error(error['error'].message);
    } 
     );
    
  }

  dispMessage():string{
    return "Invalid Username and password";
  }

  dispErrMessage(error):string{
    return error;
  }
onMessage(message){
console.log(message)
}
  isAuthenticated(roles: string[]): Observable<boolean> {
    console.log('auth status: ' + this.isLoggedIn);
    //this.loading.onRequestFinished();
    return this.isLoggedIn ? of(true) : of(false);
  }
  logout(): void {
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('accessToken', '1111');
    this.getIsloggedIn();
  }
  getIsloggedIn() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  }
  adjustScreenSize() {

  }
  public getToken(): string {
    return localStorage.getItem('accessToken');
  }
  getUserInformation () {
    const details = { 'phoneNumber' : '0775181633'};
    // tslint:disable-next-line:max-line-length
    this.httpClient.get('http://108.61.174.41:7070/api/user/me')
    .subscribe(userData => {
      this.isLoggedIn = true;
      
      localStorage.setItem('loggedIn', 'true');
      console.log('userGroup is: ' + userData['userGroup']);
      localStorage.setItem('userGroup', userData['userGroup']);
      localStorage.setItem('userStation', userData['userStation']);
      localStorage.setItem('firstname', userData['firstname']);
      //this.loading.onRequestFinished();
      this.router.navigate(['/'], { replaceUrl: true });
    }, e => {
      //this.loading.onRequestFinished();
      console.error('Ndeipi - wanete a: ' + e.message);
    });
  }

  isAdmin() {
    return localStorage.getItem('userGroup') === 'ADMIN01';
  }
 
  isSystemAdmin() {
    return localStorage.getItem('userGroup') === 'ADMIN02';
  } 
  isSBadmin() {
    return localStorage.getItem('userGroup') === 'ADMIN03';
  }
  isCustomer() {
    return localStorage.getItem('userGroup') === 'CUST01';
  }
  isAgent() {
    return localStorage.getItem('userGroup') === 'AGENT01';
  }
  isSupervisor() {
    return localStorage.getItem('userGroup') === 'ADMIN04';
  }
}
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
