import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRegionsComponent } from './sub-regions.component';

describe('SubRegionsComponent', () => {
  let component: SubRegionsComponent;
  let fixture: ComponentFixture<SubRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
