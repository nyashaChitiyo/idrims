import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRegisterVehicleComponent } from './agent-register-vehicle.component';

describe('AgentRegisterVehicleComponent', () => {
  let component: AgentRegisterVehicleComponent;
  let fixture: ComponentFixture<AgentRegisterVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRegisterVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRegisterVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
