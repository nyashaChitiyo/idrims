import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';


@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customers= [];
  dataTable: any;

  constructor(private httpClient: HttpClient,private chRef: ChangeDetectorRef,private router: Router,private demo: DemoService) { 
    this.getCustomers();
  }

//add URL allCustomers
  getCustomers(){
    this.httpClient.post('http://108.61.174.41:7070/api/view/group',
    {
      
        'searchString': 'CUST01'
      
    })
      .subscribe(
        (data:any[])=> {
          let arr = [];
          arr.push(data)
          this.customers = arr[0];
          this.chRef.detectChanges();
          const table: any = $('table#customers');
          this.dataTable = table.DataTable();
          console.log(arr[0]);
        }
      ) 
    }

    getCustomer(){
      let d = this.customers[0];
      let data : NavigationExtras = {
        queryParams: d
      }
      console.log(data)
  
      this.router.navigate(['/userManagement/'+this.customers[0].phoneNumber],data);
    }
  ngOnInit() {
  }

}
