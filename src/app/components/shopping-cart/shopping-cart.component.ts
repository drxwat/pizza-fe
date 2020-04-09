import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart-service';
import { PizzaService } from 'src/app/services/pizza-service';
import { Observable, combineLatest, concat, of } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { ShoppingCartEntry } from '../shopping-cart-entry/shopping-cart-entry';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit {

  public isOrderApplied = false;
  public pizzas$: Observable<Pizza[]>;
  public cartEntries$: Observable<ShoppingCartEntry[]>;
  public isCartEmpty$: Observable<boolean>;
  public isLoading$: Observable<boolean>;

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _pizzaService: PizzaService,
  ) { }

  ngOnInit(): void {
    this.pizzas$ = this._shoppingCartService.cart.size > 0 ? this._pizzaService.getPIzzas().pipe(share()) : of([]);

    this.cartEntries$ = combineLatest( // combining pizzas meta map and shopping cart map
      this.pizzas$.pipe(map((pizzas) => {
        return pizzas.reduce((map, p) => map.set(p.id, p), new Map<number, Pizza>());
      })),
      concat(of(this._shoppingCartService.cart), this._shoppingCartService.change$)
    ).pipe(
      map(([pizzasMap, cart]) => {
        return [...cart.entries()].map<ShoppingCartEntry>(([id, amount]) => {
          const pizza = pizzasMap.get(id) as Pizza;
          return {
            id,
            title: pizza.name,
            subtitle: 'Pizza',
            pictureUrl: 'assets/pizza-margherita.jpeg',
            price: pizza.price,
            amount
          }
        });
      }),
    );

    this.isCartEmpty$ = this._shoppingCartService.change$.pipe(
      map((cart) => cart.size === 0)
    );

    this.isLoading$ = concat(
      of(true),
      this.pizzas$.pipe(
        map(() => false)
      )
    );
  }

  addOneItemToCart(id: number) {
    this._shoppingCartService.addToCart(id);
  }

  removeOneItemFromCart(id: number) {
    this._shoppingCartService.removeFromCart(id);
  }

  delteFromCart(id: number) {
    this._shoppingCartService.deleteFromCart(id);
  }

  applyOrder() {
    this._shoppingCartService.clearCart();
    this.isOrderApplied = true;
  }

}
