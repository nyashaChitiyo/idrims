import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateManagementComponent } from './rate-management.component';

describe('RateManagementComponent', () => {
  let component: RateManagementComponent;
  let fixture: ComponentFixture<RateManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
