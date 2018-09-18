import {Component, HostListener, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {DataService} from '../app/main/data.service';

// import * as socketIo from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  searchTerm = '';
  isCollapsed = true;

  ngOnInit(): void {
   
   // const socket = socketIo('http:108.61.174.41:7070/api/notifications/view/userId')
  }
  @HostListener('window:onbeforeunload', ['$event'])
  clearLocalStorage(event) {
    localStorage.clear();
  }
  constructor(private httpClient: HttpClient, private router: Router, private data: DataService){

  }

}
