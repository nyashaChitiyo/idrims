import { Component, OnInit, ViewChild} from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-add-insurance-pricing-scheme',
  templateUrl: './add-insurance-pricing-scheme.component.html',
  styleUrls: ['./add-insurance-pricing-scheme.component.css']
})
export class AddInsurancePricingSchemeComponent implements OnInit {
 
  annualCompRate : string;
  annualCompRateMinimum: string;
  changedBy: string;
  rtaCoverPremium: string;
  rtaLevy: string;
  taxClassDescription: string;


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  } 

  postZinPricing(){
    this.httpClient.post('http://108.61.174.41:7070/api/zinaraPricing/create',
  {
    'taxClassDescription':this.taxClassDescription,
    'annualCompRate' : this.annualCompRate,
  'annualCompRateMinimum': this.annualCompRateMinimum,
  'changedBy': this.changedBy,
  'rtaCoverPremium': this.rtaCoverPremium,
  'rtaLevy': this.rtaLevy
  })
  .subscribe(data => {
    if (data['status'] === 'success') {        
      console.log(data['message'], + data['message']);
      this.successSwal.show();
      this.reset();
    } else {
      console.log('failed',+ data);
      this.failedSwal.show();
      
    }
  }, error => {
    console.log(Response);
    this.failedSwal.show();
  }); 

  }
  reset(){
    this.taxClassDescription = '';
    this.annualCompRate = '';
    this.annualCompRateMinimum = '';
    this.rtaCoverPremium = '';
    this.rtaLevy = '';
  }

}
