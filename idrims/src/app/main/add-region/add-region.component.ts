import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {


  id: 0;
  name: string;
  code: string;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  postRegion(){
    this.httpClient.post('http://108.61.174.41:7070/api/location/create/Region',
  {
    'code':this.code,
    'name': this.name
  })
  .subscribe(data => {
    if (data['success'] === true) {        
      this.successSwal.show();
      setTimeout(function(){ this.successSwal.showAlert(); },0)
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
    this.name = '';
    this.code = '';
  }

}
