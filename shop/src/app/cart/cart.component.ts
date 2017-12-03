import { Component, OnInit } from '@angular/core';
import {CartItem} from '../cart/cart-item';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	cartItems: Array<CartItem>;

	get totalCost(): number {
		return this.cartService.getTotalCost();
	}

	constructor(private cartService: CartService) { }

	ngOnInit() {
		this.cartItems = this.cartService.cartItems;
	}

	buy(){
		console.log("Your purchase:\n");
		this.cartItems.forEach(element => {
			console.log(element.product.name + " :  " + element.quantity + " x $" + element.product.price + " = " + element.product.price * element.quantity+"\n");
		});
		console.log("Total sum: $"+ this.totalCost);
	}

}
