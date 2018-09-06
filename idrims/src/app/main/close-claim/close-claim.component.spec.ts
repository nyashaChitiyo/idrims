import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseClaimComponent } from './close-claim.component';

describe('CloseClaimComponent', () => {
  let component: CloseClaimComponent;
  let fixture: ComponentFixture<CloseClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
