import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

	@Input()
	public cartItem : CartItem;

	constructor() { }

	ngOnInit() {
	}

	addOne(){
		
	}

	removeOne(){

	}

	removeAll(){

	}

}
