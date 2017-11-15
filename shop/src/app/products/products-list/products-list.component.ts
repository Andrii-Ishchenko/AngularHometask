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

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
