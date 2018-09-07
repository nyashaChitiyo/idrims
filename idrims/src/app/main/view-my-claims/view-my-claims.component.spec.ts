import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyClaimsComponent } from './view-my-claims.component';

describe('ViewMyClaimsComponent', () => {
  let component: ViewMyClaimsComponent;
  let fixture: ComponentFixture<ViewMyClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
