import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbSupervisorsComponent } from './sb-supervisors.component';

describe('SbSupervisorsComponent', () => {
  let component: SbSupervisorsComponent;
  let fixture: ComponentFixture<SbSupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbSupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbSupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
