import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuburbsComponent } from './view-suburbs.component';

describe('ViewSuburbsComponent', () => {
  let component: ViewSuburbsComponent;
  let fixture: ComponentFixture<ViewSuburbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSuburbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuburbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
