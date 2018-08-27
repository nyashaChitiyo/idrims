import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Event, Router, RouterEvent} from '@angular/router';
import {SessionsService} from '../../authentication/sessions.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit {
  activeRoute: string;
  constructor(public router: Router, public session: SessionsService ) {
  }
  public innerHeight: any;
  ngOnInit() {
    console.log('initialised login');
    this.router.events.subscribe((event: Event) => {
      if (event instanceof RouterEvent ) {
        console.log('The current url is:::: ??? : ' + event.url);
        this.activeRoute = event.url;
        this.innerHeight = window.innerHeight;
        document.getElementById('wrapper').style.height = innerHeight + 'px';
        console.log(this.innerHeight);
      }
    });
  }
  ngAfterViewInit() {
    this.innerHeight = window.innerHeight;
    document.getElementById('wrapper').style.height = innerHeight + 'px!important';
    console.log('Local height: ' + this.innerHeight);
  }
}
