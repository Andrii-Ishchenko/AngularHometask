import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

	cartItems : Array<CartItem> = new Array<CartItem>();

	constructor(private cartService : CartService) { }

	ngOnInit() {
		this.cartItems = this.cartService.getItems();
	}

}
