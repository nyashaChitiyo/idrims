import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view-monthly-report',
  templateUrl: './view-monthly-report.component.html',
  styleUrls: ['./view-monthly-report.component.css']
})
export class ViewMonthlyReportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public monthly= [];
  public temp_var: Object = false;

  colpointID : string;
  userid : string;

  constructor( private demo: DemoService,private router: Router) { 
    this.getAll();
  }

  ngOnInit() {
 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    
  }

  getAll(){
    this.demo.get('http://108.61.174.41:7070/api/reports/view/all/month')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.monthly = arr[0];
      }
    )
  }

  getByCollectionPoint(){

    //console.log(userId+'user id is this')
    this.demo.post('http://108.61.174.41:7070/api/reports/view/all/month/collectionPointId',{
      "id": this.colpointID
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.monthly = arr[0];
        console.log(this.monthly);
        this.temp_var=true;
      }
    ) 
  }

  getByUserID(){
    this.demo.post('http://108.61.174.41:7070/api/reports/view/all/month/userId',{
      "id": this.userid
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.monthly = arr[0];
        console.log(this.monthly);
        this.temp_var=true;
      }
    ) 
  }


}
