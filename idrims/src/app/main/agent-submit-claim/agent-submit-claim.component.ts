import { Component, OnInit,ViewChild } from '@angular/core'
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {DataService} from '../data.service';

@Component({
  selector: 'app-agent-submit-claim',
  templateUrl: './agent-submit-claim.component.html',
  styleUrls: ['./agent-submit-claim.component.css']
})
export class AgentSubmitClaimComponent implements OnInit {

  phoneNumber: string;
  VRN: string;
  lossDate: string;
  isClick = false;
  selectedValue: string;
  lastName : string;
  firstName: string;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor(private httpClient: HttpClient, private data: DataService) { }

  submitClaim(){
    this.isClick= true;
    this.httpClient.post('http://108.61.174.41:7070/api/claims/create',
      {
       "dateOfLoss": this.lossDate,
       "firstName": this.firstName,
       "lastName": this.lastName,
       "natureOfClaim": this.selectedValue,
       "phoneNumber": this.phoneNumber,
       "userId": +localStorage.getItem('userId'),
       "vehicleRegistrationNumber": this.VRN
      })
      .subscribe(data => {
        if (data['status'] === "success") {  
         this.successSwal.show();
          this.reset();
        } else {
          this.isClick=false;
          this.failedSwal.show();
        }
      }, error => {
        this.isClick=false;
        this.data.error(error['message']);
        this.failedSwal.show();
      }); 
      }
      reset() {
        this.phoneNumber = '';
        this.VRN = '';
        this.selectedValue = '';
        this.lastName = '';
        this.firstName = '';
      }
 ngOnInit() {
  }
  }

