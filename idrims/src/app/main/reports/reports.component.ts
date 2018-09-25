import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  isBoAdmin;
  isSbAdmin;

  constructor() {
    if(localStorage.getItem('userGroup')==='ADMIN01'){
      this.isBoAdmin = true;
    }
    else if(localStorage.getItem('userGroup')==='ADMIN03'){
      this.isSbAdmin= true;
    }
   }

  ngOnInit() {
  }

}
