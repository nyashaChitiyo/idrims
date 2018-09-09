import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGetIdriveComponent } from './agent-get-idrive.component';

describe('AgentGetIdriveComponent', () => {
  let component: AgentGetIdriveComponent;
  let fixture: ComponentFixture<AgentGetIdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentGetIdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentGetIdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
