import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaService } from './services/pizza-service';
import { HttpClientModule } from '@angular/common/http';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CounterComponent } from './components/counter/counter.component'; 
import {MatRippleModule} from '@angular/material/core';
import { ShoppingCartService } from './services/shopping-cart-service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ShoppingCartInfoComponent } from './components/shopping-cart-info/shopping-cart-info.component'; 
import {MatBadgeModule} from '@angular/material/badge';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';
import { ShoppingCartEntryComponent } from './components/shopping-cart-entry/shopping-cart-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaCardComponent,
    CounterComponent,
    ShoppingCartInfoComponent,
    ShoppingCartComponent,
    PizzasListComponent,
    ShoppingCartEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatBadgeModule,
  ],
  providers: [
    PizzaService,
    ShoppingCartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
