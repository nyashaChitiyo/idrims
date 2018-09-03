import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-zinara-pricing-scheme',
  templateUrl: './zinara-pricing-scheme.component.html',
  styleUrls: ['./zinara-pricing-scheme.component.css']
})
export class ZinaraPricingSchemeComponent implements OnInit {



  taxclasses = [];
  constructor(private demo: DemoService) { 
    this.getZinTaxClass();
  }

   getZinTaxClass(){
    this.demo.get('http://108.61.174.41:7070/api/zinaraPricing/view')
    .subscribe(taxclasses=> { 
      let arr = [];
        arr.push(taxclasses)
        this.taxclasses = arr[0];
      }
    ) 
  } 
 
  ngOnInit() {
  }

}
 