import {AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionsService} from '../../authentication/sessions.service';
import { Router} from '@angular/router';
import {LoadingIndicatorService} from '../../loading-indicator.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import { DataService } from '../data.service';

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
    public loading: LoadingIndicatorService,
  private data: DataService) {
  }
 
  
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('failedSwal') private failedSwal: SwalComponent;

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
    if (this.validate()) {
      this.session.login(this.username, this.password);
    }
    else {
      //this.data.error(localStorage.getItem('message'));
      console.log('gucii gang gucci gang gucci fake gang murisei')
      console.log(localStorage.getItem('message'))
    }
  }

  validate(){
    if(this.username){
      if(this.password){
        return true;
      } 
      else{
        this.data.error('please enter password');
      }
    }
    else{
      this.data.error('please enter username');
    }
  }

}