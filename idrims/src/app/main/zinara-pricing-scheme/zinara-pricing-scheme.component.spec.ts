import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinaraPricingSchemeComponent } from './zinara-pricing-scheme.component';

describe('ZinaraPricingSchemeComponent', () => {
  let component: ZinaraPricingSchemeComponent;
  let fixture: ComponentFixture<ZinaraPricingSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinaraPricingSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinaraPricingSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
