import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-verify-vehicle',
  templateUrl: './verify-vehicle.component.html',
  styleUrls: ['./verify-vehicle.component.css']
})
export class VerifyVehicleComponent implements OnInit {

  vehicleVRN:string;
  vehicle:any;
  page=1;

  vMake = '';
  vModel = '';
  vType = '';
  vUsage = '';
  InsExp = '';
  licExp = '';
  licArrears = '';
  licTaxClass = '';
  insTaxClass = '';

  constructor(private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{
      this.vehicleVRN = res['vehicleRegistrationNumber'];
      console.log(this.vehicleVRN);
    //  this.getVehicle();
    })
  }

  saveVehicle(){
  
      const data = this.httpClient.post("http://108.61.174.41:7070/api/vehicles/update",{
        "insuranceTaxClass": 0,
        "vehicleMake": this.vMake,
        "vehicleModel": this.vModel,
        "vehicleOwnership": this.vType,
        "vehicleRegNum": this.vehicleVRN,
        "vehicleUsage": this.vUsage,
        "verifStatus": true,
        "zinaraTaxClass": 0
    }
    ).subscribe(data => {
      if (data['success'] === true) {       
        console.log('failed',+ data);
        //this.successSwal.show();
        //this.reset();
      } else {
        console.log('failed',+ data);
        //this.failedSwal.show();
      }
    }, error => {
      console.log(Response);
      //this.failedSwal.show();
    });
  }
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