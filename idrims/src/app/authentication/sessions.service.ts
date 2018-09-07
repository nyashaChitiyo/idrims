import { Injectable } from '@angular/core';
import {Router, RouterEvent, Event} from '@angular/router';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingIndicatorService} from '../loading-indicator.service';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs';

@Injectable()
export class SessionsService {
  isLoggedIn: boolean;
  isTest: boolean = false;
  currentUrl: string;
  redirectUrl: string;


  constructor(private router: Router, private httpClient: HttpClient, private loading: LoadingIndicatorService) {
    
    router.events.subscribe((event: Event) => {
      if (event instanceof RouterEvent ) {
        console.log('The current url is ??? : ' + event.url);
        this.currentUrl = event.url;
      }
    });
    this.getIsloggedIn();
  }
  
  login(username: string, password: string) {
    const userCredentials = {
      'phoneNumberOrEmail' : username,
      'password' : password
    };
    this.loading.onRequestStarted();
    const headers = new HttpHeaders().set(InterceptorSkipHeader, 'True');
    this.httpClient.post('http://108.61.174.41:7070/api/auth/signin', userCredentials, {headers}).subscribe(data => {
      console.log('accessToken: ' + data['accessToken']);
      if (data['accessToken'] != null ) {
        localStorage.setItem('accessToken', data['accessToken']);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('phoneNumberOrEmail', username);
        localStorage.setItem('firstname', data['firstname']);
        localStorage.setItem('fullName', data['firstname']);
        localStorage.setItem('userGroup', data['userGroup'])
        localStorage.setItem('userId', data['userId']);
        console.log('User status is '+data['userGroup']);
        
        this.isLoggedIn = true;
        // localStorage.setItem('userType', 'AGENT01');
        // localStorage.setItem('userStation', '1');
        // localStorage.setItem('nationalId', '25000000Z91');
        
        this.router.navigate(['/'], { replaceUrl: true });
        // this.getUserInformation(username);
      }
    },
        error => {
          this.loading.onRequestFinished();
          console.log(error.message);
        });
  }
  isAuthenticated(roles: string[]): Observable<boolean> {
    console.log('auth status: ' + this.isLoggedIn);
    this.loading.onRequestFinished();
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
      this.loading.onRequestFinished();
      this.router.navigate(['/'], { replaceUrl: true });
    }, e => {
      this.loading.onRequestFinished();
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
}
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
