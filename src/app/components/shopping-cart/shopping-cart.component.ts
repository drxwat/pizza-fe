import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart-service';
import { PizzaService } from 'src/app/services/pizza-service';
import { Observable, combineLatest, concat, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartEntry } from '../shopping-cart-entry/shopping-cart-entry';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit {

  demoEntry: ShoppingCartEntry = {
    id: 11,
    title: 'Pizzaaaa',
    subtitle: 'Subtitle',
    amount: 3,
    pictureUrl: 'assets/pizza-margherita.jpeg',
    price: 10
  };

  public pizzas$ = this._pizzaService.getPIzzas();
  public cartEntries$: Observable<ShoppingCartEntry[]>;

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _pizzaService: PizzaService,
  ) { }

  ngOnInit(): void {
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
      })
    );
  }

}
