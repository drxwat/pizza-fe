import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaCardComponent implements OnInit {

  @Input() pizza: Pizza;
  @Input() amount: number = 0;

  @Output() select: EventEmitter<Pizza> = new EventEmitter();
  @Output() addToCart: EventEmitter<Pizza> = new EventEmitter();
  @Output() removeFromCart: EventEmitter<Pizza> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAmountChange(change: -1 | 1) {
    if (change === 1) {
      this.addToCart.emit(this.pizza);
    } else if (change === -1) {
      this.removeFromCart.emit(this.pizza);
    }
  }

  onAmountIncrement() {
    this.addToCart.emit(this.pizza);
  }

}
