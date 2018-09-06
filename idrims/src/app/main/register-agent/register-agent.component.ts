import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

     
  selectedValue: string;
  allColPointNames= [];
  colPoint = '';
  colPointIds = '';
  email: string;
  firstname: string;
  nationalID: string;
  password: string;
  phoneNumber: string;
  surname: string;
  userGroup: string;
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
    'password' : this.password,
    'phoneNumber': this.phoneNumber,
    'surname': this.surname,
    'userGroup':'AGENT01',
    'roles': [ 
      {
        'created': new Date(),
        'description': 'AGENT01',
        'id': 1,
        'lastModified': new Date(),
        'roleName': 'AGENT01'
      }
    ],
      'userStation': +this.selectedValue,
      'userStatus': true,
      'userType': 'AGENT01',

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
    this.password = '';
  }
  ngOnInit() {
  }

}