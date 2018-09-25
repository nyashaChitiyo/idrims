import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from "jquery";
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Location} from '@angular/common';
import { ServicesService } from '../../services.service';
import {SessionsService} from '../../authentication/sessions.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  firstName:string;
  lastName:string;
  nationalId:string;
  phoneNumber:string;
  email:string;
  userId: number;
  allRegionNames = [];
  delAddress:string = "";
  selectedValue: string="";
  allSubRegions = [];
  selectedReg: string="";
  allColPoints = [];
  allSuburbs = [];
  changeState;
  selectedCol: number =0;
  selectedSurb:string="";
  isCollection: boolean = false;
  isDelivery: boolean = false;
  isAgent;
  isCustomer;
  vehicle: string="";
  isComprehensive:boolean = false;
  vehicleNames= [];
  oldPin;
  streetAddress:string;
  newPin;
  confirmPin;
  
  isAddAddress= false;
  isResetPassword = false;
  dataAddress;
  constructor(private location: Location, private data: DataService, private activatedRoute: ActivatedRoute, public session: SessionsService,private router: Router, private httpClient: HttpClient, private demo: DemoService) {
    var id: number = +localStorage.getItem('userId');
    console.log(id+'daKASLNNCJKSNKCNSDNkXN')
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/deliveryAddress/userId',
    {
      "id": +id
    })
      .subscribe(data1 => {
        if(data1){
          this.dataAddress = data1
          console.log(this.dataAddress)
          console.log(this.dataAddress.collectionPointName)
          this.streetAddress = this.dataAddress.streetAdrress
          console.log(this.streetAddress)
          console.log('nyashasnas'.length)
        }
      });
    this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');
    this.nationalId = localStorage.getItem('nationalId');
    this.phoneNumber = localStorage.getItem('phoneNumber');


   }

  ngOnInit() {
    
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
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
            
            console.log(this.allRegionNames);
      })}
  }

  AddAddress(){
    this.isResetPassword = false;
    this.isAddAddress = true;
  }

  ResetPassword(){
    this.isAddAddress = false;
    this.isResetPassword = true;
  }
  getSuburbs(){
    console.log(this.selectedReg)
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
        
        console.log(this.allSuburbs);
      })
  }
    onEditClick(){
    this.demo.post('http://108.61.174.41:7070/api/location/view/SubRegionsInRegion',
    {
      "id": +this.selectedValue
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
       
        this.allSubRegions = arr[0];
        
        console.log(this.allRegionNames);
      })
  }

  changeLocation(){
    if(this.validateAddress() && (this.validateCollection() || this.validateDelivery())){
    if(!(this.dataAddress)) {
    let arr1 = this.allColPoints.find(a => a.id == this.selectedCol);
      if(this.isCollection){
      this.demo.post('http://108.61.174.41:7070/api/user/create/deliveryAddress',
      {
        "collectionPointId": +this.selectedCol,
        "collectionPointName": arr1['name'],
        "id": 0,
        "regionId": this.selectedValue,
        "streetAdrress": "",
        "subRegionId": this.selectedReg,
        "suburbId": 0,
        "userId": +localStorage.getItem('userId')
      })
            .subscribe(data => {
              if(data){
                this.router.navigate(['/customer/profile']);
              this.successSwal.show();
              }
              else
              this.failedSwal.show();
            })
        }
        else if(this.isDelivery){
          this.demo.post('http://108.61.174.41:7070/api/user/create/deliveryAddress',
          {
            "collectionPointId": 0,
            "collectionPointName": '',
            "id": 0,
            "regionId": this.selectedValue,
            "streetAdrress": this.delAddress,
            "subRegionId": this.selectedReg,
            "suburbId": this.selectedSurb,
            "userId": +localStorage.getItem('userId')
          })
                .subscribe(data => {
                  if(data){
                    this.router.navigate(['/customer/profile']); 
                  this.successSwal.show();
                  }
                  else
                  this.failedSwal.show();
                })
        }
      }
      else{
        this.changeDelivery();
      console.log(this.dataAddress.id)
      }
    }
  }
  changeDelivery(){
    let arr1 = this.allColPoints.find(a => a.id == this.selectedCol);
    this.demo.post('http://108.61.174.41:7070/api/user/update/deliveryAddress',
    {
      "collectionPointId":  +this.selectedCol,
      "collectionPointName": this.dataAddress.collectionPointName,
      "id": this.dataAddress.id,
      "regionId": this.selectedValue,
      "streetAdrress": this.delAddress,
      "subRegionId": this.selectedReg,
      "suburbId": this.selectedSurb,
      "userId": +localStorage.getItem('userId')
    })
          .subscribe(data => {
            if(data){
              this.router.navigate(['/customer/profile']);
            this.successSwal.show();
            }
            else
             this.failedSwal.show();
          })
    
  }

  changePin(){
    if(this.validatePin()){
    if(this.newPin === this.confirmPin){
    this.demo.post('http://108.61.174.41:7070/api/user/profile/changePassword',
    {
    
        "newPassword": this.newPin,
        "oldPassword": this.oldPin,
        "userId": +localStorage.getItem('userId')
    
    })
          .subscribe(data => {
            if(data){
            this.successSwal.show();
            }
            else
             this.failedSwal.show();
          })
        } 
        else
        this.data.error('your new passwords do not match');
  }}
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
  validatePin(){
    if(this.oldPin){
      if(this.newPin){
        if(this.confirmPin){
          return true;
        }
        else{
          this.data.error('please enter confirmation pin')
        }
      } 
      else{
        this.data.error('please enter new pin');
      }
    }
    else{
      this.data.error('please enter old pin');
    }
  }

  validateAddress(){
    if(this.changeState){
      if(this.selectedValue){
        if(this.selectedReg){
          return true;
        }
        else{
          this.data.error('please select sub region')
        }
      } 
      else{
        this.data.error('please select region');
      }
    }
    else{
      this.data.error('please select delivery or collection ');
    } 
  }
  validateCollection(){
    if(this.selectedCol){
      return true;
    }
    else{
      return false;
     // this.data.error('please select collection Point')
    }
  }

  validateDelivery(){
    if(this.selectedSurb){
      if(this.delAddress){
        return true;
      }
      else{
        this.data.error('please enter Delivery Address')
      }
    } 
    else{
      this.data.error('please select surbub');
    }
  }
}
