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

@NgModule({
  declarations: [
    AppComponent,
    PizzaCardComponent,
    CounterComponent
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
  ],
  providers: [
    PizzaService,
    ShoppingCartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
