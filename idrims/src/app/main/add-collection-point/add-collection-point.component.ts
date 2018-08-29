import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../demo.service';
@Component({
  selector: 'app-add-collection-point',
  templateUrl: './add-collection-point.component.html',
  styleUrls: ['./add-collection-point.component.css']
})
export class AddCollectionPointComponent implements OnInit {

  regions = [];

  colName = '';
  Address = '';
  phoneNumber;
  email = '';
  region = '';
  subRegion = '';

  constructor(private demo: DemoService) {

   }

   postColPoint(){
     this.demo.post('http://108.61.174.41:7070/api/location/create/CollectionPoint',
    {
      'address': this.Address,
      'email': this.email,
      'name': this.colName,
      'phoneNumber': this.phoneNumber,
      'subRegion': this.subRegion
    })
   }

  ngOnInit() {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data['na']);
      this.regions = arr;
      // populate region [names] in drop down menu
    })
  }
}
