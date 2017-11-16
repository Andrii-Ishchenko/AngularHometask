import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { Product } from '../products/product';
import { CartService } from './cart.service';

@NgModule({
  imports: [
	CommonModule
  ],
  exports:[
	CartListComponent
  ],
  providers: [CartService],
  declarations: [CartItemComponent, CartListComponent]
})
export class CartModule { }
