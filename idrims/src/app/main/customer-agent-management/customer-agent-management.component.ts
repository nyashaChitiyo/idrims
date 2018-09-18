import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-agent-management',
  templateUrl: './customer-agent-management.component.html',
  styleUrls: ['./customer-agent-management.component.css']
})
export class CustomerAgentManagementComponent implements OnInit {
   isSbAdmin;
  constructor() { 
    if(localStorage.getItem('userGroup') === 'ADMIN03'){
      this.isSbAdmin = true;
    }
  }

  ngOnInit() {
  }

}
