import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(
    private _shoppingCartService: ShoppingCartService,
    ) {
  }

  getTotalPizzasAmount() {
    return [...this._shoppingCartService.cart.values()].reduce((sum, item) => sum + item, 0);
  }
}
