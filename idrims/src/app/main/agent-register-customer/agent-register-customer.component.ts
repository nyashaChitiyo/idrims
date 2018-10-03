import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';

@Component({
  selector: 'app-agent-register-customer',
  templateUrl: './agent-register-customer.component.html',
  styleUrls: ['./agent-register-customer.component.css']
})
export class AgentRegisterCustomerComponent implements OnInit {

  isClick = false;
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

  constructor(private httpClient: HttpClient, private data:DataService) { }

  ngOnInit() {
  }

  registerCustomer(){ 
    this.isClick=true;
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
      if (data['success'] == true) {  
        this.isClick=false;
        this.data.success(data['message']);
       this.successSwal.show();
        this.reset();
      } else {
        this.failedSwal.show();
      }
    }, error => {
      this.data.error(error['error'].message);
      this.isClick=false;
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

