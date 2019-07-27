import { HomePage } from './../home/home.page';
import { Menu } from '../menu.model';
import { RestaurantsService } from './../restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.page.html',
  styleUrls: ['./list-product.page.scss'],
})
export class ListProductPage implements OnInit {
  list;
  x: number;
  array = [];
  listMenu: Menu [] = [];
  listCategory: Restaurant [] = [];

  constructor(private restaurantService: RestaurantsService, private Home: HomePage) {
    this.getMenuByCategoryId();
    // this.getListProductsByCategoryId();
    console.log(this.Home.id);
   }

  //  getMenuByCategoryId() {
  //   this.restaurantService.getMenu().subscribe(dados => this.montarMenu(dados));
  //   }
    getMenuByCategoryId() {
      this.restaurantService.getMenu().subscribe(
        list => this.listMenu = list
      );
      }
  // montarMenu(dados) {
  //   this.array = dados;
  //   console.log(this.array);
  //   this.array.forEach(elemento => {
  //     console.log(this.Home.id);
  //     if (elemento.restaurantId === this.Home.id) {
  //       this.listMenu = elemento;
  //       console.log(elemento);

  //     }
  //   });

    // getListProductsByCategoryId() {
    //   this.restaurantService.getListProducts().subscribe(
    //       list => this.listCategory = list
    //     );
    //   }
  ngOnInit() {
  }

}
