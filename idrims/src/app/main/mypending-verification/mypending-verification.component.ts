import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mypending-verification',
  templateUrl: './mypending-verification.component.html',
  styleUrls: ['./mypending-verification.component.css']
})
export class MypendingVerificationComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public vehicles= [];
  public temp_var: Object = false;

  constructor( private demo: DemoService,private router: Router) { 
    this.getVehicle();
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    
  }

  getVehicle(){
    var userId: number = +localStorage.getItem('userId');
    //console.log(userId+'user id is this')
    this.demo.post('http://108.61.174.41:7070/api/subscriptions/view/unverified',{
      "id": userId
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.vehicles = arr[0];
        console.log(this.vehicles);
        this.temp_var=true;
      }
    ) 
  }
}
