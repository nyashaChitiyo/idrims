import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrintedDiscsComponent } from './view-printed-discs.component';

describe('ViewPrintedDiscsComponent', () => {
  let component: ViewPrintedDiscsComponent;
  let fixture: ComponentFixture<ViewPrintedDiscsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPrintedDiscsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrintedDiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
