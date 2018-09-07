import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVerifiedVehiclesComponent } from './my-verified-vehicles.component';

describe('MyVerifiedVehiclesComponent', () => {
  let component: MyVerifiedVehiclesComponent;
  let fixture: ComponentFixture<MyVerifiedVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVerifiedVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVerifiedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
