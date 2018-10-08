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
  lastname: string;
  userGroup: string;
  isCustomer;
  firstname: string;
  userStationName: string;
  unverifiedcount = [];
  pendingVerificationNotification = [];
  openClaims = [];
  disks = [];
  isAgent = false;
  isAdmin = false;

  constructor(private session: SessionsService, private router: Router,private httpClient: HttpClient, private websocket: WebsocketService) {

    if(localStorage.getItem('userGroup')==='ADMIN01' || localStorage.getItem('userGroup')==='AGENT01' || localStorage.getItem('userGroup') === 'CUST01'){
    this.verifyUser();
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
          else if(arr[0].type === "COVER"){
            this.disks.push(notifications.body);
          }
        })
    });}

    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
    this.userGroup = localStorage.getItem('userGroup');
    this.userStationName = localStorage.getItem('userStationName');
    this.countUnverified();
  }

  ngOnInit() { 

  }

  verifyUser(){
    if(localStorage.getItem('userGroup') ==='ADMIN01')
      this.isAdmin = true;
    else if(localStorage.getItem('userGroup') ==='AGENT01')
      this.isAgent = true;
    else if(localStorage.getItem('userGroup') ==='CUST01')
    this.isCustomer= true
  }
  printDisks(){
    this.disks = [];
    this.router.navigate(['agent/mailbox']);
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
