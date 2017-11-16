import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';
import { ProductCommunicationService } from './product-communication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ProductsListComponent, SelectedProductComponent],
  providers: [ProductService, ProductCommunicationService],
  declarations: [ProductsListComponent, ProductComponent, SelectedProductComponent]
})
export class ProductsModule { }
