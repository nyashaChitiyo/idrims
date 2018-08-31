import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClaimsComponent } from './open-claims.component';

describe('OpenClaimsComponent', () => {
  let component: OpenClaimsComponent;
  let fixture: ComponentFixture<OpenClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
