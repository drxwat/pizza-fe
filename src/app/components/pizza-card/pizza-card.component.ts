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

  @Output() select: EventEmitter<Pizza> = new EventEmitter();
  @Output() addToCart: EventEmitter<Pizza> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
