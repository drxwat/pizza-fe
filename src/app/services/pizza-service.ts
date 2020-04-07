import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pizza } from '../models/pizza';

@Injectable()
export class PizzaService {

    private _apiPath = 'pizza';
    private _apiUrl = `${environment.apiBaseUrl}/${this._apiPath}`;

    constructor(private _http: HttpClient) {}

    public getPIzzas() {
        return this._http.get<Pizza[]>(this._apiUrl);
    }

    public getPizzaById(id: number) {
        return this._http.get<Pizza>(`${this._apiUrl}/${id}`);
    }
}