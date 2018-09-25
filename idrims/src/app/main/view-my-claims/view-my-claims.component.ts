import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-my-claims',
  templateUrl: './view-my-claims.component.html',
  styleUrls: ['./view-my-claims.component.css']
})
export class ViewMyClaimsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public claims= [];
  public temp_var: Object = false;
  constructor( private demo: DemoService,private router: Router) { 
  }

  ngOnInit() {
    var userId: number = +localStorage.getItem('userId');
    this.demo.post('http://108.61.174.41:7070/api/claims/view/userId',{
      "id": userId
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.claims = arr[0]; 
        console.log(this.claims);
        this.temp_var=true;
      }
    )
  }

}
