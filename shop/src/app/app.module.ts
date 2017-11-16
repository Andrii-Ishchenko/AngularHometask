import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CartModule } from './cart/cart.module';
import { EmailModule } from './email/email.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { ImageService } from './image/image.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmailModule,
    ProductsModule,
    OrdersModule,
    CartModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
