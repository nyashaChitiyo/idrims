import { Component, OnInit,ViewChild} from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-open-claims',
  templateUrl: './open-claims.component.html',
  styleUrls: ['./open-claims.component.css']
})
export class OpenClaimsComponent implements OnInit {
  claims;
  claimID : string;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private data:DataService, private httpClient: HttpClient,private activatedRoute: ActivatedRoute,private router: Router,  private demo: DemoService) {
  
    this.getClaims();
    console.log(this.getClaims);
  }

  ngOnInit() {
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
        console.log(data);
      }, error=>{
        this.data.error(error['error'].message);
      }
    ) 
  }

  getClaim(claim){
    let d = claim;
    let data : NavigationExtras = {
      queryParams: d
    }
    console.log(data)

    this.router.navigate(['CloseClaim/'+claim.claimId],data);
  }

  updateClaim(){  
    const data = this.httpClient.post('http://108.61.174.41:7070/api/claims/update',{
      "claimId" : this.claimID,
      "claimStatus": false
      
  })

  .subscribe(data => {
    console.log(this.claimID);
    if (data['status'] === "success") {  
     
      console.log(data);
     this.successSwal.show();
    } else {
      this.failedSwal.show();
    }
  }, error => {
    this.data.error(error['error'].message);
    this.failedSwal.show();
  }); 
  }

} 