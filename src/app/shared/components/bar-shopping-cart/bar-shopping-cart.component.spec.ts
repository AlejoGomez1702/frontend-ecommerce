import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarShoppingCartComponent } from './bar-shopping-cart.component';

describe('BarShoppingCartComponent', () => {
  let component: BarShoppingCartComponent;
  let fixture: ComponentFixture<BarShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
