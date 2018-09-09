import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  vehicleVRN: any;
  agents:any;
  vehicle:any;
  page=1;
  phoneNumber: string;
  firstname: string;
  surname: string;
  role: string;
  station: string;
  userStatus: boolean ;
  isEdit: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { 
    //this.inputText = "nyasha"
    console.log(this.agents);
  }
 
  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(params =>{
     // this.vehicleVRN = params['phoneNumber'];
     //this.inputText = params['phoneNumber'];
     // console.log('Hello '+this.inputText);
      //this.getVehicle();
      this.agents = params;
      console.log(params);
      this.phoneNumber = params['phoneNumber'];
      this.firstname= params['firstname'];
      this.surname= params['lastname'];
      this.role= params['userGroup'];
      this.station= params['userStation'];
      this.userStatus = params['userStatus'];
    })
  } 

  isDisabled(){
    console.log(this.isEdit)
    this.isEdit = false;
  }
  async getVehicle(event ?: any){
    if(event){
      this.vehicle = null;
    }
    try{
      const data = await this.httpClient.get(
        `http://108.61.174.41:7070/api/vehicles/view/all/${this.vehicleVRN}?page=${this.page -1}`
      );
      data['success']
      ?(this.vehicle = data)
      : console.log(['error']);
    }
    catch(error){
     console.log(['error']);
    }
  }
}
