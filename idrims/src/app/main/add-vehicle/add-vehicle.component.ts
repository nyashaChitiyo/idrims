import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Router,NavigationExtras} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'] 
})
export class AddVehicleComponent implements OnInit {

  id: string;
  regVRN;
  confirmRegVRN;
  isNew= false;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  @ViewChild('failedEq') private failedEq: SwalComponent;
  @ViewChild('failedAgentReg') private failedAgentReg: SwalComponent;


  constructor(private router: Router, private httpClient: HttpClient, private data:DataService) { 
    var id:string =localStorage.getItem('userId');
    this.id = id;
  }

  ngOnInit() {

  }

  postVehicle(){
    if(this.validate()){
    if(localStorage.getItem('userGroup')==='CUST01'){

    this.httpClient.post('http://108.61.174.41:7070/api/subscriptions/create',
  {
    'userId':+this.id,
    'vehicleRegistrationNumber': this.regVRN
  })
  .subscribe(data => {
    if (data) {        
      this.successSwal.show();
      console.log(data);
      this.reset();
    } else {
      console.log('failed',+ data);
      this.failedSwal.show();
      
    }
  }, error => {
    console.log(Response);
    this.failedSwal.show();
  }); }
  else{
    this.agentRegistry()
  }
  }
}
postNewVehicle(){
  this.httpClient.post('http://108.61.174.41:7070/api/vehicles/create',
  {
    'vehicleRegistrationNumber': this.regVRN
  })
  .subscribe(data => {
    if (data) {        
      this.successSwal.show();
      this.data.success('Vehicle Successfully registered pending verification')
      console.log(data);
      this.reset();
    } else {
      console.log('failed',+ data);
      this.failedSwal.show();
      
    }
  }, error => {
    console.log(Response);
    this.failedSwal.show();
  });
}
  agentRegistry(){
      this.httpClient.post('http://108.61.174.41:7070/api/vehicles/view/vehicleRegistrationNumber',
    {
      'vehicleRegistrationNumber': this.regVRN
    })
    .subscribe(data => {
      if (data['verificationStatus']) {    
        this.router.navigate(['agent/getIdrive/'+this.regVRN],data);
      } else {
        console.log('failed',+ data);
        this.data.error('Vehicle not register press submit to register vehicle')
        this.isNew = true;
      }
    }, error => {
    
      this.data.error('Vehicle not register press submit to register vehicle')
      this.isNew = true
    }); 
  }
  reset(){
    this.regVRN = '';
    this.confirmRegVRN = '';
  }
  validate(){
    if(this.regVRN){
      if(this.confirmRegVRN){

                     return true;
        }
        else{
          this.data.error('please enter Vehicle Reg Number');
        }
      }
    else{
      this.data.error('please confirm Registration number');
    }
}
}
