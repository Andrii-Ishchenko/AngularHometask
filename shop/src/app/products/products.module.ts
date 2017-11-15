import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ProductsListComponent],
  providers: [ProductService],
  declarations: [ProductsListComponent, ProductComponent]
})
export class ProductsModule { }
