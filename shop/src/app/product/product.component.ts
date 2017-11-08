import { Component, OnInit } from '@angular/core';
import {Product} from '../product/product'
import {Category} from '../enums/Category'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	public product: Product = new Product("CocaCola", "Cold drink", 15, Category.Drink, true);
	
	constructor() { }

	ngOnInit() {	
		console.dir(this.product);
	}

}
