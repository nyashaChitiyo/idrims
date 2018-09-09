import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-agent-register-vehicle',
  templateUrl: './agent-register-vehicle.component.html',
  styleUrls: ['./agent-register-vehicle.component.css']
})
export class AgentRegisterVehicleComponent implements OnInit {
  id: string;
  regVRN = "";
  confirmRegVRN = "";
  nationalID ="";
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  @ViewChild('failedEq') private failedEq: SwalComponent;

  constructor(private httpClient: HttpClient) { 
    var id:string =localStorage.getItem('userId');
    this.id = id;
  }

  ngOnInit() {

  }

  postVehicle(){
    console.log(this.regVRN+"yet yet yet "+this.confirmRegVRN)
  if(this.regVRN == this.confirmRegVRN){
    this.httpClient.post('http://108.61.174.41:7070/api/subscriptions/create',
  {
    'userId':this.nationalID,
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
  }
  }
  reset(){
    this.regVRN = '';
    this.confirmRegVRN = '';
  }
}
