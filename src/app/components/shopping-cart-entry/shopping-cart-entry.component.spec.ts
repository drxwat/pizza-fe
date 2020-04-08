import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartEntryComponent } from './shopping-cart-entry.component';

describe('ShoppingCartEntryComponent', () => {
  let component: ShoppingCartEntryComponent;
  let fixture: ComponentFixture<ShoppingCartEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
