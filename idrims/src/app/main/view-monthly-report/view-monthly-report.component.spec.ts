import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyReportComponent } from './view-monthly-report.component';

describe('ViewMonthlyReportComponent', () => {
  let component: ViewMonthlyReportComponent;
  let fixture: ComponentFixture<ViewMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
