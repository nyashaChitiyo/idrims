import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html', 
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

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
  
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { 
    //this.inputText = "nyasha"
    console.log(this.agents);
  }
 
  ngOnInit() { 
    
    this.activatedRoute.queryParams.subscribe(params =>{
      this.agents = params;
      console.log(params);
      this.phoneNumber = params['phoneNumber'];
      this.firstname= params['firstname'];
      this.surname= params['lastname'];
      this.role= params['userGroup'];
      this.station= params['userStationName'];
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

  saveProfile(){

    this.httpClient.post('http://108.61.174.41:7070/api/user/activation',{
    'phoneNumberOrEmail' : this.phoneNumber,
    'status' : false

    })
    
    .subscribe(data => {
      console.log(this.saveProfile);
      if (data['success'] === true) {        
        this.successSwal.show();
      } else {
        console.log('failed',+ data);
        this.failedSwal.show();
        
      }
    }, error => {
      console.log(Response);
      this.failedSwal.show();
    }); 
  
  }

}
