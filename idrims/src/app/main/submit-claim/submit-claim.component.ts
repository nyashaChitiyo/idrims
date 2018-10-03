import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.component.html',
  styleUrls: ['./submit-claim.component.css']
})
export class SubmitClaimComponent implements OnInit {
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;
  vehicleNames= [];
  isClick = false;
  vehicle:number;
  claimNature;
  lossDate;
  constructor(private httpClient: HttpClient, private data:DataService) { }

  ngOnInit() {
    var id: number = +localStorage.getItem('userId');
    this.httpClient.post('http://108.61.174.41:7070/api/subscriptions/view/verified',
    {
      'id':id
    })
    .subscribe(data => {
     
      if (data) {        
        let arr = [];
        arr.push(data);
        let arr1 = arr[0].map(a => a.name);
        let vehicleId = arr[0].map(a => a.id);
        this.vehicleNames = arr[0];
      } else {
        
      }
    },error=>{
      this.data.error(error['error'].message)
    })
  }
  onEditClick(){
    
  }
  postClaim(){
    if(this.validate()){
      this.isClick=true;
    this.httpClient.post('http://108.61.174.41:7070/api/claims/create',
    {
      "dateOfLoss": this.lossDate,
      "firstName": localStorage.getItem('firstname'),
      "lastName": localStorage.getItem('lastname'),
      "natureOfClaim": this.claimNature,
      "phoneNumber": localStorage.getItem('phoneNumber'),
      "userId": localStorage.getItem('userId'),
      "vehicleRegistrationNumber": this.vehicle
    })
    .subscribe(data => {
     
      if (data) {   
        this.vehicle=+"";
        this.claimNature="";
        this.isClick=false;
        this.successSwal.show();
      } else {
        this.vehicle=+"";
        this.claimNature="";
        this.isClick=false;
        this.failedSwal.show();
      }
    }, error=>{
      this.data.error(error['error'].message);
      this.isClick=false;
    })}
  }

  validate(){
          if(this.vehicle)
          {
            if(this.claimNature){
                     return true;
                        }
                      
                      else{
                        this.data.error('please nature of claim');
                      }}
                        else{
                          this.data.error('please select Vehicle');
                        }

}
}
