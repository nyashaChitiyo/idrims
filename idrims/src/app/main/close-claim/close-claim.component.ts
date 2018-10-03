import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';

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
  selectedValue:string='';
  isClicked=false;
  vehicleRegistrationNumber:string; 
  dateOfLoss: string;

  isEdit: boolean = true;


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private data: DataService, private activatedRoute: ActivatedRoute, private demo: DemoService,private httpClient: HttpClient) { 
    this.activatedRoute.queryParams.subscribe(res =>{
      this.claimId = res['claimId'];       
       this.claimDate = res['createdAt'];
       this.vehicleVRN= res['vehicleRegistrationNumber'];
       this.firstName= res['firstName'];
       this.lastName= res['lastName'];
       this.selectedValue= res['natureOfClaim']; 
       this.dateOfLoss= res['dateOfLoss']; 
       console.log(res)
    })
  }

  ngOnInit() {
  }
  
  updateClaim(){
    this.isClicked = true;
    const data = this.httpClient.post("http://108.61.174.41:7070/api/claims/update/details",{
      "claimId": this.claimId,
      "dateOfLoss": this.dateOfLoss,
      "natureOfClaim": this.selectedValue,
  })

  .subscribe(data => {
    if (data) {  
     this.isClicked = false;
    } else {
      this.failedSwal.show();
      this.isClicked = false;
    }
  }, error => {
    this.isClicked=false;
    this.data.error(error['message']);
    this.failedSwal.show();
  });
  }

closeClaim(){
  this.isClicked=true;
 const data = this.httpClient.post("http://108.61.174.41:7070/api/claims/update/status",{
      "claimId": +this.claimId,
      "status": false
  })

  .subscribe(data => {
    if (data) {  
      this.isClicked=false;
     this.successSwal.show();
    } else {
      this.isClicked=false;
      this.failedSwal.show();
    }
  }, error => {
    this.data.error(error['message']);
    this.isClicked=false;
    this.failedSwal.show();
  });
  }
  isDisabled(){
    this.isUpdatable = true;
    this.isEditable = false
    this.isEdit = false;
  }
  }