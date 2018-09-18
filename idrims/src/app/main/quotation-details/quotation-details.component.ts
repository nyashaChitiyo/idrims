import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,NavigationExtras,Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quotation-details',
  templateUrl: './quotation-details.component.html',
  styleUrls: ['./quotation-details.component.css']
})
export class QuotationDetailsComponent implements OnInit {

  policyRate;
  premiumDue;
  insurancePremium;
  zinaraPremium;
  zbcPremium;
  deliveryFee;
  grandTotal;
  startDate;
  endDate;
  policyPeriod;
  governmentLevy;
  stampDuty;
  zinaraArrears;
  quotationId;
  vehicleRegistrationNumber;
  insuranceCompany;
  insuranceType;

  data:any=[];
  constructor(private activatedRoute: ActivatedRoute,private httpClient: HttpClient,private router: Router) { 

  }
 
  ngOnInit() { 
    this.activatedRoute.params.subscribe(params =>{
      this.vehicleRegistrationNumber = params['vehicleRegistrationNumber'];
    })

    this.activatedRoute.queryParams.subscribe(params =>{

      this.data = params;

      this.insuranceCompany = params['insuranceCompany'];
      this.policyRate = params['insuranceType'];
      this.policyRate = params['policyRate'];
      this.premiumDue= params['premiumDue'];
      this.insurancePremium= params['insurancePremium'];
      this.zinaraPremium= params['zinaraPremium'];
      this.zbcPremium= params['zbcPremium'];
      this.deliveryFee = params['deliveryFee'];

      this.grandTotal = params['grandTotal'];
      this.startDate= params['startDate'];
      this.endDate= params['endDate'];
      this.policyPeriod= params['policyPeriod'];
      this.governmentLevy= params['governmentLevy'];
      this.stampDuty = params['stampDuty'];

      this.zinaraArrears= params['zinaraArrears'];
      this.quotationId = params['quotationId'];
    })
  } 

  makePayment(){

    /*let d = this.data;
    let data : NavigationExtras = {
      queryParams: d
    }*/
    if(localStorage.getItem('userGroup')==='CUST01'){
      this.router.navigate(['customer/getIdrive/'+this.vehicleRegistrationNumber+'/'+this.quotationId+'/'+this.grandTotal]);
    }
    else if(localStorage.getItem('userGroup')==='AGENT01'){
      this.router.navigate(['agent/getIdrive/'+this.vehicleRegistrationNumber+'/'+this.quotationId+'/'+this.grandTotal]);
    }
  }

}
