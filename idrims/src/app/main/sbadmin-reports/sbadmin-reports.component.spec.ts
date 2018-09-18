import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBadminReportsComponent } from './sbadmin-reports.component';

describe('SBadminReportsComponent', () => {
  let component: SBadminReportsComponent;
  let fixture: ComponentFixture<SBadminReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBadminReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBadminReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
