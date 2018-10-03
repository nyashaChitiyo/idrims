import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';

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
  isClick=false;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  @ViewChild('failedEq') private failedEq: SwalComponent;

  constructor(private httpClient: HttpClient, private data: DataService) { 
    var id:string =localStorage.getItem('userId');
    this.id = id;
  }

  ngOnInit() {

  }

  postVehicle(){
   this.isClick=true;
  if(this.regVRN == this.confirmRegVRN){
    this.httpClient.post('http://108.61.174.41:7070/api/vehicles/create',
    {
      "vehicleRegistrationNumber": this.regVRN
    })
  .subscribe(data => {
    if (data) {   
      this.isClick=false;     
      this.successSwal.show();
      this.reset();
    } else {
      console.log('failed',+ data);
      this.failedSwal.show();
      
    }
  }, error => {
    this.data.error(error['error'].message);
    this.isClick=false;
    this.failedSwal.show();
  }); }
  else{
   this.data.error('Vehicle Reg and Confirm vehicle Reg do not match')
  }
  }
  reset(){
    this.regVRN = '';
    this.confirmRegVRN = '';
  }
}
