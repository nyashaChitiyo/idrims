import { Component, OnInit } from '@angular/core';
// import { ServicesService } from '../../services.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';
 
@Component({
  selector: 'app-view-agents',
  templateUrl: './view-agents.component.html',
  styleUrls: ['./view-agents.component.css']
})
export class ViewAgentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  users;
  userGroup:string;
  
  public temp_var: Object = false;

  constructor(private router: Router,  private demo: DemoService) {
 this.getUsers()
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  getAgent(user){ 
    console.log(user.phoneNumber);
    
    let d = user;
    let data : NavigationExtras = {
      queryParams: d
    } 
    console.log(data)

    this.router.navigate(['admin/userManagement/viewAgents/'+user.phoneNumber],data);
  }
  // onNameKeyUp(event:any){
  // this.name = event.target.value;
  // // this.found = false;
  // }
  getUsers(){
    // this.demo.post('http://108.61.174.41:7070/api/user/view/group',
    this.demo.post('http://108.61.174.41:7070/api/user/view/group',
  {
      'searchString': 'AGENT01'
  })
    .subscribe(
      (data: Response)=> {
        console.log(data);
        let arr = [];
        arr.push(data)
        this.users = arr[0];
        console.log(arr[0]);
        this.temp_var=true;
      }
    ) 
  }

}
 