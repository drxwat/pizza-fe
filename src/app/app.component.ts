import { Component } from '@angular/core';
import { PizzaService } from './services/pizza-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private _pizzaService: PizzaService) {
    this._pizzaService.getPIzzas().subscribe((data) => {
      console.log(data);
    })
  }
}
