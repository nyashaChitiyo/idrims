import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName:string;
  lastName:string;
  nationalId:string;
  phoneNumber:string;
  email:string;

  constructor() {
    this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');
    this.nationalId = localStorage.getItem('nationalId');
    this.phoneNumber = localStorage.getItem('phoneNumber');
   }

  ngOnInit() {
  }

}
