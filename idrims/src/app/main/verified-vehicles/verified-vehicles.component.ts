import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verified-vehicles',
  templateUrl: './verified-vehicles.component.html',
  styleUrls: ['./verified-vehicles.component.css']
})
export class VerifiedVehiclesComponent implements OnInit {

  public vehicles= [];
  constructor( private demo: DemoService,private router: Router) { 
    this.getVehicle();
  }

  ngOnInit() {
  }

  getVehicle(){
    this.demo.post('http://108.61.174.41:7070/api/vehicles/view/verificationStatus',{
      "bool": true
    })
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.vehicles = arr[0];
        console.log(this.vehicles);

      }
    ) 
  }
}
