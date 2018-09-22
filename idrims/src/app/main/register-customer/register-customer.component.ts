import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{DataService} from '../data.service';
 
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  email: string;
  address: string;
  firstname: string;
  nationalID: string;
  phoneNumber: string;
  surname: string;
  userGroup: string; 

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient, private data:DataService) {}
 
  postProfile(){ 
  if(this.validate()){
    try{
this.httpClient.post('http://108.61.174.41:7070/api/user/agent/create/user',
  {
    'email' : this.email,
    'firstname' : this.firstname,
    'lastname': this.surname,
    'nationalId':  this.nationalID,
    'phoneNumber': this.phoneNumber,
    'userGroup':'CUST01',
    'userStation': 0,
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
  });}
  catch(error){

  }
}
  }
  reset() {
    this.firstname = '';
    this.nationalID = '';
    this.phoneNumber = '';
    this.email = '';
    this.surname = '';
  }
  validate(){
    if(this.firstname){
      if(this.surname){
        if(this.nationalID)
        {
          if(this.phoneNumber)
          {
            if(this.email){
  
        return true;
        
            }
            else{
              this.data.error('please enter email');
            }
          }
          else{
            this.data.error('please enter phone number');
          }
        }
        else{
          this.data.error('please enter national ID');
        }
      } 
      else{
        this.data.error('please enter surname');
      }
    }
    else{
      this.data.error('please enter firstname');
    }
}
  ngOnInit() {
  }

}

