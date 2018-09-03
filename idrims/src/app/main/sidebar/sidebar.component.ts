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
  constructor(private router: Router, private httpClient: HttpClient) {
    const element = document.getElementById('body');
    element.classList.remove('login-page');
    element.classList.add('skin-blue');
    element.classList.add('sidebar-mini');
  }

  ngOnInit() {
    var userGroup: string = localStorage.getItem('userGroup');
    if(userGroup == 'System Admin'){
      this.isTest = true;
    }
    else if(userGroup == 'Admin'){
      this.isTest = false;
    }
    else{
      this.isTest = true;
    }
  }
}
