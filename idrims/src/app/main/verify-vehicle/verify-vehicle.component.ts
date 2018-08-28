import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-verify-vehicle',
  templateUrl: './verify-vehicle.component.html',
  styleUrls: ['./verify-vehicle.component.css']
})
export class VerifyVehicleComponent implements OnInit {

  vehicleVRN: any;
  vehicle:any;
  page=1;

  constructor(private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{
      this.vehicleVRN = res['vehicleRegistrationNumber'];
      console.log(this.vehicleVRN);
    //  this.getVehicle();
    })
  }

  saveVehicle(){
    
  }
  /*async getVehicle(event ?: any){
    if(event){
      this.vehicle = null;
    }
    try{
      const data = await this.httpClient.get(
        `http://108.61.174.41:7070/api/vehicles/view/all/${this.vehicleVRN}?page=${this.page -1}`
      );
      data['success']
      ?(this.vehicle = data)
      : console.log(['error']);
    }
    catch(error){
     console.log(['error']);
    }
  }*/
}
