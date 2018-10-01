import { Component, OnInit,ViewChild} from '@angular/core';
import {ActivatedRoute,NavigationExtras,Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';

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
  isPending = false;
  trackReference;
  ecocashNumber;
  isEnabled = true;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private activatedRoute: ActivatedRoute,private data: DataService, private httpClient: HttpClient,private router: Router) { 
   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.para = params;
    })
  }

  buyInsurance(){
    if(this.ecocashNumber){
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
        this.data.warning('Please enter pin your mobile phone');
        this.trackReference = data;
        this.trackPayment();
        
        this.ecocashNumber = '';
      } else {
        this.failedSwal.show();
      }
    }
    ,error => {
      console.log(error); 
      this.data.error(error['message'])
      }
    );
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

        Observable.interval(6000)
        .take(20).map((x) => x+1)
        .subscribe((x) => {
         
          if(data['status']=='SUCCESS'){
          this.data.success(data['status']);
          this.isPending =false;}
          else if((data['status'])==('PENDING')){
          this.isPending = true;
          }
          else{
          this.data.error(data['status']);
          this.isPending = false;}
        })
         
        //this.successSwal.show();
        this.ecocashNumber = '';

    })
    ;
  }
}
