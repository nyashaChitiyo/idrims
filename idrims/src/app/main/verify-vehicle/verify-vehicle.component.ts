import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
@Component({
  selector: 'app-verify-vehicle',
  templateUrl: './verify-vehicle.component.html',
  styleUrls: ['./verify-vehicle.component.css']
})
export class VerifyVehicleComponent implements OnInit {

  vehicleVRN: any;
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

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private activatedRoute: ActivatedRoute, private demo: DemoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{
      this.vehicleVRN = res['vehicleRegistrationNumber'];
      console.log(this.vehicleVRN);
    //  this.getVehicle();
    })
  }

  saveVehicle(){
    this.demo.post("http://108.61.174.41:7070/api/vehicles/update",{
        "vehicleMake": this.vMake,
        "vehicleModel": this.vModel,
        "vehicleOwnership": this.vType,
        "vehicleRegNum": this.vehicleVRN,
        "vehicleUsage": this.vUsage
    })
    .subscribe(data => {
      if (data['status'] === "Success") {  
       this.successSwal.show();
        this.reset();
      } else {
        this.failedSwal.show();
      }
    }, error => {
      console.log(Response);
      this.failedSwal.show();
    }); 
    }
    reset() {
      this.vMake = '';
      this.vModel = '';
      this.vType = '';
      this.vehicleVRN = '';
      this.vUsage = '';
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
