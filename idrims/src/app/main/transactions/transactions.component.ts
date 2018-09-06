import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions= [];
  userGroup:string;

  constructor(private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 this.gettransactions()
  }
  
  gettransactions(){
    this.httpClient.post('http://108.61.174.41:7070/api/orders/view/status',
    {
      "searchString": "true"
    })
    .subscribe(
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.transactions = arr[0];
        console.log(arr[0]);
      }
    ) 
  }
  ngOnInit() {
  }
} 
 