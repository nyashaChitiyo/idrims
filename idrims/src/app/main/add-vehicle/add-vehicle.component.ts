import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'] 
})
export class AddVehicleComponent implements OnInit {

  id: string;
  regVRN = "";
  confirmRegVRN = "";
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  @ViewChild('failedEq') private failedEq: SwalComponent;


  constructor(private router: Router, private httpClient: HttpClient) { 
    var id:string =localStorage.getItem('userId');
    this.id = id;
  }

  ngOnInit() {

  }

  postVehicle(){
    if(localStorage.getItem('userGroup')==='CUST01'){
    console.log(this.regVRN+"yet yet yet "+this.confirmRegVRN)
  if(this.regVRN == this.confirmRegVRN){
    this.httpClient.post('http://108.61.174.41:7070/api/subscriptions/create',
  {
    'userId':+this.id,
    'vehicleRegistrationNumber': this.regVRN
  })
  .subscribe(data => {
    if (data) {        
      this.successSwal.show();
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
    this.failedEq.show();
  }}
  else if(localStorage.getItem('userGroup')==='AGENT01'){
    this.agentRegistry();
  }
  }
  agentRegistry(){
    if(this.regVRN == this.confirmRegVRN){
      this.httpClient.post('http://108.61.174.41:7070/api/vehicles/view/vehicleRegistrationNumber',
    {
      'vehicleRegistrationNumber': this.regVRN
    })
    .subscribe(data => {
      if (data['verificationStatus']) {    
        this.router.navigate(['agent/getIdrive/'+this.regVRN],data);
      } else {
        console.log('failed',+ data);
        this.failedSwal.show();
        
      }
    }, error => {
      console.log(Response);
      this.failedSwal.show();
    }); }
    else{
      this.failedEq.show();
    }
  }
  reset(){
    this.regVRN = '';
    this.confirmRegVRN = '';
  }
}
