import { Injectable } from '@angular/core';
import {Product} from '../product/product';
import {CartItem} from '../cart/cart-item';

@Injectable()
export class CartService {

	cartItems : Array<CartItem> = new Array<CartItem>();
	cartCost : number = 0;

	constructor() { }

	getAllProducts(){
		return this.cartItems.map( function(cartItem){ return cartItem.product; });
	}

	getTotalCost() : number{
		return this.cartCost;
	}

	getTotalCount() : number {
		return this.cartItems.length;
	}

	private updateTotalCost(){
		let sum : number = 0;
		this.cartItems.forEach(function(element){ sum += element.product.price * element.quantity;})
		this.cartCost =  sum;
	} 

	addProduct(p: Product, n: number){
		let cartItem = this.cartItems.find (function(cartItem){ return cartItem.product == p;});


		if (cartItem){
			cartItem.quantity++;
		} 
		else{
			cartItem = new CartItem(p, n<=0 ? 1 : n);

			this.cartItems.push(cartItem);
		}
	}

	updateProductQuantity(p:Product, q: number){

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
