import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from "jquery";
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServicesService } from '../../services.service';
import {SessionsService} from '../../authentication/sessions.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Router,NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-get-idrive',
  templateUrl: './get-idrive.component.html',
  styleUrls: ['./get-idrive.component.css']
})
export class GetIdriveComponent implements OnInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  allRegionNames = [];
  delAddress:string = "";
  selectedValue: number;
  allSubRegions = [];
  selectedReg: number;
  allColPoints = [];
  changeState;
  selectedCol: number;
  isCollection: boolean = false;
  isDelivery: boolean = false;

  isComprehensive:boolean = false;
  vehicleNames= [];
  airtimeNumber: string = '';
  companies= [];
  insuranceCompanySelect:string;
  insurancePeriodSelect: string;
  insuranceTypeSelect: string;
  vehicle:string;
  zinaraPeriodSelect:string;
  zbcPeriodSelect:string;
  vehicleValue:number=0;
  constructor(public session: SessionsService,private router: Router, private httpClient: HttpClient, private demo: DemoService) {
    var id: number = +localStorage.getItem('userId');
    // this.getIdrive();

    this.httpClient.post('http://108.61.174.41:7070/api/subscriptions/view/verified',
    {
      'id':id
    })
    .subscribe(data => {
     
      if (data) {        
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        let vehicleId = arr[0].map(a => a.id);
        this.vehicleNames = arr[0];
      } else {
        
      }
    });

    this.httpClient.get('http://108.61.174.41:7070/api/companies/view/all')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.companies = arr[0];
      }
    ) 
   }

  ngOnInit() {

    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
    })
  }
  getColPoints(){
    console.log(this.selectedReg)
    this.demo.post('http://108.61.174.41:7070/api/location/view/CollectionPointInSubRegion',
    {
      "id": this.selectedReg
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        //let regionIds = arr[0].map(a => a.id);
        this.allColPoints = arr[0];
        
        console.log(this.allRegionNames);
      })
  }

    onEditClick(){
    this.demo.post('http://108.61.174.41:7070/api/location/view/SubRegionsInRegion',
    {
      "id": this.selectedValue
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        //let regionIds = arr[0].map(a => a.id);
        this.allSubRegions = arr[0];
        
        console.log(this.allRegionNames);
      })
  }

  // postIdrive(){
  //   let d = this.id[0];
  //   let data : NavigationExtras = {
  //     queryParams: d
  //   } 
  //   console.log(data)

  //   this.router.navigate(['admin/userManagement/viewAgents/'+this.users[0].phoneNumber],data);
  // }
  
  getIdrive() {
    var id: number = +localStorage.getItem('userId');
    
    this.demo.post('http://108.61.174.41:7070/api/orders/create/quotation',
    {
      "airtimeNumber": this.airtimeNumber,
      "colPointId": +this.selectedReg,
      "collectionDelAdd": this.delAddress,
      "collectionType": this.changeState,
      "insuranceCompany": this.insuranceCompanySelect,
      "insurancePeriod": +this.insurancePeriodSelect,
      "insuranceType": this.insuranceTypeSelect,
      "processedBy": "",
      "requestChannel": "WEB",
      "requestedFor": localStorage.getItem('phoneNumber'),
      "userId": id,
      "vehicleRegistrationNumber": this.vehicle,
      "vehicleValue": this.vehicleValue,
      "zbcPeriod": +this.zbcPeriodSelect,
      "zinaraPeriod": +this.zinaraPeriodSelect
    })
      .subscribe(data => {
        if(data){
          this.successSwal.show();
        }
        else
        this.failedSwal.show();
      });
      }
      setInsType(){
        if(this.insuranceTypeSelect =="COMP"){
          this.isComprehensive = true;
        }
        else if(this.insuranceTypeSelect == "COMPPLUS"){
          this.isComprehensive = true;
        }
        else{
          this.isComprehensive = false;
          this.vehicleValue = 0;
        }
        
      }
  changeStatus(){
    if(this.changeState ==="delivery"){
      this.isCollection = false;
      this.isDelivery = true;
    }
    else if(this.changeState === "collection"){
      this.isDelivery = false;
      this.isCollection = true;
    }
    else{
      this.isDelivery = false;
      this.isCollection = false;
    }
  }
}
