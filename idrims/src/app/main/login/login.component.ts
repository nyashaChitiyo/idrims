import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionsService} from '../../authentication/sessions.service';
import { Router} from '@angular/router';
import {LoadingIndicatorService} from '../../loading-indicator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  username: string;
  password: string;
  private innerHeight: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, 
    private formBuilder: FormBuilder, 
    private session: SessionsService,
    public loading: LoadingIndicatorService) {
  }

  ngOnInit() {
    const element = document.getElementById('body');
    element.classList.add('login-page');
    element.classList.remove('sidebar-mini');
    element.classList.remove('skin-blue');
  }
  ngAfterViewInit() {
    this.innerHeight = window.innerHeight;
    document.getElementById('wrapper').style.height = innerHeight + 'px!important';
    console.log('Local height: ' + this.innerHeight);
  }

  login() {
    if (this.username != null && this.password != null) {
      this.session.login(this.username, this.password);
    }
  }

}
