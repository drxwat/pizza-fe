import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza-service';
import { ShoppingCartService } from 'src/app/services/shopping-cart-service';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasListComponent {

  public pizzas$ = this._pizzaService.getPIzzas();

  constructor(
    private _pizzaService: PizzaService,
    private _shoppingCartService: ShoppingCartService,
    ) {
  }

  getPizzaAmount(id: number) {
    return this._shoppingCartService.cart.get(id) || 0;
  }

  getTotalPizzasAmount() {
    return [...this._shoppingCartService.cart.values()].reduce((sum, item) => sum + item, 0);
  }

  addOnePizzaToCart(pizza: Pizza) {
    this._shoppingCartService.addToCart(pizza.id);
  }

  removeOnePizzaFromCart(pizza: Pizza) {
    this._shoppingCartService.removeFromCart(pizza.id);
  }
}
