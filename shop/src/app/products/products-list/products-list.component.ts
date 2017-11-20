import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ProductCommunicationService } from '../product-communication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  public products : Array<Product>;
  public totalCost : number;
  public selectedProduct : Product = null;



  constructor(private productService : ProductService, private productCommunicationService: ProductCommunicationService) { }

	ngOnInit() {
		this.products = this.productService.getProducts();
		this.totalCost = this.productService.getTotalCost();
	}

	onProductSelected(p: Product){
		this.selectedProduct = p;
		this.productCommunicationService.push(p);
	}

  onProductChanged(p: Product){
	  this.totalCost = this.productService.getTotalCost();
  }

}
