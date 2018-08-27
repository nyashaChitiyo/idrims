import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubRegionComponent } from './add-sub-region.component';

describe('AddSubRegionComponent', () => {
  let component: AddSubRegionComponent;
  let fixture: ComponentFixture<AddSubRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
