import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-management',
  templateUrl: './rate-management.component.html',
  styleUrls: ['./rate-management.component.css']
})
export class RateManagementComponent implements OnInit {

  rate = 0.9;
  usd:number =1;
  rtgs:number;
  percentage:number;

  constructor() { }

  ngOnInit() {
  }

  onRtgs(){  
    if(this.rtgs > 0){
   this.percentage = ((this.rtgs / (this.usd /100))-100)
  }}

  onPercentage(){
    if(this.percentage > 0){
    this.rtgs = (((this.percentage * this.usd)/100)+this.usd);
  }}
  changePercentage(){
    this.percentage = null;
    this.rtgs = null;
  }
  changeRtgs(){
    this.percentage = null;
    this.rtgs = null;
  }
}
