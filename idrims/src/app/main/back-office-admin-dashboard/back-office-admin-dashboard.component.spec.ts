import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeAdminDashboardComponent } from './back-office-admin-dashboard.component';

describe('BackOfficeAdminDashboardComponent', () => {
  let component: BackOfficeAdminDashboardComponent;
  let fixture: ComponentFixture<BackOfficeAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOfficeAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
