import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService}from '../data.service';

@Component({
  selector: 'app-verify-vehicle',
  templateUrl: './verify-vehicle.component.html',
  styleUrls: ['./verify-vehicle.component.css']
})
export class VerifyVehicleComponent implements OnInit {

  selectedValue: string;
  vehicleVRN:string;
  vehicle:any;
  page=1;
  taxClassId = '';
  licTaxClasses;
  ZinArreas;
  insTaxClasses;
  ZBCTaxClass;
  vMake = '';
  vModel = ''; 
  vType = '';
  selectedTaxClass;
  vUsage = '';
  InsExp = '';
  licArrears = '';
  licTaxClass = '';
  insTaxClass = '';
  vOwnership = '';
  isClicked=false;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  @ViewChild('verifiedSwal') private verifiedSwal: SwalComponent;

  constructor(private data: DataService, private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient) { 
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
        }, error => {
          this.data.error(error['message']);
        }); 
      }

        getInsTaxClass(){
          this.demo.get('http://108.61.174.41:7070/api/insurancePricing/view')
          .subscribe(insTaxClasses=> { 
            let arr = [];
              arr.push(insTaxClasses)
              this.insTaxClasses = arr[0];

              console.log(this.insTaxClasses);
            }, error=>{
              this.data.error(error['message']);
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
getStatus(): boolean{
  
return false;
}
  saveVehicle(){

    if(this.validate()){
      
      this.isClicked = true;
      try{
    const data = this.httpClient.post('http://108.61.174.41:7070/api/vehicles/view/vehicleRegistrationNumber',{
      "vehicleRegistrationNumber":this.vehicleVRN
    })
    .subscribe(data => {
      if(data['verificationStatus']===false){
          const data = this.httpClient.post("http://108.61.174.41:7070/api/vehicles/update",{ 
            "insuranceTaxClass": +this.selectedTaxClass,
            "vehicleMake": this.vMake,
            "vehicleModel": this.vModel,
            "vehicleOwnership": this.vType,
            "vehicleRegistrationNumber": this.vehicleVRN,
            "vehicleUsage": this.vUsage,
            "zbcTaxClass": this.ZBCTaxClass,
            "zianraLicenceExpiry" : this.InsExp, 
            "zinaraArrears": +this.ZinArreas,
            "zinaraTaxClass": +this.selectedValue
        })
        .subscribe(data => {
          if (data['status'] === "Success ") {  
            this.data.success('Successfully verified your vehicle');
            this.isClicked=false;
           this.successSwal.show();
            this.reset();
          } else { 
            this.failedSwal.show();
          }
        }, error => {
          this.isClicked=false;
          this.data.error(error['message']);
          this.failedSwal.show();
        }); 
        }
      else{ 
          this.verifiedSwal.show();
           this.reset();
    }
  });}
  catch(error){
    this.data.error(''+error)
  }
    }
    }
    reset() {
      this.vMake = '';
      this.vModel = '';
      this.vType = '';
      this.InsExp = '';
      this.vUsage = '';
      this.licArrears = '';
      this.licTaxClass = '';
      this.insTaxClass = '';
      this.vOwnership = '';
    }
    validate(){
      if(this.vMake){
        if(this.vModel){
          if(this.vType)
          {
            if(this.InsExp)
            {
              if(this.vUsage){

                      if(this.selectedValue){
                        if(this.ZinArreas || +this.ZinArreas==0){
                        if(this.selectedTaxClass){
                          if(this.vOwnership){
                       return true;
                          }
                          else{
                            this.data.error('please enter Vehicle Ownership');
                          }
                        }
                        else{
                          this.data.error('please enter Insurance Tax Class');
                        }
                      }
                        else{
                          this.data.error('please enter Zinara arears, enter 0 if u have non');
                        }
                      }
                      else{
                        this.data.error('please enter Licence Tax Class');
                      }
              }
              else{
                this.data.error('please enter Vehicle Usage');
              }
            }
            else{
              this.data.error('please enter Insurance Exp');
            }
          }
          else{
            this.data.error('please enter Vehicle Type');
          }
        } 
        else{
          this.data.error('please enter Vehicle Model');
        }
      }
      else{
        this.data.error('please enter Vehicle Make');
      }
  }
}

