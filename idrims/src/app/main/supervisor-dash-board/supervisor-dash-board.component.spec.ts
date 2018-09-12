import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorDashBoardComponent } from './supervisor-dash-board.component';

describe('SupervisorDashBoardComponent', () => {
  let component: SupervisorDashBoardComponent;
  let fixture: ComponentFixture<SupervisorDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
