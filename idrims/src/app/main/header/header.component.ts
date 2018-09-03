import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../authentication/sessions.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullName: string;
  userType: string;
  userStation: string;
  unverifiedcount = [];

  constructor(private session: SessionsService, private router: Router,private httpClient: HttpClient) {
    this.fullName = localStorage.getItem('fullName');
    this.userType = localStorage.getItem('userType');
    this.userStation = localStorage.getItem('userStation');
    this.countUnverified();
  }

  ngOnInit() {
  }

  countUnverified(){
    this.httpClient.get('http://108.61.174.41:7070/api/counters/vehicles/unverified')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.unverifiedcount = arr[0];
        // console.log(this.unverifiedcount);
      }
    )  
  }

  logout() {
    this.session.logout();
    this.router.navigate(['login']);
  }

}
