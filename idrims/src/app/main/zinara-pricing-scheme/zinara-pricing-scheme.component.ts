import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-zinara-pricing-scheme',
  templateUrl: './zinara-pricing-scheme.component.html',
  styleUrls: ['./zinara-pricing-scheme.component.css']
})
export class ZinaraPricingSchemeComponent implements OnInit {



  public taxclass= [];
  constructor(private demo: DemoService) { }

   getZinTaxClass(){
    this.demo.get('http://108.61.174.41:7070/api/zinaraPricing/view')
    .subscribe(
      (data:any[])=> { 
        let arr = [];
        arr.push(data)
        this.taxclass = arr[0];
        
        console.log(this.taxclass);
      }
    ) 
  }

  ngOnInit() {
  }

}
 