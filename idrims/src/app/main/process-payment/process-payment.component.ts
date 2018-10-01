import { Component, OnInit,ViewChild} from '@angular/core';
import {ActivatedRoute,NavigationExtras,Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';
import {LoadingIndicatorService} from '../../loading-indicator.service';

@Component({
  selector: 'app-process-payment',
  templateUrl: './process-payment.component.html',
  styleUrls: ['./process-payment.component.css']
})
export class ProcessPaymentComponent implements OnInit {
  para:any;
  vehicleRegistrationNumber;
  quotationId;
  grandTotal;
  trackReference;
  ecocashNumber;
  isEnabled = true;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private loading: LoadingIndicatorService, private activatedRoute: ActivatedRoute,private data: DataService, private httpClient: HttpClient,private router: Router) { 
   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.para = params;
    })
  }

  buyInsurance(){
    if(this.ecocashNumber){
      this.loading.onRequestStarted();
    var vehicleRegistrationNumber: string = this.para['vehicleRegistrationNumber'];
    var quotationId: string = this.para['quotationId'];
    var grandTotal: string = this.para['grandTotal'];
    this.httpClient.post('http://108.61.174.41:7070/api/payment/ecocash',
  {
  "endUserNumber": this.ecocashNumber,
  "quotationId": +quotationId,
}
    )
    .subscribe(data => {
     
      if (data['status'] =='success') {   
        this.data.success(data['message']);
        this.trackReference = data;
        this.successSwal.show();
        this.trackPayment();
        
        this.ecocashNumber = '';
      } else {
        this.loading.onRequestFinished();
        this.failedSwal.show();
      }
    });
  }
  else{
    this.data.error('Please enter ecoash number');
  }
  }
  trackPayment(){
    console.log(this.trackReference['trackReference'])
    this.httpClient.post('http://108.61.174.41:7070/api/payment/track',
    {
      "searchString": this.trackReference['trackReference']
    }
    )
    .subscribe(data => {
      
        //this.data.success(data['message']);

        Observable.interval(5000)
        .take(10).map((x) => x+1)
        .subscribe((x) => {
          console.log(data)
          if(data['status']=='SUCCESS'){
          console.log(data['status']);
          this.loading.onRequestFinished();
          return;}
          else if((data['status'])==('FAILURE')){
            this.data.error(data['status']);
            this.loading.onRequestFinished();
          }
          else if((data['status'])==('PENDING')){
            this.loading.onRequestStarted();
            //this.data.error(data['status']);
          }
          else
          this.data.error(data['status']);
          this.loading.onRequestFinished();
        })
         
        //this.successSwal.show();
        this.ecocashNumber = '';

    });
  }
}
