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
  phoneNumber;
  email = '';
  region = '';
  subRegion = '';

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

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
    this.Address = '';
    this.colName= '';
    this.phoneNumber= '';
    this.subRegion= '';
    this.email= '';
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
