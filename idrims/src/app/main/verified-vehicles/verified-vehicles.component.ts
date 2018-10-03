import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-verified-vehicles',
  templateUrl: './verified-vehicles.component.html',
  styleUrls: ['./verified-vehicles.component.css']
})
export class VerifiedVehiclesComponent implements OnInit {

 dtOptions: DataTables.Settings = {};
  public vehicles;
  public temp_var: Object = false;

  isBackOffice;
  isSystem;

  constructor( private demo: DemoService,private router: Router, private data:DataService) { 
    this.getVehicle();

    if(localStorage.getItem('userGroup')==='ADMIN01'){
      this.isBackOffice = true;
    }   
    if(localStorage.getItem('userGroup')==='ADMIN02'){
      this.isSystem = true;
    }

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  getVehicle(){
    this.demo.post('http://108.61.174.41:7070/api/vehicles/view/verificationStatus',{
      "bool": true
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.vehicles = arr[0];
        this.temp_var=true;
      }, error=>{
        this.data.error(error['error'].message);
      }
    ) 
  }
}
