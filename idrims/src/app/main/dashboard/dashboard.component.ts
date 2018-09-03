import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



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
 