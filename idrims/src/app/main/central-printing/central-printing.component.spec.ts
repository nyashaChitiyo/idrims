import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralPrintingComponent } from './central-printing.component';

describe('CentralPrintingComponent', () => {
  let component: CentralPrintingComponent;
  let fixture: ComponentFixture<CentralPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
