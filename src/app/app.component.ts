import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PizzaService } from './services/pizza-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public pizzas$ = this._pizzaService.getPIzzas();

  constructor(private _pizzaService: PizzaService) {
  }
}
