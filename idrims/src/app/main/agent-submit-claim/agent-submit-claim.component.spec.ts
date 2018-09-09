import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSubmitClaimComponent } from './agent-submit-claim.component';

describe('AgentSubmitClaimComponent', () => {
  let component: AgentSubmitClaimComponent;
  let fixture: ComponentFixture<AgentSubmitClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentSubmitClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSubmitClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
