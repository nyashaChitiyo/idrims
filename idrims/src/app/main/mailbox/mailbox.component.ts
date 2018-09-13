import { Component, OnInit ,ViewChild} from '@angular/core';
import { DemoService } from '../../demo.service';
import {Router} from '@angular/router';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public requests= [];
  public temp_var: Object = false;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

  constructor( private demo: DemoService,private router: Router) { 
    this.getRequests();
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  getRequests(){
 
    //console.log(userId+'user id is this')
    this.demo.post('http://108.61.174.41:7070/api/orders/view/collectionPoint',
    {
      "id": +localStorage.getItem('userStation')
    })
    .subscribe(
      (data: Response)=> {
        console.log(data)
        let arr = [];
        arr.push(data)
        this.requests = arr[0];
        console.log(this.requests);
        this.temp_var=true;
      }
    ) 
  }
  printDisk(request){

    this.demo.post('http://108.61.174.41:7070/api/orders/close',
    {
      "closedBy": localStorage.getItem('userId'),
      "orderId": +request['id'],
      "status": "PAC"
    })
    .subscribe(
      (data)=> {
        if (data) {       
          this.successSwal.show();
        } else {
          this.failedSwal.show();
        }
      }
    ) 
  }
}