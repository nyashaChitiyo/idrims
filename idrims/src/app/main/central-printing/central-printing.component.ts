import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-central-printing',
  templateUrl: './central-printing.component.html',
  styleUrls: ['./central-printing.component.css']
})
export class CentralPrintingComponent implements OnInit {


  dtOptions: DataTables.Settings = {};

  prints;

  public temp_var: Object = false;

  constructor(private demo: DemoService, private data: DataService) {
    this.getCentralPrinting()
  }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

  }
   getCentralPrinting(){
     try{
    this.demo.get('http://108.61.174.41:7070/api/centralPrinting/view/all')
    .subscribe(
      (data)=> {
        let arr = [];
        arr.push(data)
        this.prints = arr[0];
        this.temp_var=true;


      }
    ) }
    catch(error){
      this.data.error(error['error'].message);
    }
   }

}
