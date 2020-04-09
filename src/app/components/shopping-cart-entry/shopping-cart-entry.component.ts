import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartEntry } from './shopping-cart-entry';

@Component({
  selector: 'app-shopping-cart-entry',
  templateUrl: './shopping-cart-entry.component.html',
  styleUrls: ['./shopping-cart-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartEntryComponent {

  @Input() entry: ShoppingCartEntry;

  @Output() addToCart: EventEmitter<number> = new EventEmitter();
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  changeAmount(change: -1 | 1) {
    if (change === 1) {
      this.addToCart.emit(this.entry.id);
    } else if (change === -1) {
      this.removeFromCart.emit(this.entry.id);
    }
  }

  deleteAll() {
    this.delete.emit(this.entry.id);
  }
}
