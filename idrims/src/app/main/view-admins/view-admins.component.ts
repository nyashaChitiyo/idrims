import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.component.html',
  styleUrls: ['./view-admins.component.css']
})
export class ViewAdminsComponent implements OnInit {

  users;
  userGroup:string;
  dtOptions: DataTables.Settings = {};
  public temp_var: Object = false;
constructor(private data: DataService, private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 this.getUsers()
  } 
  
  getAdmin(user){
    console.log(user.phoneNumber);
   let d = user;
    let data : NavigationExtras = {
      queryParams: d
    }
    console.log(data)

    this.router.navigate(['admin/userManagement/ViewAdmins/'+user.phoneNumber],data);
  }

  getUsers(){
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/group',
  {
    
      'searchString': 'ADMIN01'
    
  })
    .subscribe(
      (data: Response)=> {
        console.log(data);
        let arr = [];
        arr.push(data)
        this.users = arr[0];
        console.log(arr[0]);
        this.temp_var=true;
      }, error => {
        this.data.error(error['error'].message)
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
