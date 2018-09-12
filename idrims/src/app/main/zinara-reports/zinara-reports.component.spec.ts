import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinaraReportsComponent } from './zinara-reports.component';

describe('ZinaraReportsComponent', () => {
  let component: ZinaraReportsComponent;
  let fixture: ComponentFixture<ZinaraReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinaraReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinaraReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
