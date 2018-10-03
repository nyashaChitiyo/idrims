import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuburbComponent } from './create-suburb.component';

describe('CreateSuburbComponent', () => {
  let component: CreateSuburbComponent;
  let fixture: ComponentFixture<CreateSuburbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSuburbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSuburbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
