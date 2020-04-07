import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

    private _cart: Map<number, number> = new Map();

    get cart() {
        return this._cart;
    }

    constructor() {}

    public addToCart(id: number, amount = 1) {
        if (!this._cart.has(id)) {
            this.setNewValue(id, amount);
        } else {
            const currentValue = this._cart.get(id) as number;
            this.setNewValue(id, currentValue + amount)
        }
    }

    public removeFromCart(id: number, amount = 1) {
        this.addToCart(id, -amount);
    }

    public clearCart() {
        [...this._cart.keys()].forEach((k) => this._cart.delete(k));
    }

    private setNewValue(id: number, value: number) {
        if (value <= 0) {
            this._cart.delete(id);
        } else {
            this._cart.set(id, value);
        }
    }
}