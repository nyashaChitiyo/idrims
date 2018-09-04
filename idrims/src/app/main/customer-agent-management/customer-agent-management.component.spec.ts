import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAgentManagementComponent } from './customer-agent-management.component';

describe('CustomerAgentManagementComponent', () => {
  let component: CustomerAgentManagementComponent;
  let fixture: ComponentFixture<CustomerAgentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAgentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAgentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
