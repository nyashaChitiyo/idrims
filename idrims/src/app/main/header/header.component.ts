import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../authentication/sessions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullName: string;
  userType: string;
  userStation: string;
  constructor(private session: SessionsService, private router: Router) {
    this.fullName = localStorage.getItem('fullName');
    this.userType = localStorage.getItem('userType');
    this.userStation = localStorage.getItem('userStation');
  }

  ngOnInit() {
  }

  logout() {
    this.session.logout();
    this.router.navigate(['login']);
  }

}
