import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEcosureComponent } from './buy-ecosure.component';

describe('BuyEcosureComponent', () => {
  let component: BuyEcosureComponent;
  let fixture: ComponentFixture<BuyEcosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyEcosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyEcosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
