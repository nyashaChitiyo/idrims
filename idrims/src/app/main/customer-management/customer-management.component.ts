import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
 
  
  customers;
  dtOptions: DataTables.Settings = {};
  public temp_var: Object = false;
  constructor(private httpClient: HttpClient,private router: Router,private demo: DemoService) { 
    this.getCustomers();
  }

//add URL allCustomers
  getCustomers(){
    this.httpClient.post('http://108.61.174.41:7070/api/user/view/group',
    {
      
        'searchString': 'CUST01'
      
    })
      .subscribe(
        (data:any[])=> {
          let arr = [];
          arr.push(data)
          this.customers = arr[0];
          console.log(arr[0]);
          this.temp_var = true
        }
      ) 
    }

    getCustomer(){
      let d = this.customers[0];
      let data : NavigationExtras = {
        queryParams: d
      }
      console.log(data)
  
      this.router.navigate(['backOffice/userManagement/Viewcustomers/'+this.customers[0].phoneNumber],data);
    }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
  zylefip4
}
