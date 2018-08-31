import { Component, OnInit,ViewChild} from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  claims=[];
  claimId : string;
  claimDate = '';
  claimStatus = '';
  firstName = '';
  lastName = '';
  natureOfClaim = '';
  userId = '';
  vehicleRegistrationNumber = '';
  zinaraTaxClass = '';

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private httpClient: HttpClient,private activatedRoute: ActivatedRoute) {
    this.getClaims();
    console.log(this.getClaims);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{
      this.claimId = res['claimId'];
      console.log(this.claimId); 
    //  this.getVehicle();
    }) 
  }

  getClaims(){
    this.httpClient.post('http://108.61.174.41:7070/api/claims/view/status',
    {
        'bool': true
          })
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.claims = arr[0];
      }
    ) 
  }


  updateClaim(){  
    const data = this.httpClient.post('http://108.61.174.41:7070/api/claims/update',{
      "claimDate": 0,
      "claimId" : this.claimId,
      "claimStatus": false,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "natureOfClaim": this.natureOfClaim,
      "userId": this.userId,
      "vehicleRegistrationNumber": this.vehicleRegistrationNumber,
      "zinaraTaxClass": this.zinaraTaxClass

  })

  .subscribe(data => {
    if (data['status'] === "Success") {  
     this.successSwal.show();
    } else {
      this.failedSwal.show();
    }
  }, error => {
    console.log(Response); 
    this.failedSwal.show();
  }); 
  }

}
