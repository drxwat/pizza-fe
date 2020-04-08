import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-info',
  templateUrl: './shopping-cart-info.component.html',
  styleUrls: ['./shopping-cart-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartInfoComponent implements OnInit {

  @Input() amount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
