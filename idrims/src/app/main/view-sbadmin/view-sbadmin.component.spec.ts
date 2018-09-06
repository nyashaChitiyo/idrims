import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSBadminComponent } from './view-sbadmin.component';

describe('ViewSBadminComponent', () => {
  let component: ViewSBadminComponent;
  let fixture: ComponentFixture<ViewSBadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSBadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSBadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
