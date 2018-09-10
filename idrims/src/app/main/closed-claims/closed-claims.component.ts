import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-closed-claims',
  templateUrl: './closed-claims.component.html',
  styleUrls: ['./closed-claims.component.css']
}) 
export class ClosedClaimsComponent implements OnInit {

  claims: any;
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
  constructor(private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient) {
    const data = this.httpClient.post("http://108.61.174.41:7070/api/claims/view/status",{
      "bool": false,
  })

  .subscribe(data => {
    if (data['status'] === "success ") {  
     this.successSwal.show();
    } else {
      this.failedSwal.show();
    }
  }, error => {
    console.log(Response); 
    this.failedSwal.show();
  }); 
   }

  ngOnInit() {

  }
  
  closeClaim(){
 
  }
}
