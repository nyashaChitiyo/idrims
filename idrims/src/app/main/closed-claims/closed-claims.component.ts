import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';

@Component({
  selector: 'app-closed-claims',
  templateUrl: './closed-claims.component.html',
  styleUrls: ['./closed-claims.component.css']
}) 
export class ClosedClaimsComponent implements OnInit {

  claims;
  claimID : string;
  vehicleVRN:string;
  claimDATE:string;
  claimId:string;
  fName: string;
  lName: string;
  natureOfClaim:string;
  vehicleRegistrationNumber:string; 


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient, private data:DataService) {
  this.httpClient.post("http://108.61.174.41:7070/api/claims/view/status",{
      "bool": false,
  })

  .subscribe(data => {
    if (data) {  
     this.claims = data
    } else {
   
    }
  }, error => {
    this.data.error(error['message']);
    this.failedSwal.show();
  }); 
   }

  ngOnInit() {

  }
  
  closeClaim(){
 
  }
}
