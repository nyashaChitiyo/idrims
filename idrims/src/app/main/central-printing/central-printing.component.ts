import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';


@Component({
  selector: 'app-central-printing',
  templateUrl: './central-printing.component.html',
  styleUrls: ['./central-printing.component.css']
})
export class CentralPrintingComponent implements OnInit {

  prints= [];
  constructor(private demo: DemoService) {
    this.getCentralPrinting()
  }


  ngOnInit() {

  }
   getCentralPrinting(){
    this.demo.get('http://108.61.174.41:7070/api/centralPrinting/view/all')
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.prints = arr[0];
        console.log(this.prints);

      }
    ) 
   }

}
