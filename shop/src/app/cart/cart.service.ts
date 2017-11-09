import { Injectable } from '@angular/core';
import {Product} from '../product/product';
import {CartItem} from '../cart/cart-item';

@Injectable()
export class CartService {

	cartItems : Array<CartItem> = new Array<CartItem>();
	constructor() { }

	getAllProducts(){
		return this.cartItems.map( function(cartItem){ return cartItem.product; });
	}

	getTotal() : number{
		let sum : number = 0;
		this.cartItems.forEach(function(element){ sum+= element.product.price * element.quantity;})
		return sum;
	}

	addProduct(p: Product){
		let cartItem = this.cartItems.find (function(cartItem){ return cartItem.product == p;});

		if (cartItem){
			cartItem.quantity++;
		} 
		else{
			cartItem = new CartItem(p,1);
			this.cartItems.push(cartItem);
		}
	}

	removeProduct(p: Product){
		let cartItem = this.cartItems.find (function(cartItem){ return cartItem.product == p;});
		
		if (cartItem && cartItem.quantity >0){
			cartItem.quantity--;
		} 
		else {
			let cartItemIndex = this.cartItems.indexOf(cartItem);
			if(cartItemIndex > -1){
				this.cartItems.splice(cartItemIndex,1);
			}
		}
	
	}
}
