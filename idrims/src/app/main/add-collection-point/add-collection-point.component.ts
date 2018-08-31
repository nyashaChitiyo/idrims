import { Component, OnInit,ViewChild } from '@angular/core';
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-add-collection-point',
  templateUrl: './add-collection-point.component.html',
  styleUrls: ['./add-collection-point.component.css']
})
export class AddCollectionPointComponent implements OnInit {

  regions = [];

  colName = '';
  Address = '';
  code = '';
  contactDetails='';
  phoneNumber
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

  constructor(private demo: DemoService) {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
    })
   }

   postColPoint(){
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
        this.successSwal.show();
        setTimeout(function(){ this.successSwal.showAlert(); },0)
        console.log(data['message'], + data['message']);
        this.reset();
      } else {
        console.log('failed',+ data);
        this.failedSwal.show();
        
      }
    }, error => {
      console.log(Response);
      this.failedSwal.show();
    });  
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
  ngOnInit() {

  }
}
