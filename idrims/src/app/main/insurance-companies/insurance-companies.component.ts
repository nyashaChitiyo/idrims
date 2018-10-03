import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService}from '../data.service';
@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.css']
})
export class InsuranceCompaniesComponent implements OnInit {

  companies;
    status: boolean; 


  constructor(private httpClient: HttpClient, private data: DataService) { 
    this.getCompany();
  }

  getCompany(){
    this.httpClient.get('http://108.61.174.41:7070/api/companies/view/all')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.companies = arr[0];
      }, error=>{
        this.data.error(error['error'].message);
      }
    ) 
  }


  ngOnInit() {
  }

}
