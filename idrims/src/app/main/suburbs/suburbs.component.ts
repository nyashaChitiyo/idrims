import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-suburbs',
  templateUrl: './suburbs.component.html',
  styleUrls: ['./suburbs.component.css']
})
export class SuburbsComponent implements OnInit {

  public suburbs= [];

  constructor(private demo: DemoService) { }

  ngOnInit() {
    this.demo.get('http://108.61.174.41:7070/api/location/view/allSuburbs')
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.suburbs = arr[0];
        console.log(this.suburbs);

      }
    ) ;
  }

}