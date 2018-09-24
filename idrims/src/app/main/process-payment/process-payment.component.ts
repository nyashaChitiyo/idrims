import { Component, OnInit,ViewChild} from '@angular/core';
import {ActivatedRoute,NavigationExtras,Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';

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
        this.successSwal.show();
      } else {
        this.failedSwal.show();
      }
    });
  }
}
