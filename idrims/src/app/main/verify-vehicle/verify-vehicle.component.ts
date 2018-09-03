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

  vehicleVRN:string;
  vehicle:any;
  page=1;
  taxClassId = '';
  licTaxClasses;
  insTaxClasses;

  vMake = '';
  vModel = '';
  vType = '';
  vUsage = '';
  InsExp = '';
  licExp = ''; 
  licArrears = '';
  licTaxClass = '';
  insTaxClass = '';
  vOwnership = '';

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient) { 

    this.getLicTaxClasses();
    this.getInsTaxClass();
  }

  getLicTaxClasses(){
    /// take the value of onselected region name and assign it to region
    
    this.demo.get('http://108.61.174.41:7070/api/zinaraPricing/view')
        .subscribe(data => {
          let arr = [];
          arr.push(data);
          let arr1 = arr[0].map(a => a.taxClassDescription);
          let taxClassId = arr[0].map(a => a.taxClassId);
          this.licTaxClasses = arr[0];
          
          console.log(this.licTaxClasses);
        }); }

        getInsTaxClass(){
          this.demo.get('http://108.61.174.41:7070/api/insurancePricing/view')
          .subscribe(insTaxClasses=> { 
            let arr = [];
              arr.push(insTaxClasses)
              this.insTaxClasses = arr[0];

              console.log(this.insTaxClasses);
            }
          ) 
        } 


  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{
      this.vehicleVRN = res['vehicleRegistrationNumber'];
      console.log(this.vehicleVRN); 
    //  this.getVehicle();
    }) 
  }

  saveVehicle(){
  
      const data = this.httpClient.post("http://108.61.174.41:7070/api/vehicles/update",{
        "insuranceTaxClass": this.insTaxClass,
        "insuranceExpiry" : this.InsExp,
        "vehicleMake": this.vMake,
        "vehicleModel": this.vModel,
        "vehicleOwnership": this.vType,
        "vehicleRegistrationNumber": this.vehicleVRN,
        "vehicleUsage": this.vUsage,
        "verifStatus": true,
        "zinaraTaxClass": this.licTaxClass
    })
	
    .subscribe(data => {
      if (data['status'] === "Success ") {  
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
      this.InsExp = '';
      this.vUsage = '';
      this.licExp = '';
      this.licArrears = '';
      this.licTaxClass = '';
      this.insTaxClass = '';
      this.vOwnership = '';
    }
}

