import {Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';
import{DataService} from '../data.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  transactions;
  quotations;
  userGroup:string;
  checked:any;
  isTransaction = false;
  isQuotation = false;
  public temp_var: Object = false;

  constructor(private data: DataService, private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 this.gettransactions();
 this.getQuotations();
  }
  ngOnInit() {  
    this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5
  }; 
  }
  buyInsurance(quote){
    console.log(quote)
    //this.router.navigate(['customer/getIdrive/'+'1'+'/'+quote.quotationId+'/'+quote.grandTotal]);
    let d = quote
    let data : NavigationExtras = {
      queryParams: d
    }
    this.router.navigate(['customer/getIdrive/generate/quote'], data);
  }
  isTransactions(){
    this.isQuotation = false
    this.isTransaction = true;
  }
  isQuotations(){
    this.isTransaction = false;
    this.isQuotation = true;
  }
  gettransactions(){
    var userId: number = +localStorage.getItem('userId');
    this.httpClient.post('http://108.61.174.41:7070/api/orders/view/userId',
    {
      "id": +localStorage.getItem('userId')
    })
    .subscribe(
      (data:any[])=> {
        let arr = [];
        console.log('my user id is '+userId)
        arr.push(data)
        this.transactions = arr[0];
        console.log(arr[0]);
      }, error=>{
        this.data.error(error['error'].message);
      }
    );  
  }

  getQuotations(){
    var userId: number = +localStorage.getItem('userId');
    this.httpClient.post('http://108.61.174.41:7070/api/orders/view/quotation/userId',
    {
      "id": +localStorage.getItem('userId')
    })
    .subscribe(
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.quotations = arr;
        console.log(this.quotations);
      }, error=>{
        this.data.error(error['error'].message);
      }
    ) 
  }
} 
