import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedClaimsComponent } from './closed-claims.component';

describe('ClosedClaimsComponent', () => {
  let component: ClosedClaimsComponent;
  let fixture: ComponentFixture<ClosedClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
