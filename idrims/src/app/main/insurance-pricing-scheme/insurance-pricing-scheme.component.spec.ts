import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePricingSchemeComponent } from './insurance-pricing-scheme.component';

describe('InsurancePricingSchemeComponent', () => {
  let component: InsurancePricingSchemeComponent;
  let fixture: ComponentFixture<InsurancePricingSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancePricingSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePricingSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
