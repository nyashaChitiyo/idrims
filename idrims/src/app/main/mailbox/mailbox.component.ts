import { Component, OnInit ,ViewChild} from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import {DataService} from '../data.service';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public requests;
  isClick = false;
  public temp_var: Object = false;
  responseData: any;
  filteredOrders = [];


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private data:DataService, private demo: DemoService,private router: Router,
    private http: HttpClient) { 
    this.getRequests();
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

 getRequests(){
   this.demo.post('http://108.61.174.41:7070/api/orders/view/collectionPoint',
    {
      "id": +localStorage.getItem('userStation')
    })
    .subscribe(
      (data)=> {
        console.log('sjdfbjskdbhcbaskbjabcbasdbcajcblasdbajbdcsasjdd')
        console.log(data)
        let arr = [];
        arr.push(data)
        this.temp_var=true;
        this.requests = arr[0].filter(
          order => order.transactionStatus === 'ORDER');
      }, error =>{
        this.data.error(error['message']);
      }
    ) 
  }
  printDisk(request){
    this.isClick=true;
    this.demo.post('http://108.61.174.41:7070/api/orders/close',
    {
      "closedBy": localStorage.getItem('userId'),
      "orderId": +request['orderId'],
      "status": "PAC"
    })
    .subscribe(
      (data)=> {
        if (data) {      
          this.isClick = false; 
          this.successSwal.show();
        } else {
          this.isClick = false; 
          this.failedSwal.show();
        }
      }, error=>{
        this.isClick = false; 
        this.data.error(error['message']);
      }
    ) 
  }




  
}