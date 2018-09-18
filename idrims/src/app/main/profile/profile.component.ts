import { Component, OnInit,ViewChild } from '@angular/core';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  firstName:string;
  lastName:string;
  nationalId:string;
  phoneNumber:string;
  email:string;
  userId: number;
  constructor(private httpClient: HttpClient) {
    this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');
    this.nationalId = localStorage.getItem('nationalId');
    this.phoneNumber = localStorage.getItem('phoneNumber');
   }

  ngOnInit() {
    var id: number = +localStorage.getItem('userId');
    console.log(id+'daKASLNNCJKSNKCNSDNkXN')
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/deliveryAddress/userId',
    {
      "id": 1
    })
      .subscribe(data1 => {
        if(data1){
          console.log(data1)
          this.successSwal.show();
        }
        else
        this.failedSwal.show();
      });
  }
}
