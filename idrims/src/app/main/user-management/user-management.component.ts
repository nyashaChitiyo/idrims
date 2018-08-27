import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
 
  data: Object;
  name:string='';
  // phone:string;
  // found:boolean;

  constructor(private httpClient: HttpClient) {}

  onNameKeyUp(event:any){
  this.name = event.target.value;
  // this.found = false;
  }
  userName = '';
  getProfile(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users'+ this.userName)
     .subscribe(
       (data:any[])=> {
         console.log(data);
         //if(data.length) {
          //  this.phone = data[0].phone;
          //  this.found = true;
       }
     )
  }

  ngOnInit() {
  }

}

