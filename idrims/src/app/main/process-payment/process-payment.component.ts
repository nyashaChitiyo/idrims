import { Component, OnInit,ViewChild} from '@angular/core';
import {ActivatedRoute,NavigationExtras,Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

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
  ecocashNumber;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private activatedRoute: ActivatedRoute,private httpClient: HttpClient,private router: Router) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.para = params;
    })
  }

  buyInsurance(){
    var vehicleRegistrationNumber: string = this.para['vehicleRegistrationNumber'];
    var quotationId: string = this.para['quotationId'];
    var grandTotal: string = this.para['grandTotal'];
    this.httpClient.post('http://108.61.174.41:7070/api/payment/ecocash',
  {
  "accountNumber": this.ecocashNumber,
  "quotationId": +quotationId,
  "quoteAmmount": +grandTotal, 
  "vehicleRegistrationNumber": vehicleRegistrationNumber
}
    )
    .subscribe(data => {
     
      if (data) {   
        console.log(data)    
        this.successSwal.show();
      } else {
        this.failedSwal.show();
      }
    });
  }
}
