import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DataService } from '../data.service';

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
    isClicked=false;
    name: string; 
    type: string;
    @ViewChild('successSwal') private successSwal: SwalComponent;
    @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient, private data: DataService) { } 

  ngOnInit() {
  }
  addInsuranceCompany(){
    if(this.validate()){
      if(this.code.length > 3){
        this.isClicked = true;
      try{
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
        this.isClicked=false;  
        this.successSwal.show();
        console.log(data['message'], + data['message']);
        this.reset();
      } else {
        console.log('failed',+ data);
        this.failedSwal.show();
        
      }
    }, error => {
      this.isClicked = false;
      this.data.error(error['error'].message);
      this.failedSwal.show();
    }); 
    }
    catch(error){
      this.data.error(''+error)
    }
  }
  else{
    this.data.error('Insuarance Code Must Contain 4 or more characters')
  }
}
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
    validate(){
      if(this.address){
        if(this.code){
          if(this.contact)
          {
            if(this.description)
            {
              if(this.email){
                if(this.name){
                  if(this.type){
                  
                       return true;
                  }
                  else{
                    this.data.error('please enter Type');
                  }
                }
                else{
                  this.data.error('please enter Name');
                }
              }
              else {
                this.data.error('please enter Email');
              }
            }
            else{
              this.data.error('please enter Description');
            }
            }
            else{
              this.data.error('please enter Contant Details');
            }
          }
          else{
            this.data.error('please enter Code');
          }
        }
      else{
        this.data.error('please enterAddress');
      }
  }
  }
