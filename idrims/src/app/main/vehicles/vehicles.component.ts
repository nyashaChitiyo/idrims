import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicles= [];
 
  constructor(private httpClient: HttpClient, private demo: DemoService,private router: Router) { 
    this.getVehicle();
  }
  
  getId(vehicle){
    console.log(vehicle)
    this.router.navigate(['/vehicles'], vehicle);
  }

  ngOnInit() { 
  }

  getVehicle(){
    this.demo.post('http://108.61.174.41:7070/api/vehicles/view/verificationStatus',{
      "bool": false
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.vehicles = arr[0];

      }
    ) 
  }

  /*getVehicle(){
    this.demo.getVehicles()
    .subscribe(data => {
      let arr=[]; 
      //console.log(data)
      arr.push(data);
      this.vehicles = arr[0];
      //console.log(this.vehicles)
    });
  }*/
}
