import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../demo.service';
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

  constructor(private demo: DemoService) {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
      
      console.log(this.allRegionNames);
    })
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
      
    } else {
      console.log('failed',+ data);
      
    }
  }, error => {
    console.log(Response);
  }); ;
  }

}
 