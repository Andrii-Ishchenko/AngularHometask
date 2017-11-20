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
	productChanged : EventEmitter<Product> = new EventEmitter<Product>();

	@Output()
	productSelected : EventEmitter<Product> = new EventEmitter<Product>();

	@Input()
	product : Product;

	@Input()
	isSelected : boolean;

	@HostListener('click',['$event']) 
	select(event){
		this.notifySelected();
	}

  constructor(private cartService : CartService) { }

  ngOnInit() {
  }

  addToCart(){
		this.cartService.addToCart(this.product);
		this.notifyChanged();
  }

  setClasses(){
	return {
		  "selected-card": this.isSelected
	  }	  
  }

  setButtonClasses(){
	  return {
		  'disabled' : this.product.capacity  == 0 ,
		  'btn-primary' : this.product.capacity >= 4,
		  'btn-warning' : this.product.capacity >= 2 &&  this.product.capacity < 4 ,
		  'btn-danger' : this.product.capacity  == 1,
		  'btn-secondary' : this.product.capacity == 0
	  }
  }

  private notifyChanged(){
	  this.productChanged.emit(this.product);
  }

  private notifySelected(){
	  this.productSelected.emit(this.product);
  }

}
