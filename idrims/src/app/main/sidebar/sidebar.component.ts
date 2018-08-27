import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
    const element = document.getElementById('body');
    element.classList.remove('login-page');
    element.classList.add('skin-blue');
    element.classList.add('sidebar-mini');
  }

  ngOnInit() {
  }

}
