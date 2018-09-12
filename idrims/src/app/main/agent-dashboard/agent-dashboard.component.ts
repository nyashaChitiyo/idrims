import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {
  requestscount =[];
  count: string;
  public temp_var: Object = false;

  constructor(private httpClient: HttpClient) { 
    this.countRequests();
  }

  ngOnInit() {
  }


  countRequests(){
    var colId: number = +localStorage.getItem('colId');
    
    this.httpClient.post('http://108.61.174.41:7070/api/counters/orders/collectionPoint',{
    
      "id": colId
    })
    .subscribe( 
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.requestscount = arr[0];
 console.log(this.requestscount);
      } 
    ) 
  } 
}
