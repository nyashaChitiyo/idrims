import { Component, OnInit,ViewChild} from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-closed-claims',
  templateUrl: './closed-claims.component.html',
  styleUrls: ['./closed-claims.component.css']
}) 
export class ClosedClaimsComponent implements OnInit {

  claims =[];

  constructor(private httpClient: HttpClient,private activatedRoute: ActivatedRoute) { 
    this.getClossedClaims();
  }

  ngOnInit() {
  }

  getClossedClaims(){
    this.httpClient.post('http://108.61.174.41:7070/api/claims/view/status',
    {
        'bool': false
          })
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.claims = arr[0];
      }
    ) 
  }
}
