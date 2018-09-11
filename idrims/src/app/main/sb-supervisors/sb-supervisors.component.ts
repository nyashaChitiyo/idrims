import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-sb-supervisors',
  templateUrl: './sb-supervisors.component.html',
  styleUrls: ['./sb-supervisors.component.css']
})
export class SbSupervisorsComponent implements OnInit {

  supervisor= [];

  constructor(private httpClient: HttpClient,private router: Router,private demo: DemoService) { 
    this.getsupervisors();
  }

//add URL allCustomers
  getsupervisors(){
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/group',
    {
      
        'searchString': 'ADMIN04'
      
    })
      .subscribe(
        (data:any[])=> {
          let arr = [];
          arr.push(data)
          this.supervisor = arr[0];
          console.log(arr[0]);
        }
      ) 
    }

    getSupervisor(){
      let d = this.supervisor[0];
      let data : NavigationExtras = {
        queryParams: d
      }
      console.log(data)
  
      this.router.navigate(['/userManagement/'+this.supervisor[0].phoneNumber],data);
    }
  ngOnInit() {
  }

}
