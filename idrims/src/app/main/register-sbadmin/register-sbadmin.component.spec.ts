import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSBadminComponent } from './register-sbadmin.component';

describe('RegisterSBadminComponent', () => {
  let component: RegisterSBadminComponent;
  let fixture: ComponentFixture<RegisterSBadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSBadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSBadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
