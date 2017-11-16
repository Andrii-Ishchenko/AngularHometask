import { Injectable } from '@angular/core';
import { CartItem } from './cart-item/cart-item';
import { Product } from '../products/product';

@Injectable()
export class CartService {

	private cartItems : Array<CartItem> = new Array<CartItem>();

	constructor() { }

	getItems() : Array<CartItem> {
		return this.cartItems;
	}

	addToCart(product : Product){
		if (!product.available || product.capacity <=0 )
			return;

		var cartItem = this.cartItems.find( ci => ci.product == product);

		if(!cartItem){
			cartItem = new CartItem(product,1);
			this.cartItems.push(cartItem);
		} 
		else {
			cartItem.quantity++;
		}
		
		product.capacity--;
	}

}
