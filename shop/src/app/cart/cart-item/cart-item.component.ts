import { Component,Output, OnInit, Input,HostListener, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item';
import { CartService } from '../cart.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnDestroy {


	@HostListener('mouseenter')
	onmouseenter(){
		//todo:
	}

	@Input()
	public cartItem : CartItem;


	constructor(private cartService : CartService) { }

	ngOnInit() {
	}

	ngOnDestroy(): void {
		console.log(`Removed ${this.cartItem.product.name} from cart`);
	}

	canAddItem(){
		return this.cartItem.product.capacity > 0;
	}

	canRemoveItem(): boolean {
		return this.cartItem.quantity > 0;
	}

	addOne(){
		this.cartService.addToCart(this.cartItem.product);
	}

	removeOne(){
		this.cartService.removeFromCart(this.cartItem);
	}

	removeAll(){
		this.cartService.removeAll(this.cartItem);
	}

}
