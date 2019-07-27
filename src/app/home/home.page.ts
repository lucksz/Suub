import { RestaurantsService } from './../restaurants.service';
import { Component } from '@angular/core';
import { Restaurant } from '../restaurants.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  id = "burger-house";

  listCategory: Restaurant [] = [];
  constructor(private restaurantService: RestaurantsService) {
    this.getListProductsByCategoryId();
  }

  passarInfo(id) {
    this.id = id;
    console.log(this.id);
  }

  getListProductsByCategoryId() {
  this.restaurantService.getListProducts().subscribe(
      list => this.listCategory = list
    );
  }
 /* openListProduct(id) {
    this.navCtrl.push(ListProductPage, {"id": id});
  }*/
}
