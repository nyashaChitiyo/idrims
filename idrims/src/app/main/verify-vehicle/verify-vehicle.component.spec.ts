import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyVehicleComponent } from './verify-vehicle.component';

describe('VerifyVehicleComponent', () => {
  let component: VerifyVehicleComponent;
  let fixture: ComponentFixture<VerifyVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
