import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedVehiclesComponent } from './verified-vehicles.component';

describe('VerifiedVehiclesComponent', () => {
  let component: VerifiedVehiclesComponent;
  let fixture: ComponentFixture<VerifiedVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
