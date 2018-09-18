import {Component, HostListener, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as socketIo from 'socket.io-client';

//import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  ngOnInit(): void {
   // const socket = socketIo('http:108.61.174.41:7070/api/notifications/view/userId')
  }
  @HostListener('window:onbeforeunload', ['$event'])
  clearLocalStorage(event) {
    localStorage.clear();
  }
  constructor(private httpClient: HttpClient){};
}
