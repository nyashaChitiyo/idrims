import { Component, OnInit, ViewChild} from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-add-zinara-pricing-scheme',
  templateUrl: './add-zinara-pricing-scheme.component.html',
  styleUrls: ['./add-zinara-pricing-scheme.component.css']
})
export class AddZinaraPricingSchemeComponent implements OnInit {

  taxClassDesc: string;
  taxClassId: 0;


  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  } 

  postZinPricing(){
    this.httpClient.post('http://108.61.174.41:7070/api/zinaraPricing/create',
  {
    'taxClassDescription':this.taxClassDesc,
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
    this.taxClassDesc = '';
  }

}
