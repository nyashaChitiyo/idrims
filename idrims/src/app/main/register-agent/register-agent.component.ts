import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

     
  selectedValue: string;
  selectedPrinting
  selectedStation;
  allColPointNames= [];
  allPrintingStations = [];
  colPoint = '';
  colPointIds = '';
  email: string;
  firstname: string;
  nationalID: string;
  isClicked
  phoneNumber: string;
  surname: string;
  userGroup: string;
  allPrintingLocation= [{name:"Collection Point", id:"COLLECTION"},{name:"Central Printing Station", id:"CENTRAL"}]
  isSBsupervisor;
  isSBadmin;
  isCollection;
  isPrinting
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient, private data:DataService) {

    this.httpClient.get('http://108.61.174.41:7070/api/location/view/allCollectionPoints')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let colPointIds = arr[0].map(a => a.id);
      this.allColPointNames = arr[0];
      
      console.log(this.allColPointNames);
    }, error=>{
      this.data.error(error['error'].message);
    })

    if(localStorage.getItem('userGroup')==='ADMIN03'){
      this.isSBadmin = true;
    }
    else if(localStorage.getItem('userGroup')==='ADMIN04'){
      this.isSBsupervisor= true;
    }

    this.httpClient.get('http://108.61.174.41:7070/api/centralPrinting/view/all')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let colPointIds = arr[0].map(a => a.id);
      this.allPrintingStations = arr[0];
      
      console.log(this.allPrintingStations);
    }, error=>{
      this.data.error(error['error'].message);
    })
  }
 
  postProfile(){ 
    if(this.validate()){
      try{
    if(this.selectedStation == "COLLECTION")
    {
      this.isClicked=true;
    this.httpClient.post('http://108.61.174.41:7070/api/user/agent/create/agent',
  {
    'email' : this.email,
    'firstname' : this.firstname,
    'lastname': this.surname,
    'nationalId':  this.nationalID,
    'phoneNumber': this.phoneNumber,
    "stationType": "COLLECTION",
    'userGroup':'AGENT01',
    'userStation': +this.selectedValue,

  })
  .subscribe(data => {
    if (data['success'] === true) {  
      this.isClicked=false
     this.successSwal.show();
      this.reset();
    } else {
      this.failedSwal.show();
    
    
  }
  }, error => {
    this.isClicked=false;
    this.data.error(error['error'].message);
    this.failedSwal.show();
  }); 
  }
  else if(this.selectedStation == "CENTRAL"){
    this.isClicked = true;
    this.httpClient.post('http://108.61.174.41:7070/api/user/agent/create/agent',
  {
    'email' : this.email,
    'firstname' : this.firstname,
    'lastname': this.surname,
    'nationalId':  this.nationalID,
    'phoneNumber': this.phoneNumber,
    "stationType": "CENTRAL",
    'userGroup':'AGENT01',
    'userStation': +this.selectedPrinting,

  })
  .subscribe(data => {
    if (data['success'] === true) {  
      this.isClicked=false;
     this.successSwal.show();
      this.reset();
    } else {
      this.failedSwal.show();
    
    
  }
  }, error => {
    this.isClicked=false;
    this.data.error(error['error'].message);
    this.failedSwal.show();
  });
  }
}
catch(error){
  this.data.error(''+error)
}
}}
stationType(){
  if(this.selectedStation =="COLLECTION")
  {
   this.isPrinting = false;
   this.isCollection = true;
  } 
  else if(this.selectedStation =="CENTRAL")
  {
    this.isCollection = false;
   this.isPrinting = true
  }
}
  reset() {
    this.firstname = '';
    this.nationalID = '';
    this.phoneNumber = '';
    this.email = '';
    this.surname = '';
  }
  ngOnInit() {
  }
  validate(){
    if(this.firstname){
      if(this.surname){
        if(this.nationalID)
        {
          if(this.phoneNumber)
          {
            if(this.email){
              if(this.selectedStation){
        return true;
              }
              else{
                this.data.error('please select station type');
              }
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
          this.data.error('please enter national ID');
        }
      } 
      else{
        this.data.error('please enter surname');
      }
    }
    else{
      this.data.error('please enter firstname');
    }
}
}
