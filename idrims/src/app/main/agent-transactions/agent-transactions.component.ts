import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agent-transactions',
  templateUrl: './agent-transactions.component.html',
  styleUrls: ['./agent-transactions.component.css']
})
export class AgentTransactionsComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  public requests= [];
  public temp_var: Object = false;

  constructor( private demo: DemoService,private router: Router) { 
    this.getRequests();
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    
  }

  getRequests(){
    var userId: number = +localStorage.getItem('userId');
    //console.log(userId+'user id is this')
    this.demo.post('http://108.61.174.41:7070/api/orders/view/processedBy',{
      "phoneNumber": userId
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.requests = arr[0];
        console.log(this.requests);
        this.temp_var=true;
      }
    ) 
  }
}
