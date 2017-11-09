import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../product/product';
import {Category} from '../enums/Category';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	@Input() product: Product;
	
	constructor(private cartService : CartService) { }

	ngOnInit() {	
		
	}

	addToCart(){
		this.cartService.addProduct(this.product);
		console.log("Product "+ this.product.name +" was added to cart!");
	}
}
