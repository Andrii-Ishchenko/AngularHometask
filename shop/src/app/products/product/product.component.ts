import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';
import { ProductCommunicationService } from '../product-communication.service';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  outputs:['notifyChanged']
})
export class ProductComponent implements OnInit {

	@Output()
	notifyChanged : EventEmitter<null> = new EventEmitter();

	@Input()
	product : Product;

	@HostListener('click',['$event']) 
	select(event){
		console.log("select " + this.product.name);
		this.productCommunicationService.push(this.product);
	}

  constructor(private productCommunicationService : ProductCommunicationService, private cartService : CartService) { }

  ngOnInit() {
  }

  addToCart(){
	this.cartService.addToCart(this.product);
	console.log("Product "+ this.product.name +" was added to cart!");
	this.notify();
  }

  notify(){
	  this.notifyChanged.emit();
  }

}
