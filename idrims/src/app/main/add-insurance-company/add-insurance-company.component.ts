import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-add-insurance-company',
  templateUrl: './add-insurance-company.component.html',
  styleUrls: ['./add-insurance-company.component.css']
})
export class AddInsuranceCompanyComponent implements OnInit {
    
    address: string;
    code: string;
    contact: string;
    description: string;
    email: string;
    name: string; 
    type: string;
    @ViewChild('successSwal') private successSwal: SwalComponent;
    @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient) { } 

  ngOnInit() {
  }
  addInsuranceCompany(){
    this.httpClient.post('http://108.61.174.41:7070/api/companies/create',
    {
      'address': this.address,
      'code': this.code,
      'contact': this.contact,
      'description': this.description,
      'email': this.email,
      'name': this.name,
      'type': this.type,
      
    })
    .subscribe(data => {
      if (data['success'] === true) {        
        //this.successSwal.show();
       // setTimeout(function(){ this.successSwal.showAlert(); },0)
        console.log(data['message'], + data['message']);
        this.reset();
      } else {
        console.log('failed',+ data);
        //this.failedSwal.showAlert();
        
      }
    }, error => {
      console.log(Response);
      //this.failedSwal.show();
    }); 
    }
    reset() {
      this.address = '';
      this.code= '';
      this.contact= '';
      this.description= '';
      this.email= '';
      this.name= '';
      this.type= '';
    }

  }
