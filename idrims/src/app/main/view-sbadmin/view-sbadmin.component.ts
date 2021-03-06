import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-view-sbadmin',
  templateUrl: './view-sbadmin.component.html',
  styleUrls: ['./view-sbadmin.component.css']
})
export class ViewSBadminComponent implements OnInit {

  users;
  userGroup:string;

  constructor(private data: DataService, private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 this.getUsers()
  }
  
  getAdmin(){
    let d = this.users[0];
    let data : NavigationExtras = {
      queryParams: d
    }
    console.log(data)

    this.router.navigate(['admin/userManagement/ViewAdmins/'+this.users[0].phoneNumber],data);
  }
  // onNameKeyUp(event:any){
  // this.name = event.target.value;
  // // this.found = false;
  // }
  getUsers(){
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/group',
  {
    
      'searchString': 'ADMIN03'
    
  })
    .subscribe( 
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.users = arr[0];
        console.log(arr[0]);
      }, error =>{
        this.data.error(error['error'].message);
      }
    ) 
  }
  ngOnInit() {
  }
}
