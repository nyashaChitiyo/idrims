import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsurancePricingSchemeComponent } from './add-insurance-pricing-scheme.component';

describe('AddInsurancePricingSchemeComponent', () => {
  let component: AddInsurancePricingSchemeComponent;
  let fixture: ComponentFixture<AddInsurancePricingSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInsurancePricingSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsurancePricingSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
