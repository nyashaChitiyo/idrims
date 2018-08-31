import { Component, OnInit,ViewChild } from '@angular/core';
import {DemoService} from '../../demo.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Location} from '@angular/common';

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
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
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

  ngOnInit() {
  }
  getRegionName(){
/// take the value of onselected region name and assign it to region
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
      this.router.back();
      
    } else {
      console.log('failed',+ data);
      
    }
  }, error => {
    console.log(Response);
  })
}
  reset() {
    this.regionName = '';
    this.regionIds = '';
  }
}
 