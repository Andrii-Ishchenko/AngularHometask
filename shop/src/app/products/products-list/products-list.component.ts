import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products : Array<Product>;
  public totalCost : number;

  constructor(private productService : ProductService) { }

  ngOnInit() {
	this.products = this.productService.getProducts();
	this.totalCost = this.productService.getTotalCost()
  }

  onProductChanged(){
	  console.log("onProductChanged - parrent");
	this.totalCost = this.productService.getTotalCost();
  }

}
