import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.css']
})
export class AgentManagementComponent implements OnInit {

 
  users= [];
  userGroup:string;
  dtOptions: DataTables.Settings = {};
  public temp_var: Object = false;

  constructor(private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 this.getUsers()
  }
  
  getAgent(){
    let d = this.users[0];
    let data : NavigationExtras = {
      queryParams: d
    }
  
    if(localStorage.getItem('userGroup')==='ADMIN01')
    this.router.navigate(['backOffice/userManagement/ViewAdmins/'+this.users[0].phoneNumber], data)
    else 
    this.router.navigate(['userManagement/'+this.users[0].phoneNumber],data);
  }
  // onNameKeyUp(event:any){
  // this.name = event.target.value;
  // // this.found = false;
  // }
  getUsers(){
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/group',
  {
      'searchString': 'AGENT01'
  })
    .subscribe(
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.users = arr[0];
        console.log(arr[0]);
        this.temp_var = true;
      }
    ) 
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
}
 