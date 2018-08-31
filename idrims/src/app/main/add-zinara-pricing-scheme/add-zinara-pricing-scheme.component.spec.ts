import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZinaraPricingSchemeComponent } from './add-zinara-pricing-scheme.component';

describe('AddZinaraPricingSchemeComponent', () => {
  let component: AddZinaraPricingSchemeComponent;
  let fixture: ComponentFixture<AddZinaraPricingSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZinaraPricingSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZinaraPricingSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
