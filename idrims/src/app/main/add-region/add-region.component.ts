import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {

  allPrints=[];
  selectedValue: string;
 

  id: 0;
  name: string;
  code: string;
  centralPrintingID;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient, private data:DataService) { 
    this.getPrintLocations()
  }

  ngOnInit() {
  }

  getPrintLocations(){

    this.httpClient.get('http://108.61.174.41:7070/api/centralPrinting/view/all')
        .subscribe(data => {
          let arr = [];
          arr.push(data);
          let arr1 = arr[0].map(a => a.name);
          let regionIds = arr[0].map(a => a.id);
          this.allPrints = arr[0];
          
          console.log(this.allPrints);
        });
       }

  postRegion(){
    if(this.validate()){
      try{
    this.httpClient.post('http://108.61.174.41:7070/api/location/create/Region',
  {
    'code':this.code,
    'name': this.name,
    'id': 0,
    'centralPrintingID' : +this.selectedValue
  })
  .subscribe(data => {
    if (data['success'] === true) {        
      this.successSwal.show();
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
catch(error){
  this.data.error(''+error)
}
    }

  }
  reset(){
    this.name = '';
    this.code = '';
    this.selectedValue ='';
  }

  validate(){
    if(this.name){
      if(this.code){
        if(this.selectedValue)
        {
                     return true;
          }
          else{
            this.data.error('please select printing Location');
          }
        }
        else{
          this.data.error('please enter Code');
        }
      }
    else{
      this.data.error('please enter Region Name');
    }
}

}
