import { Menu } from './menu.model';
import { SUUBFOOD_API } from './app.api';
import { Restaurant } from './restaurants.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(public http: HttpClient) { }

  getListProducts(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${SUUBFOOD_API}/restaurants`);
  }

  getListProductsByCategoryId(id): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${SUUBFOOD_API}/restaurants?id=${id}`);
  }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${SUUBFOOD_API}/menu`);
  }

  getMenuByCategoryId(id): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${SUUBFOOD_API}/menu?id=${id}`);
  }
}
