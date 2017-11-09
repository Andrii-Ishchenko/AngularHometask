import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../product/product'
import {Category} from '../enums/Category'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	@Input() product: Product;
	
	constructor() { }

	ngOnInit() {	
		
	}

}
