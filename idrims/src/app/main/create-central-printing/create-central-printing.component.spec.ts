import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCentralPrintingComponent } from './create-central-printing.component';

describe('CreateCentralPrintingComponent', () => {
  let component: CreateCentralPrintingComponent;
  let fixture: ComponentFixture<CreateCentralPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCentralPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCentralPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
