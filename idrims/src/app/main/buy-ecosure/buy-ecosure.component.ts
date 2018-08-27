import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../authentication/sessions.service';

@Component({
  selector: 'app-buy-ecosure',
  templateUrl: './buy-ecosure.component.html',
  styleUrls: ['./buy-ecosure.component.css']
})
export class BuyEcosureComponent implements OnInit {

  constructor(public session: SessionsService) { }

  ngOnInit() {
  }

}
