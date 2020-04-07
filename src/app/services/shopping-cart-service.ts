import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

    private _cart: Map<number, number> = new Map();

    constructor() {}

    public addToCart(id: number, amount = 1) {
        if (!this._cart.has(id)) {
            this._cart.set(id, amount);
        } else {
            const currentValue = this._cart.get(id) as number;
            this._cart.set(id, currentValue + amount)
        }
    }

    public removeFromCart(id: number, amount = 1) {
        this.addToCart(id, -amount);
    }

    public clearCart() {
        [...this._cart.keys()].forEach((k) => this._cart.delete(k));
    }
}