import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles;
  dtOptions: DataTables.Settings = {};
  public temp_var: Object = false;
  isBackOffice;
 
  constructor(private data:DataService, private httpClient: HttpClient, private demo: DemoService,private router: Router) { 
    this.getVehicle();

    if(localStorage.getItem('userGroup')==='ADMIN01'){
      this.isBackOffice = true;
    }
  }
  
  getId(vehicle){
    console.log(vehicle)
    this.router.navigate(['/vehicles'], vehicle);
  }

  ngOnInit() { 
    this.dtOptions = {
      order: [[1, "desc"]],
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
 
  getVehicle(){
    this.demo.post('http://108.61.174.41:7070/api/vehicles/view/verificationStatus',{
      "bool": false
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        console.log(data)
        arr.push(data)
        this.vehicles = arr[0];
        this.temp_var=true;
      }, error=>{
        this.data.error(error['error'].message);
      }
    ) 
  }
}
