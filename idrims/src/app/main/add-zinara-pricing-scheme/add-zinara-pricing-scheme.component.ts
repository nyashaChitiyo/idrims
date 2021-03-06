import { Component, OnInit, ViewChild} from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DataService } from '../data.service';
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
  isClicked = false;
  constructor(private httpClient: HttpClient,private data:DataService) { }

  ngOnInit() {
  } 

  postZinPricing(){
    try{
    if(this.taxClassDesc){
      this.isClicked=true;
    this.httpClient.post('http://108.61.174.41:7070/api/zinaraPricing/create',
  {
    'taxClassDescription':this.taxClassDesc, 
  })
  .subscribe(data => {
    if (data['status'] === 'success') {        
      this.isClicked=false;
      this.successSwal.show();
      this.reset();
    } else {
      this.isClicked=false;
      this.failedSwal.show();
      
    }
  }, error => {
    this.isClicked = false;
    this.data.error(error['error'].message);
    this.failedSwal.show();
  }); 
}
else
 this.data.error('enter Tax Class Description');}
 catch(error){
   this.data.error(''+error)
 }
  }
  reset(){
    this.taxClassDesc = '';
  }

}
