import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isTest = false;
  isAdmin = false;
  constructor(private router: Router, private httpClient: HttpClient) {
    const element = document.getElementById('body');
    element.classList.remove('login-page');
    element.classList.add('skin-blue');
    element.classList.add('sidebar-mini');
  }

  ngOnInit() {
    var userGroup: string = localStorage.getItem('userGroup');
    if(userGroup == 'ADMIN02'){
      this.isTest = true;
      this.isAdmin = false
    }
    else if(userGroup == 'ADMIN01'){
      this.isTest = false;
      this.isAdmin = true;
    }
    else{
      this.isTest = true;
    }
  }
}
