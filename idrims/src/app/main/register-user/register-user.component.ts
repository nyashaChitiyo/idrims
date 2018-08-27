import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  email: string;
  firstname: string;
  nationalId: string;
  password: string;
  phoneNumber: string;
  surname: string;
  userGroup: string;

  constructor(private httpClient: HttpClient) {}

  postProfile(){

    
    this.httpClient.post('https://reqres.in/api/users',
  {
    'firstname' : this.firstname,
    'email' : this.email,
    'nationalID':  this.nationalId,
    'password' : this.password,
    'phoneNumber': this.phoneNumber,
    'surname': this.surname,
    'userGroup':'Agent',
    'roles': [
      {
        'created': new Date(),
        'description': 'Agent',
        'id': 1,
        'lastModified': new Date(),
        'roleName': 'Agent'
      }
    ],
      'userStation': '1',
      'userStatus': true,
      'userType': 'Agent',

  })
  .subscribe(data => {
    if (data['statusMessage'] === 'OK') {
      console.log('Success', + data);
      this.reset();
    } else {
      console.log('failed',+ data);
      //this.failedSwal.show();
    }
  }, error => {
    console.log(Response);
    //this.failedSwal.show();
  }); 
    //  .subscribe(
    //    (data:any[])=> {
    //      console.log(data);
    //      //if(data.length) {
    //       //  this.phone = data[0].phone;
    //       //  this.found = true;
    //    }
    //  )
  }
  reset() {
    this.firstname = '';
    this.nationalId = '';
    this.phoneNumber = '';
    this.email = '';
    this.surname = '';
    this.password = '';
  }
  ngOnInit() {
  }

}
