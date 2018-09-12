import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceReportsComponent } from './insurance-reports.component';

describe('InsuranceReportsComponent', () => {
  let component: InsuranceReportsComponent;
  let fixture: ComponentFixture<InsuranceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
