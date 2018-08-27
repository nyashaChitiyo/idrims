import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customers= [];

  constructor(private httpClient: HttpClient) { 
    this.getCustomers();
  }

//add URL allCustomers
  getCustomers(){
   this.httpClient.get('')
    .subscribe(
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.customers = arr[0];
      }
    ) 
  }
  ngOnInit() {
  }

}
