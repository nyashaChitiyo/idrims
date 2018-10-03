import { Component, OnInit, ViewChild} from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-insurance-pricing-scheme',
  templateUrl: './add-insurance-pricing-scheme.component.html',
  styleUrls: ['./add-insurance-pricing-scheme.component.css']
})
export class AddInsurancePricingSchemeComponent implements OnInit {
 
  isClicked = false;
  annualCompRate : string;
  annualCompRateMinimum: string;
  changedBy: string;
  rtaCoverPremium: string;
  rtaLevy: string;
  taxClassDescription: string;


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private httpClient: HttpClient, private data: DataService) { }

  ngOnInit() {
  } 

  postZinPricing(){
    if(this.validate()){
      this.isClicked=true;
      try{
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
      this.isClicked = false;
      this.successSwal.show();
      this.reset();
    } else {
      console.log('failed',+ data);
      this.failedSwal.show();
      
    }
  }, error => {
    this.isClicked=false;
    this.data.error(error['error'].message);
    this.failedSwal.show();
  }); 
 }
catch(error){
  this.isClicked = false;
  this.data.error(''+error)
}}
}
  reset(){
    this.taxClassDescription = '';
    this.annualCompRate = '';
    this.annualCompRateMinimum = '';
    this.rtaCoverPremium = '';
    this.rtaLevy = '';
  }
  validate(){
    if(this.taxClassDescription){
      if(this.annualCompRate){
        if(this.annualCompRateMinimum)
        {
          if(this.rtaCoverPremium)
          {
            if(this.rtaLevy){            
                     return true;
            }
            else {
              this.data.error('please enter RTA Levy');
            }
          }
          else{
            this.data.error('please enter RTA Cover Premium');
          }
          }
          else{
            this.data.error('please enter Annual Comp Rate Minimum');
          }
        }
        else{
          this.data.error('please enter Annual Comp Rate');
        }
      }
        else{
          this.data.error('please enter Tax Class Description');
        }
}
}
