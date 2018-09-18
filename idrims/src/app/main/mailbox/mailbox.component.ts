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


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor( private demo: DemoService,private router: Router,
    private http: HttpClient) { 
    //this.getRequests();
    this.collectionGetRequests();
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  getRequests(){
 
    //console.log(userId+'user id is this')
    this.demo.post('http://108.61.174.41:7070/api/orders/view/collectionPoint',
    {
      "id": +localStorage.getItem('userStation')
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
  printDisk(request){

    this.demo.post('http://108.61.174.41:7070/api/orders/close',
    {
      "closedBy": localStorage.getItem('userId'),
      "orderId": +request['id'],
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




  getRequests1(data) {
    let userData = {
      "id": +localStorage.getItem('userStation')
    };
    return new Promise((resolve, reject) => {
      this.demo.post('http://108.61.174.41:7070/api/orders/view/collectionPoint', JSON.stringify(data))
        .timeout(15000)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err)
        });
    });
  }
  
  
collectionGetRequests() {
  let userData = {
    "id": +localStorage.getItem('userStation')
  };
  this.getRequests1(userData).then(response => {

     this.responseData = response;
     console.log (this.responseData);

     

     let arr = [];
     arr.push(response)
     this.requests = arr[0];
     console.log(this.requests);

     console.log(this.requests['transactionStatus']);
     
     
     // If the user credentials are valid, the current user is redirected to the home page.
    if (this.responseData.transactionStatus ==="QUOTATION" ) {
      console.log (this.responseData);
      console.log ("if");
      

      }
    else{
      console.log ("else");
      
    }

  }), (err) => {
    // Error log
 
}
  
}


  
}