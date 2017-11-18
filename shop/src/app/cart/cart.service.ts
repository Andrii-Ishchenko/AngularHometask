import { Injectable, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item/cart-item';
import { Product } from '../products/product';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {


	private cartChanged: Subject<void> = new Subject<void>();

	public cartChanged$ = this.cartChanged.asObservable();

	private cartItems : Array<CartItem> = new Array<CartItem>();
	private totalCost: number = 0;
	private totalCount: number = 0;
	constructor() { }

	getItems() : Array<CartItem> {
		return this.cartItems;
	}

	getTotalCost(): number{
		this.recalcTotalCost();
		return this.totalCost;
	}

	getTotalCount():  number{
		this.recalcTotalCount();
		return this.totalCount;
	}

	private recalcTotalCount(){
		let sum = 0;
		this.cartItems.forEach( i => sum += i.quantity);
		this.totalCount = sum;
	}

	private recalcTotalCost() {
		let sum = 0;
		this.cartItems.forEach( i => sum += i.getTotalPrice());
		this.totalCost = sum;
	}

	addToCart(product : Product){
		if (!product.available || product.capacity <=0 )
			return;

		var cartItem = this.cartItems.find( ci => ci.product == product);

		if(!cartItem){
			cartItem = new CartItem(product,0);
			this.cartItems.push(cartItem);
		} 

		cartItem.product.capacity--;
		cartItem.quantity++;

		this.emitCartChanged();
	}

	removeFromCart(cartItem: CartItem){
		
		if(cartItem.quantity > 0 ){
			cartItem.product.capacity++;
			cartItem.quantity--;
		}

		if(cartItem.quantity == 0){
			let listItemId = this.cartItems.indexOf(cartItem);

			if(listItemId > -1 )
				this.cartItems.splice(listItemId, 1);

		}

		this.emitCartChanged();
	}

	removeAll(cartItem: CartItem){
		if(cartItem.quantity > 0 ){
			cartItem.product.capacity+= cartItem.quantity;
			cartItem.quantity = 0;
		}

		let listItemId = this.cartItems.indexOf(cartItem);
		
		if(listItemId > -1 )
			this.cartItems.splice(listItemId, 1);

		this.emitCartChanged();
	}

	private emitCartChanged(){
		this.cartChanged.next();
	}

}
