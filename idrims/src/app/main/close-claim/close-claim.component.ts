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
  claimId : string;
  vehicleVRN:string;
  isUpdatable;
  claimDate:string;
  firstName: string; 
  isEditable = true;
  lastName: string;
  natureOfClaim:string;
  vehicleRegistrationNumber:string; 
  dateOfLoss: string;

  isEdit: boolean = true;


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(res =>{
      this.claimId = res['claimId'];       
       this.claimDate = res['createdAt'];
       this.vehicleVRN= res['vehicleRegistrationNumber'];
       this.firstName= res['firstName'];
       this.lastName= res['lastName'];
       this.natureOfClaim= res['natureOfClaim']; 
       this.dateOfLoss= res['dateOfLoss']; 
       console.log(res)
    })
  }
  
  updateClaim(){
    const data = this.httpClient.post("http://108.61.174.41:7070/api/claims/update/details",{
      "claimId": this.claimId,
      "dateOfLoss": this.dateOfLoss,
      "natureOfClaim": this.natureOfClaim,
  })

  .subscribe(data => {
    if (data) {  
     this.successSwal.show();
    } else {
      this.failedSwal.show();
    }
  }, error => {
    console.log(Response); 
    this.failedSwal.show();
  });
  }

closeClaim(){
 const data = this.httpClient.post("http://108.61.174.41:7070/api/claims/update/status",{
      "claimId": +this.claimId,
      "status": false
  })

  .subscribe(data => {
    if (data) {  
     this.successSwal.show();
    } else {
      this.failedSwal.show();
    }
  }, error => {
    console.log(error); 
    this.failedSwal.show();
  });
  }
  isDisabled(){
    this.isUpdatable = true;
    this.isEditable = false
    this.isEdit = false;
  }
  }