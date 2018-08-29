import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  public regions= [];
  constructor(private demo: DemoService) { }


  ngOnInit() {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.regions = arr[0];
        console.log(this.regions);

      }
    ) 
  }

}
