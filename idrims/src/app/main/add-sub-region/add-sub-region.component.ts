import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../demo.service';
@Component({
  selector: 'app-add-sub-region',
  templateUrl: './add-sub-region.component.html',
  styleUrls: ['./add-sub-region.component.css']
})
export class AddSubRegionComponent implements OnInit {
  
  allRegionNames= [];
  subRegionName = '';
  regionShortCode = '';
  regionName = '';

  constructor(private demo: DemoService) {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data['regionName']);
      this.allRegionNames = arr;
      // populate allregionnames [names] in drop down menu
      
      //then get all sub regions of that region 
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
    code: this.regionShortCode,
    name: this.subRegionName,
    region: this.regionName
  });
  }

}
 