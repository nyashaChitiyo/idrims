import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-back-office-admin-dashboard',
  templateUrl: './back-office-admin-dashboard.component.html',
  styleUrls: ['./back-office-admin-dashboard.component.css']
})
export class BackOfficeAdminDashboardComponent implements OnInit {

  agentcount = [];
  unverifiedcount = [];
  count: string;

  constructor( private httpClient: HttpClient ) { 
    this.countAgents();
    this.countUnverified();
   
  }
  countAgents(){
    this.httpClient.post('http://108.61.174.41:7070/api/counters/users/group',{
    
       'searchString' : 'AGENT'
    })
    .subscribe( 
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.agentcount = arr[0];
 console.log(this.agentcount);
      } 
    ) 
  } 
  countUnverified(){
    this.httpClient.get('http://108.61.174.41:7070/api/counters/vehicles/unverified')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.unverifiedcount = arr[0];
        console.log(this.unverifiedcount);
      }
    )  
  }

  ngOnInit() {
  }

}
 