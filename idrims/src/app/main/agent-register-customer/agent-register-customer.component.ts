import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-agent-register-customer',
  templateUrl: './agent-register-customer.component.html',
  styleUrls: ['./agent-register-customer.component.css']
})
export class AgentRegisterCustomerComponent implements OnInit {

  email: string;
  firstname: string;
  nationalID: string;
  password: string;
  phoneNumber: string;
  surname: string;
  userGroup: string;
  // address: string;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  registerCustomer(){ 
    this.httpClient.post('http://108.61.174.41:7070/api/user/agent/create/user',{

      'email': this.email,
      'firstname': this.firstname,
      'lastname': this.surname,
     'nationalId' : this.nationalID,
      'phoneNumber': this.phoneNumber,
      'userGroup': "CUST01",
     'userStation' : 0
    })
    .subscribe(data => {
      if (data['success'] === true) {  
       this.successSwal.show();
        this.reset();
      } else {
        this.failedSwal.show();
      }
    }, error => {
      console.log(Response);
      this.failedSwal.show();
    }); 
    }
    reset() {
      this.firstname = '';
      this.nationalID = '';
      this.phoneNumber = '';
      this.email = '';
      this.surname = '';
    }
  }

