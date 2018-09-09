import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRegisterCustomerComponent } from './agent-register-customer.component';

describe('AgentRegisterCustomerComponent', () => {
  let component: AgentRegisterCustomerComponent;
  let fixture: ComponentFixture<AgentRegisterCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRegisterCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRegisterCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
