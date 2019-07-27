import { ListProductPage } from './list-product/list-product.page';
import { RestaurantsService } from './restaurants.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home/home.page';




import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    HomePage,
    ListProductPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RestaurantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
