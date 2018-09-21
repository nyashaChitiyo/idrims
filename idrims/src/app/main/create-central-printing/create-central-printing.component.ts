import { Component, OnInit,ViewChild } from '@angular/core';
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DataService } from '../data.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-create-central-printing',
  templateUrl: './create-central-printing.component.html',
  styleUrls: ['./create-central-printing.component.css']
})
export class CreateCentralPrintingComponent implements OnInit {

  regions = [];

  CentralPrintingName = '';
  Address = ''; 
  code = '';
  cpcontactDetails='';
  phoneNumber
  latitude: number;
  longitude: '';
  email = '';
  selectedValue: number;
  selectedReg: number;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private demo: DemoService, private data: DataService) {}

  postPrintLocation(){
    if(this.validate()){
      try{
   this.demo.post('http://108.61.174.41:7070/api/centralPrinting/create',
    {
      'address': this.Address,
      'code': this.code,
      'contact': this.cpcontactDetails,
      'email': this.email,
      'id': 0,      
      'name': this.CentralPrintingName,
      'phoneNumber': this.phoneNumber,
      'status': true
      
    })
    .subscribe(data => {
      if (data['success'] === true) {        
        this.successSwal.show();
        this.reset();
      } else {
        console.log('failed',+ data);
        this.failedSwal.show();
        
      }
    }, error => {
      console.log(Response);
      this.failedSwal.show();
    });  }
    catch(error){
      this.data.error(''+error)
    }
   }}
   reset() {
    this.CentralPrintingName = '';
    this.Address = '';
    this.code = '';
    this.cpcontactDetails='';
    this.phoneNumber
    this.email = '';
  }
  validate(){
    if(this.CentralPrintingName){
      if(this.Address){
        if(this.code)
        {
          if(this.cpcontactDetails)
          {
            if(this.phoneNumber){
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
            this.data.error('please enter Contact Details');
          }
        }
        else{
          this.data.error('please enter Code');
        }
      } 
      else{
        this.data.error('please enter Address');
      }
    }
    else{
      this.data.error('please enter Central Printing Name');
    }
}
  ngOnInit() {

  }
}
