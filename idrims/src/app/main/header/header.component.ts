import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../authentication/sessions.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WebsocketService} from "../../websocket.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullName: string;
  userType: string;
  userStation: string;
  unverifiedcount = [];
  pendingVerificationNotification = [];
  openClaims = [];

  constructor(private session: SessionsService, private router: Router,private httpClient: HttpClient, private websocket: WebsocketService) {

    let stompClient = this.websocket.connect();
    stompClient.connect({}, frame => {

          stompClient.subscribe('/queue/notify', notifications => {
            let arr = [];
          arr.push(JSON.parse(notifications.body))

          if(arr[0].type === "VEHICLE"){
           this.pendingVerificationNotification.push(notifications.body)
          }
          else if(arr[0].type === "CLAIMS"){
            this.openClaims.push(notifications.body);
          }
        })
    });

    this.fullName = localStorage.getItem('firstname');
    this.userType = localStorage.getItem('userGroup');
    this.userStation = localStorage.getItem('userStationName');
    this.countUnverified();
  }

  ngOnInit() { 

  }

  viewAllRequest(){
    this.pendingVerificationNotification = [];
    this.router.navigate(['vehicles']);
  }
  viewAllClaims(){
    this.openClaims = [];
    this.router.navigate(['openClaims']);
  }

  countUnverified(){

    this.httpClient.get('http://108.61.174.41:7070/api/counters/vehicles/unverified')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.unverifiedcount = arr[0];
        // console.log(this.unverifiedcount);
      }
    )  
  }

  logout() {
    this.session.logout();
    this.router.navigate(['login']);
  }

}
