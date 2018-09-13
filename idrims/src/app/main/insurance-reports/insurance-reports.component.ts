import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from "jquery";
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServicesService } from '../../services.service';
import {SessionsService} from '../../authentication/sessions.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Router,NavigationExtras,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-insurance-reports',
  templateUrl: './insurance-reports.component.html',
  styleUrls: ['./insurance-reports.component.css']
})
export class InsuranceReportsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public insurances= [];
  public temp_var: Object = false;

  changeState;
  isCollectionPoint: boolean = false;
  isUserId: boolean = false;

  colpointID : string;
  userid : string;

  allRegionNames = [];  
  selectedValue: number;
  allSubRegions = [];
  selectedReg: number;
  allColPoints = [];

  constructor(private activatedRoute: ActivatedRoute, public session: SessionsService,private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 
    this.getAll();
  }

  ngOnInit() {

    this.demo.get('http://108.61.174.41:7070/api/location/view/allRegions')
    .subscribe(data => {
      let arr = [];
      arr.push(data);
      let arr1 = arr[0].map(a => a.name);
      let regionIds = arr[0].map(a => a.id);
      this.allRegionNames = arr[0];
    })
 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    
  }

  getAll(){
    this.demo.get('http://108.61.174.41:7070/api/reports/view/insurance/all')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.temp_var=true;
        this.insurances = arr[0];
      }
    )
  }

  getByCollectionPoint(){

    //console.log(userId+'user id is this')
    this.demo.post('http://108.61.174.41:7070/api/reports/view/insurance/collectionPoint',{
      "id": +this.selectedReg
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.insurances = arr[0];
        console.log(this.insurances);
        this.temp_var=true;
      }
    ) 
  }
  
  getByUserID(){
    this.demo.post('http://108.61.174.41:7070/api/reports/view/insurance/userId',{
      "id": this.userid
    })
    .subscribe(
      (data: Response)=> {
        let arr = [];
        arr.push(data)
        this.insurances = arr[0];
        console.log(this.insurances);
        this.temp_var=true;
      }
    ) 
  }

  getColPoints(){
    console.log(this.selectedReg)
    this.demo.post('http://108.61.174.41:7070/api/location/view/CollectionPointInSubRegion',
    {
      "id": this.selectedReg
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        //let regionIds = arr[0].map(a => a.id);
        this.allColPoints = arr[0];
        
        console.log(this.allRegionNames);
      })
  }

    onEditClick(){
    this.demo.post('http://108.61.174.41:7070/api/location/view/SubRegionsInRegion',
    {
      "id": this.selectedValue
    })
      .subscribe(data => {
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        //let regionIds = arr[0].map(a => a.id);
        this.allSubRegions = arr[0];
        
        console.log(this.allRegionNames);
      })
  }
  changeStatus(){
    if(this.changeState ==="userID"){
      this.isCollectionPoint = false;
      this.isUserId = true;
    }
    else if(this.changeState === "collectionID"){
      this.isUserId = false;
      this.isCollectionPoint = true;
    }
    else{
      this.isUserId = false;
      this.isCollectionPoint = false;
    }
  }


}
