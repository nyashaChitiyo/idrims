import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient) { }

  resetPassword(){
    this.httpClient.post('http://108.61.174.41:7070/api/user/PinReset',{
      "email": this.email

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
    this.email = '';
  }
  ngOnInit() {
  }

}
