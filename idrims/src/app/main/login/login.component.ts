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
    this.loading.onRequestFinished();
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
   // this.loading.onRequestStarted();
    if (this.validate()) {
      this.session.login(this.username, this.password)
      /*if(this.session.login(this.username, this.password) =='Invalid Username and password'){
        console.log('Invalid Username and password')
        this.data.error('Invalid Username and password');
      }
      else
      console.log('success')*/
    }
    else {
     // this.data.error(this.session.dispMessage());
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