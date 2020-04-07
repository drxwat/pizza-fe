import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PizzaService } from './services/pizza-service';
import { ShoppingCartService } from './services/shopping-cart-service';
import { Pizza } from './models/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public pizzas$ = this._pizzaService.getPIzzas();

  constructor(
    private _pizzaService: PizzaService,
    private _shoppingCartService: ShoppingCartService,
    ) {
  }

  getPizzaAmount(id: number) {
    return this._shoppingCartService.cart.get(id) || 0;
  }

  addOnePizzaToCart(pizza: Pizza) {
    this._shoppingCartService.addToCart(pizza.id);
  }

  removeOnePizzaFromCart(pizza: Pizza) {
    this._shoppingCartService.removeFromCart(pizza.id);
  }
}
