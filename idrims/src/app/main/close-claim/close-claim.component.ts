import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-close-claim',
  templateUrl: './close-claim.component.html',
  styleUrls: ['./close-claim.component.css']
}) 
export class CloseClaimComponent implements OnInit {

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
  constructor(private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{
      this.claimID = res['claimId'];       
       this.claimDATE = res['claimDate'];
       this.vehicleVRN= res['vehicleRegistrationNumber'];
       this.fName= res['firstName'];
       this.lName= res['lastName'];
       this.natureOfClaim= res['natureOfClaim'];

      console.log(res); 
    })
  }
  
  closeClaim(){
    const data = this.httpClient.post("http://108.61.174.41:7070/api/claims/update",{
      "claimDate": this.claimDATE,
      "claimId": this.claimID,
      "claimStatus": false,
      "firstName": this.fName,
      "lastName": this.lName,
      "natureOfClaim": this.natureOfClaim,
      "userId": 0,
      "vehicleRegistrationNumber": this.vehicleVRN
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
  };
