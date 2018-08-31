import {Component, HostListener} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  @HostListener('window:onbeforeunload', ['$event'])
  clearLocalStorage(event) {
    localStorage.clear();
  }
  constructor(private httpClient: HttpClient, private permissionsService: NgxPermissionsService){};
}
