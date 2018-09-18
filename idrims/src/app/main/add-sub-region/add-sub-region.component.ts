import{Location} from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2'

@Component({
  selector: 'app-add-sub-region',
  templateUrl: './add-sub-region.component.html',
  styleUrls: ['./add-sub-region.component.css'] 
})
export class AddSubRegionComponent implements OnInit {
  
  selectedValue: string;
  allRegionNames= [];
  subRegionName : string;
  regionShortCode:string;
  regionName = '';
  regionIds = '';
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private demo: DemoService,private router: Location) {
    this.getRegionName();
   }

  ngOnInit() {
  }
  getRegionName(){

this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
      
      console.log(this.allRegionNames);
    });
   }

  postSubRegion(){
  this.demo.post('http://108.61.174.41:7070/api/location/create/SubRegion',
  {
    'code': this.regionShortCode,
    'name': this.subRegionName,
    'region': +this.selectedValue
  })
  .subscribe(data => {
    if (data['success'] === true) {        
      console.log(data['message'], + data['message']);
      this.successSwal.show();
      this.router.back();
      
      
    } else {
      console.log('failed',+ data);
      this.failedSwal.show();
      
    }
  }, error => {
    console.log(Response);
  })
}
  reset() {
    this.regionShortCode = '';
    this.subRegionName = '';
    this.regionName = '';
    this.regionIds = '';
  }
} 
 