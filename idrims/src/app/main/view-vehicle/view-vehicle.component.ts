import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {

  vehicles=[];

  constructor(private httpClient: HttpClient) { 

    this.getVehicle();
  }

  getVehicle(){

    
  }

  ngOnInit() {
  }

}
