import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbcReportsComponent } from './zbc-reports.component';

describe('ZbcReportsComponent', () => {
  let component: ZbcReportsComponent;
  let fixture: ComponentFixture<ZbcReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbcReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbcReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
