import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingCartService {

    private _cart: Map<number, number> = new Map();
    private _change: Subject<Map<number, number>> = new Subject();

    get cart() {
        return this._cart;
    }

    get change$() {
        return this._change.asObservable();
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

    public deleteFromCart(id: number) {
        const currentVal = this._cart.get(id);
        if (!currentVal) {
            return;
        }
        this.addToCart(id, -currentVal);
    }

    public clearCart() {
        [...this._cart.keys()].forEach((k) => this._cart.delete(k));
        this.emitChange();
    }

    private setNewValue(id: number, value: number) {
        if (value <= 0) {
            this._cart.delete(id);
        } else {
            this._cart.set(id, value);
        }
        this.emitChange();
    }

    private emitChange() {
        this._change.next(this._cart);
    }
}