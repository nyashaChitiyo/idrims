import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypendingVerificationComponent } from './mypending-verification.component';

describe('MypendingVerificationComponent', () => {
  let component: MypendingVerificationComponent;
  let fixture: ComponentFixture<MypendingVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypendingVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypendingVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
