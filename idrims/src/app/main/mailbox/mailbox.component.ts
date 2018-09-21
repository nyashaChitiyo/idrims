import { Component, OnInit ,ViewChild} from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public requests= [];
  public temp_var: Object = false;
  responseData: any;
  filteredOrders = [];


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor( private demo: DemoService,private router: Router,
    private http: HttpClient) { 
    this.getRequests();
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  async getRequests(){
 
    await this.demo.post('http://108.61.174.41:7070/api/orders/view/collectionPoint',
    {
      "id": +localStorage.getItem('userStation')
    })
    .subscribe(
      (data: Response)=> {
        

        let arr = [];
        arr.push(data)
        this.temp_var=true;
        this.requests = arr[0].filter(
          order => order.transactionStatus === 'QUOTATION');
      }
    ) 
    
  }
  printDisk(request){

    this.demo.post('http://108.61.174.41:7070/api/orders/close',
    {
      "closedBy": localStorage.getItem('userId'),
      "orderId": +request['orderId'],
      "status": "PAC"
    })
    .subscribe(
      (data)=> {
        if (data) {       
          this.successSwal.show();
        } else {
          this.failedSwal.show();
        }
      }
    ) 
  }




  
}