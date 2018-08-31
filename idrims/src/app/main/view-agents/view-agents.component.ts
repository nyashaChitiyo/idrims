import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-view-agents',
  templateUrl: './view-agents.component.html',
  styleUrls: ['./view-agents.component.css']
})
export class ViewAgentsComponent implements OnInit {

  users= [];
  userGroup:string;

  constructor(private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 this.getUsers()
  }
  
  getAgent(){
    let d = this.users[0];
    let data : NavigationExtras = {
      queryParams: d
    }
    console.log(data)

    this.router.navigate(['/userManagement/'+this.users[0].phoneNumber],data);
  }
  // onNameKeyUp(event:any){
  // this.name = event.target.value;
  // // this.found = false;
  // }
  getUsers(){
    this.httpClient.post('http://108.61.174.41:7070/api/view/group',
  {
    
      'searchString': 'Agent'
    
  })
    .subscribe(
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.users = arr[0];
        console.log(arr[0]);
      }
    ) 
  }
  ngOnInit() {
  }
}
 