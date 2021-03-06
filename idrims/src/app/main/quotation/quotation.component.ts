import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from "jquery";
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServicesService } from '../../services.service';
import {SessionsService} from '../../authentication/sessions.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import{DataService} from '../data.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  allRegionNames = [];
  changeStatePN;
  isNew
  delAddress:string;
  selectedValue;
  allSubRegions = [];
  selectedReg;
  allColPoints = [];
  allSuburbs = [];
  changeState;
  selectedCol: number =0;
  selectedSurb;
  isCollection: boolean = false;
  isDelivery: boolean = false;
  isAgent;
  isCustomer;
  vehicle;
  isComprehensive:boolean = false;
  vehicleNames= [];
  airtimeNumber: string = '';
  companies= [];
  insuranceCompanySelect:string;
  insurancePeriodSelect: string;
  insuranceTypeSelect: string;

  isClick=false;
  isPrefC;
  isPrefD;
  isPreffered;
  zinaraPeriodSelect:string;
  zbcPeriodSelect:string;
  vehicleValue:number=0;
  vehicleRegistrationNumber1;
  customerId;
  myAddress;
  myCollectionPoint;
  changeStatePre;
  prefData;


  constructor(private data: DataService, private activatedRoute: ActivatedRoute, public session: SessionsService,private router: Router, private httpClient: HttpClient, private demo: DemoService) {
    this.activatedRoute.params.subscribe(params =>{
      this.vehicleRegistrationNumber1 = params['vehicleRegistrationNumber'];
    })
    if(localStorage.getItem('userGroup')==='CUST01'){
      this.isCustomer = true;
    }
    else if(localStorage.getItem('userGroup')==='AGENT01'){
      this.isAgent= true;
    }
    if(this.isCustomer){
    var id = localStorage.getItem('userId');
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/deliveryAddress/userId',
    {
      "id": +id
    })
      .subscribe(data1 => {
        if(data1){
          this.prefData = data1;
          this.myAddress = data1['streetAdrress'];
          this.myCollectionPoint = data1['collectionPointName'];
          console.log(data1)
        }
      }, error=>{
        this.data.error(error['error'].message);
      });
   }
  }
  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params =>{
      console.log(params)
      this.insuranceCompanySelect = params['insuranceCompany'];
      this.insuranceTypeSelect = params['insuranceType'];
      this.insurancePeriodSelect = params['insurancePeriod'];
      this.vehicleRegistrationNumber1 = params['vehicleRegistrationNumber'];
      this.vehicle = params['vehicleRegistrationNumber'];
      this.zbcPeriodSelect = params['zbcPeriod'];
      this.zinaraPeriodSelect = params['zinaraPeriod']
    })
    var id: number = +localStorage.getItem('userId');

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
    }, error=>{
      this.data.error(error['mesage']);
    });

    this.httpClient.get('http://108.61.174.41:7070/api/companies/view/all')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.companies = arr[0];
      }, error=>{
        this.data.error(error['error'].message);
      }
    ) 
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
    }, error=>{
      this.data.error(error['error'].message);
    })
  }

  getCustomerIdrive() {
    var id: number = +localStorage.getItem('userId');
    
    this.demo.post('http://108.61.174.41:7070/api/orders/create/quotation',
    {
      "airtimeNumber": this.airtimeNumber,
      "collectionPointId": +this.selectedCol,  
      "collectionDelAdd": this.delAddress,
      "fullDeliveryAddress": [this.selectedValue,this.selectedReg,this.selectedSurb,this.delAddress],
      "collectionType": this.changeState,
      "customerIdNumber": this.customerId,
      "customerPhoneNumber": localStorage.getItem('phoneNumber'),
      "insuranceCompany": this.insuranceCompanySelect,
      "insurancePeriod": +this.insurancePeriodSelect,
      "insuranceType": this.insuranceTypeSelect,
      "processedBy": "",
      "requestChannel": "Web",
      "userId": +localStorage.getItem('userId'),
      "vehicleRegistrationNumber": this.vehicleRegistrationNumber1,
      "vehicleValue": this.vehicleValue,
      "zbcPeriod": +this.zbcPeriodSelect,
      "zinaraPeriod": +this.zinaraPeriodSelect
    })
      .subscribe(data1 => {
        if(data1){
          this.successSwal.show();
          this.isClick = false;
          let d = data1
          let data : NavigationExtras = {
            queryParams: d
          }
          this.router.navigate(['agent/getidrive/'+this.vehicleRegistrationNumber1],data);
        }
        else
        this.failedSwal.show();
      },error=>{
        this.data.error(error['error'].message);
      });
      }
  getColPoints(){
    if(this.isCollection){
     
    this.demo.post('http://108.61.174.41:7070/api/location/view/CollectionPointInSubRegion',
    {
      "id": +this.selectedReg
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        //let regionIds = arr[0].map(a => a.id);
        this.allColPoints = arr[0];
        
        console.log(this.allRegionNames);
      }, error=>{
        this.data.error(error['error'].message);
        this.isClick=true;
      })}
      else if(this.isDelivery){
        this.demo.post('http://108.61.174.41:7070/api/location/view/SuburbInSubRegion',
        {
          "id": +this.selectedReg
        })
          .subscribe(data => {
            let arr = [];
            arr.push(data);
            let arr1 = arr[0].map(a => a.name);
            //let regionIds = arr[0].map(a => a.id);
            this.allSuburbs = arr[0];
            
            console.log(data);
      },error=>{
        this.data.error(error['error'].message);
      })}
  }

  getSuburbs(){
    console.log(this.selectedReg)
    this.demo.post('http://108.61.174.41:7070/api/location/view/SuburbInSubRegion',
    {
      "id": this.selectedReg
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        //let regionIds = arr[0].map(a => a.id);
        this.allSuburbs = arr[0];
        
        console.log(this.allSuburbs);
      }, error=>{
        this.data.error(error['error'].message);
      })
  }
    onEditClick(){
    if(this.isPrefC || this.changeState == 'C')  {
    this.demo.post('http://108.61.174.41:7070/api/location/view/SubRegionsInRegionWithCollection',
    {
      "id": +this.selectedValue
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        //let regionIds = arr[0].map(a => a.id);
        this.allSubRegions = arr[0];
        
        console.log(this.allRegionNames);
      },error=>{
        this.data.error(error['error'].message);
      })
    }
    else{
    
      this.demo.post('http://108.61.174.41:7070/api/location/view/SubRegionsInRegion',
      {
        "id": +this.selectedValue
      })
        .subscribe(data => {
          let arr = [];
          arr.push(data);
          let arr1 = arr[0].map(a => a.name);
          //let regionIds = arr[0].map(a => a.id);
          this.allSubRegions = arr[0];
          
          console.log(this.allRegionNames);
        }, error=>{
          this.data.error(error['error'].message);
        })}
  }
 
  
  getIdrive() {
    
    if(this.isPreffered || (this.validateCustomer() && (this.validateIsCollection() || this.validateIsDelivery()))){
    this.isClick = true;
   if(localStorage.getItem('userGroup')==='CUST01'){
    var id: number = +localStorage.getItem('userId');
    let fullDeliveryAddress = [];
    var colPointId:number;
    var collectionType: string;

    if(this.isPreffered){
      if(this.isPrefC){
       colPointId = this.prefData['collectionPointId']
      collectionType = 'C';
      fullDeliveryAddress = null; 
      }
      else if(this.isPrefD){
        colPointId = this.prefData['collectionPointId'];
        collectionType = 'D';
        fullDeliveryAddress = [this.prefData['regionId'], this.prefData['subRegionId'],this.prefData['suburbId'],this.prefData['streetAdrress']];
      }
    }
    else{
    if(this.changeState == 'D'){ 
      colPointId = this.selectedCol;
      collectionType = this.changeState;
      console.log(colPointId+'in C if statement')
      fullDeliveryAddress = [this.selectedValue,this.selectedReg,this.selectedSurb,this.delAddress];
    }
    else if(this.changeState == 'C'){
      colPointId = this.selectedCol;
    collectionType = this.changeState;
    fullDeliveryAddress = null;}}
    /*let a =     {
      "airtimeNumber": this.airtimeNumber,
      "collectionPointId": +colPointId,
      "collectionType": collectionType,
      "customerIdNumber": localStorage.getItem('nationalId'),
      "customerPhoneNumber": localStorage.getItem('phoneNumber'),
      "fullDeliveryAddress": fullDeliveryAddress,
      "insuranceCompany": this.insuranceCompanySelect,
      "insurancePeriod": +this.insurancePeriodSelect,
      "insuranceType": this.insuranceTypeSelect,
      "processedBy": "",
      "requestChannel": "WEB",
      "userId": id,
      "vehicleRegistrationNumber": this.vehicle,
      "vehicleValue": this.vehicleValue,
      "zbcPeriod": +this.zbcPeriodSelect,
      "zinaraPeriod": +this.zinaraPeriodSelect
    }

    console.log(a)*/
    this.demo.post('http://108.61.174.41:7070/api/orders/create/quotation',
    {
      "airtimeNumber": this.airtimeNumber,
      "collectionPointId": +colPointId,
      "collectionType": collectionType,
      "customerIdNumber": localStorage.getItem('nationalId'),
      "customerPhoneNumber": localStorage.getItem('phoneNumber'),
      "fullDeliveryAddress": fullDeliveryAddress,
      "insuranceCompany": this.insuranceCompanySelect,
      "insurancePeriod": +this.insurancePeriodSelect,
      "insuranceType": this.insuranceTypeSelect,
      "processedBy": "",
      "requestChannel": "WEB",
      "userId": id,
      "vehicleRegistrationNumber": this.vehicle,
      "vehicleValue": this.vehicleValue,
      "zbcPeriod": +this.zbcPeriodSelect,
      "zinaraPeriod": +this.zinaraPeriodSelect
    })
      .subscribe(data1 =>{
        if(data1){
          this.successSwal.show();
          
          let d = data1
          let data : NavigationExtras = {
            queryParams: d
          }
          this.router.navigate(['customer/getIdrive/'+this.vehicle],data);
        }
        else
        this.failedSwal.show();
      }, error=>{
        this.isClick=false;
        this.data.error(error['error'].message);
        console.log(error)
      });}
      else if(localStorage.getItem('userGroup')==='AGENT01'){
        this.getCustomerIdrive();
      }
      }
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
      changeStatuPN(){ 
        
        if(this.changeStatePN ==='N'){
          this.isPreffered = false;
          this.isNew = true;
        }
        else if(this.changeStatePN === 'P'){
          if(this.prefData){
          this.isNew = false;
          this.isPreffered = true;
        }
        else{
          this.data.error('Register Address to continue');
        }
      }
      }
    changeStatusPreffered(){
      if(this.changeStatePre ==='PD'){
        this.isPrefC = false;
        this.isPrefD = true;
      }
      else if(this.changeStatePre === 'PC'){
        this.isPrefD = false;
        this.isPrefC = true;
      }
    }
  changeStatus(){
    if(this.changeState ==="D"){
      this.isCollection = false;
      this.isDelivery = true;
    }
    else if(this.changeState === "C"){
      this.isDelivery = false;
      this.isCollection = true;
    }
    else{
      this.isDelivery = false;
      this.isCollection = false;
    }
  }

  validateCustomer(){
      if(this.insuranceCompanySelect){
        if(this.insuranceTypeSelect)
        {
          if(this.insurancePeriodSelect)
          {
                if(this.changeState){
                     return true;
                }
                else{
                  this.data.error('Please select Collection or Delivery ');
                }
          }
          else{
            this.data.error('Please select Insurance Period');
          }
          }
          else{
            this.data.error('Please select Insurance Type');
          }
        }
        else{
          this.data.error('Please select Insurance Company');
        }
}
validateIsCollection(){
  if(this.selectedValue){
    if(this.selectedReg){
      if(this.selectedCol)
      {
        if(this.airtimeNumber)
        {
                   return true;
        }
        else{
          this.data.error('Please enter airtime number');
        }
        }
        else{
          this.data.error('Please select Collection Point');
        }
      }
      else{
        this.data.error('Please select Sub Region');
      }
    }
  else{
    this.data.error('Please Select Region');
  }
}

validateIsDelivery(){
  if(this.selectedValue){
    if(this.selectedReg){
      if(this.selectedSurb)
      {
        if(this.delAddress)
        {
                   return true;
        }
        else{
          this.data.error('Please enter delivery address');
        }
        }
        else{
          this.data.error('Please select Surbub');
        }
      }
      else{
        this.data.error('Please select Sub Region');
      }
    }
  else{
    this.data.error('Please Select Region');
  }
}
}
