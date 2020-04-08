import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {
    path: '', component: PizzasListComponent,
  },
  {
    path: 'cart', component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
