import { Component, OnInit,ViewChild } from '@angular/core';
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DataService } from '../data.service';
@Component({
  selector: 'app-add-collection-point',
  templateUrl: './add-collection-point.component.html',
  styleUrls: ['./add-collection-point.component.css']
})
export class AddCollectionPointComponent implements OnInit {

  regions = [];
  isClicked=false;
  colName = '';
  Address = ''; 
  code = '';
  contactDetails='';
  phoneNumber;
  latitude: number;
  longitude: '';
  email = '';
  region = '';
  subRegion = '';
  allRegionNames = [];
  allSubRegions = [];
  selectedValue: number;
  selectedReg: number;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private demo: DemoService, private data:DataService) {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
    },
  error =>{
    this.data.error(error['message']);
  })
   }

   postColPoint(){
     if(this.validate()){
      this.isClicked=true;
       try{
   this.demo.post('http://108.61.174.41:7070/api/location/create/CollectionPoint',
    {
      'address': this.Address,
      'code': this.code,
      'contactPerson': this.contactDetails,
      'latitude': +this.latitude,
      'longitude': +this.longitude,
      'email': this.email,
      'name': this.colName,
      'phoneNumber': this.phoneNumber,
      'subRegion': this.selectedReg
    })
    .subscribe(data => {
      if (data['success'] === true) {
        this.isClicked = false;        
        this.successSwal.show();
        this.reset();
      } else {
        this.isClicked = false;
        this.failedSwal.show();
        
      }
    }, error => {
      this.isClicked = false;
      this.data.error(error['message'])
      this.failedSwal.show();
    });  }
    catch(error){
      this.data.error(''+error)
    }}
   }
   reset() {
    this.colName = '';
    this.Address = '';
    this.code = '';
    this.contactDetails='';
    this.phoneNumber
    this.email = '';
    this.region = '';
    this.subRegion = '';
  }
  validate(){
    if(this.colName){
      if(this.Address){
        if(this.code)
        {
          if(this.contactDetails)
          {
            if(this.phoneNumber){
              if(this.email){
                if(this.selectedValue){
                  if(this.selectedReg)
                  {
                     return true;
                  }
                  else{
                    this.data.error('Please enter Sub Region');
                  }
                }
                else{
                  this.data.error('Please enter region');
                }
              }
              else{
                this.data.error('Please enter Email');
              }
            }
            else {
              this.data.error('Please enter Phone Number');
            }
          }
          else{
            this.data.error('Please enter Contant Details');
          }
          }
          else{
            this.data.error('Please enter Code');
          }
        }
        else{
          this.data.error('Please enter Address');
        }
      }
    else{
      this.data.error('Please enter Collection Point Name');
    }
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
      }, error=>{
        this.isClicked = false;
        this.data.error(error['message']);
      })
  }
  ngOnInit() {

  }
}
