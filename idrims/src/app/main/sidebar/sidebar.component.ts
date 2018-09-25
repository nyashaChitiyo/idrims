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
  isSBadmin = false;
  isCustomer = false;
  isAgent = false; 
  isSupervisor = false;

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
      this.isAdmin = false;
     this.isSBadmin = false;
     this.isCustomer = false;
     this.isAgent = false;
     this.isSupervisor = false;
     
    }
    else if(userGroup == 'ADMIN01'){
      this.isTest = false;
      this.isAdmin = true;
      this.isSBadmin = false;
      this.isCustomer = false;
      this.isAgent = false;
      this.isSupervisor = false;
      
    }
    else if(userGroup == 'ADMIN03'){
      this.isTest = false;
      this.isAdmin = false;
      this.isSBadmin = true;
      this.isCustomer = false;
      this.isAgent = false;
      this.isSupervisor = false;
      
    }
    else if(userGroup == 'CUST01'){
      this.isTest = false;
      this.isAdmin = false;
      this.isSBadmin = false;
      this.isCustomer = true;
      this.isAgent = false;
      this.isSupervisor = false;
      
    }
    else if(userGroup == 'AGENT01'){
      this.isTest = false;
      this.isAdmin = false;
      this.isSBadmin = false;
      this.isCustomer = false;
      this.isAgent = true;
      this.isSupervisor = false;
      
    }
    else if(userGroup == 'ADMIN04'){
      this.isTest = false;
      this.isAdmin = false;
      this.isSBadmin = false;
      this.isCustomer = false;
      this.isAgent = false;
      this.isSupervisor = true;
    }
    else{
      this.isTest = true;
      this.isSBadmin = true;
    }
  }
}
