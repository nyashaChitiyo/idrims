import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-register-supervisor',
  templateUrl: './register-supervisor.component.html',
  styleUrls: ['./register-supervisor.component.css']
})
export class RegisterSupervisorComponent implements OnInit {
  
  selectedValue: string;
  allColPointNames= [];
  colPoint = '';
  colPointIds = '';
  email: string;
  firstname: string;
  nationalID: string;
  phoneNumber: string;
  surname: string;
  userGroup: string;
  password: string;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient) {
    
    this.httpClient.get('http://108.61.174.41:7070/api/location/view/allCollectionPoints')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let colPointIds = arr[0].map(a => a.id);
      this.allColPointNames = arr[0];
      
      console.log(this.allColPointNames);
    })
  }
 
  postProfile(){ 
    this.httpClient.post('http://108.61.174.41:7070/api/auth/signup',
  {

    'firstname' : this.firstname,
    'email' : this.email,
    'nationalId':  this.nationalID,
    'phoneNumber': this.phoneNumber,
    'lastname': this.surname,
    'password':this.password,
    'userGroup':'ADMIN04',
    'userStation': +this.selectedValue,
    'userStatus': true,

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
    this.selectedValue = '';
  }
  ngOnInit() {
  }

}
