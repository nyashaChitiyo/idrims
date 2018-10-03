import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {DataService} from '../data.service'

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  allPrints=[];
  public regions;
  constructor(private demo: DemoService, private data: DataService) { 

    this.getPrintLocations()
  }


  ngOnInit() {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.regions = arr[0];
        console.log(this.regions);

      }, error=>{
        this.data.error(error['message']);
      }
    ) 
  }

  getPrintLocations(){

    this.demo.get('http://108.61.174.41:7070/api/centralPrinting/view/all')
        .subscribe(data => {
          let arr = [];
          arr.push(data);
          let arr1 = arr[0].map(a => a.name);
          let regionIds = arr[0].map(a => a.id);
          this.allPrints = arr[0];
          
          console.log(this.allPrints);
        }, error =>{
          this.data.error(error['message']);
        });
       }

}
