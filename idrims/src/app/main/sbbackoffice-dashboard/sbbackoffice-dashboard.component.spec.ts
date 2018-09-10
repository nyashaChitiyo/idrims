import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBbackofficeDashboardComponent } from './sbbackoffice-dashboard.component';

describe('SBbackofficeDashboardComponent', () => {
  let component: SBbackofficeDashboardComponent;
  let fixture: ComponentFixture<SBbackofficeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBbackofficeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBbackofficeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
