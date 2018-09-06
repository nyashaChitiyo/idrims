import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdriveComponent } from './get-idrive.component';

describe('GetIdriveComponent', () => {
  let component: GetIdriveComponent;
  let fixture: ComponentFixture<GetIdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
