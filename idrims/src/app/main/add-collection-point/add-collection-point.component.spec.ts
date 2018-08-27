import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollectionPointComponent } from './add-collection-point.component';

describe('AddCollectionPointComponent', () => {
  let component: AddCollectionPointComponent;
  let fixture: ComponentFixture<AddCollectionPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollectionPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
