import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  vehicleVRN: any;
  customers:any;
  vehicle:any;
  page=1;
  phoneNumber: string;
  firstName: string;
  surname: string;
  streetAddress: string;
  role: string;
  station: string;
  userStatus: boolean ;
  isEdit: boolean = true;
  
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;



  constructor(private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.customers = params;
      console.log(params);
      this.phoneNumber = params['phoneNumber'];
      this.firstName= params['firstname'];
      this.surname= params['lastname'];
      this.streetAddress= params['streetAddress'];
      this.userStatus = params['userStatus'];
    })
  }

}
 