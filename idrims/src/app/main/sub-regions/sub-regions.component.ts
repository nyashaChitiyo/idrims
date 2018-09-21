import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-sub-regions',
  templateUrl: './sub-regions.component.html',
  styleUrls: ['./sub-regions.component.css']
})
export class SubRegionsComponent implements OnInit {

  public regions= [];
  public regioNames =[];
  constructor(private demo: DemoService) { 

  }

  ngOnInit() {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allSubRegions')
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.regions = arr[0];
        console.log(this.regions);

      }
    );
  }

}
