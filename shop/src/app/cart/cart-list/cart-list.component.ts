import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartService } from '../cart.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit , OnDestroy{

	private cartChangedSubsription: Subscription;

	cartItems : Array<CartItem> = new Array<CartItem>();
	totalCost: number;
	totalCount: number;

	constructor(private cartService : CartService) { }

	ngOnInit() {
		this.cartItems = this.cartService.getItems();
		this.cartChangedSubsription = this.cartService.cartChanged$.subscribe(e=>this.updateTotals());
	}


	updateTotals(){
		this.totalCount = this.cartService.getTotalCount();
		this.totalCost = this.cartService.getTotalCost();
	}

	ngOnDestroy(): void {
		this.cartChangedSubsription.unsubscribe();
	}


}
