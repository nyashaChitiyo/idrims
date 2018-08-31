import { Injectable } from '@angular/core';
import {Router, RouterEvent, Event} from '@angular/router';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingIndicatorService} from './loading-indicator.service';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs';
import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  currentUrl: string;

  constructor(private router: Router, private httpClient: HttpClient, private loading: LoadingIndicatorService) { 
    router.events.subscribe((event: Event) => {
      if (event instanceof RouterEvent ) {
        console.log('The current url is ??? : ' + event.url);
        this.currentUrl = event.url;
      }
    });
  }


  getUsers(){
   return this.httpClient.get("")
      .map((res: Response) => res.json())
  }


  getUserInformation () {
    const details = { 'phoneNumber' : '0775181633'};
    // tslint:disable-next-line:max-line-length
    this.httpClient.post('', details).subscribe(userData => {
      console.log('the logging in od the usre');
      localStorage.setItem('loggedIn', 'true');
      console.log('userType is: ' + userData['userType']);
      localStorage.setItem('userType', userData['userType']);
      localStorage.setItem('userStation', userData['userStation']);
      localStorage.setItem('firstName', userData['firstName']);
      this.loading.onRequestFinished();
      this.router.navigate(['/'], { replaceUrl: true });
    }, e => {
      this.loading.onRequestFinished();
      console.error('Ndeipi - wanete a: ' + e.message);
    });
  }
  
  addAgent(model:any){
    return this.httpClient.post("",model)
    .map(( res: Response) => res.json());
  }

  onNameKeyUp(event:any){
    console.log(event.target.value);
  }

}