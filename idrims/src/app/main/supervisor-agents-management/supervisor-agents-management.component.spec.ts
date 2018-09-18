import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorAgentsManagementComponent } from './supervisor-agents-management.component';

describe('SupervisorAgentsManagementComponent', () => {
  let component: SupervisorAgentsManagementComponent;
  let fixture: ComponentFixture<SupervisorAgentsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorAgentsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorAgentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
