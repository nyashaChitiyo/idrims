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
  count: string;

  constructor( private httpClient: HttpClient ) { 
    this.countAgents();
    console.log(this.count);
  }
  countAgents(){
    this.httpClient.post('http://108.61.174.41:7070/api/counters/users/group',{
    
       'searchString' : 'Agent'
    })
    .subscribe( 
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.agentcount = arr[0];

      }
    ) 
  }

  ngOnInit() {
  }

}
 