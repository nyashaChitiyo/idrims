import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {DataService} from '../data.service';
@Component({
  selector: 'app-collection-points',
  templateUrl: './collection-points.component.html',
  styleUrls: ['./collection-points.component.css']
})
export class CollectionPointsComponent implements OnInit {

  public regions;

  constructor(private data: DataService, private demo: DemoService) { }

  ngOnInit() {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allCollectionPoints')
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.regions = arr[0];
        console.log(this.regions);

      }, error=>{
        this.data.error(error['error'].message);
      }
    ) ;
  }

}
