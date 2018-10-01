import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-agent-submit-claim',
  templateUrl: './agent-submit-claim.component.html',
  styleUrls: ['./agent-submit-claim.component.css']
})
export class AgentSubmitClaimComponent implements OnInit {


  phoneNumber: string;
  VRN: string;
  selectedValue: string;
  lastName : string;
  firstName: string;
  lossDate: string;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient) { }

  submitClaim(){
    this.httpClient.post('http://108.61.174.41:7070/api/claims/create',
      {
       'claimDate': new Date(),
        "claimId": 0,
        "claimStatus": true,
        "firstName": this.firstName,
        "lastName": this.lastName,
        "natureOfClaim": this.selectedValue,
        "phoneNumber": this.phoneNumber,
        "userId": +localStorage.getItem('userId'),
        "vehicleRegistrationNumber": this.VRN,
        "dateOfLoss": this.lossDate
       
      })
      .subscribe(data => {
        if (data['status'] === "success") {  
         this.successSwal.show();
         console.log(data);
          this.reset();
        } else {
          this.failedSwal.show();
        }
      }, error => {
        console.log(Response);
        this.failedSwal.show();
      }); 
      }
      reset() {
        this.phoneNumber = '';
        this.VRN = '';
        this.selectedValue = '';
        this.lastName = '';
        this.firstName = '';
        this.lossDate = '';
      }
 ngOnInit() {
  }
  }

