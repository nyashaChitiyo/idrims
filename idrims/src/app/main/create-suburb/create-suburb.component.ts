import { Component, OnInit,ViewChild } from '@angular/core';
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-suburb',
  templateUrl: './create-suburb.component.html',
  styleUrls: ['./create-suburb.component.css']
})
export class CreateSuburbComponent implements OnInit {

  suburbs = [];

  suburbName = '';  
  code = '';
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
    })
  }

  postSuburb(){
    if(this.validate()){
      try{
  this.demo.post('http://108.61.174.41:7070/api/location/create/Suburb',
   {
     'code': this.code,
     'id': 0,
     'name': this.suburbName,
     'subRegion': this.selectedReg
   })

   .subscribe(data => {
     if (data['success'] === true) {        
       this.successSwal.show();
       console.log(data['message'], + data['message']);
       this.reset();
     } else {
       console.log('failed',+ data);
       this.failedSwal.show();
       
     }
   }, error => {
     console.log(Response);
     this.failedSwal.show();
   });  }
   catch(error){
     this.data.error(''+error)
   }}
  }
  reset() {
   this.suburbName = '';
   this.code = '';
   this.region = '';
   this.subRegion = '';
 }
  validate(){
    if(this.code){
        if(this.suburbName)
        {
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
            this.data.error('Please enter Suburb Name ');
          }
        }
    else{
      this.data.error('Please enter Suburb Code');
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
      })
  }

  ngOnInit() {
  }

}
