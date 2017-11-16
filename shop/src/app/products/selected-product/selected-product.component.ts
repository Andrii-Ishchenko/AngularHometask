import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../../cart/cart.service';
import { ImageService } from '../../image/image.service';

@Component({
  selector: 'selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

	@ViewChild('img') el:ElementRef;

	@Input()
	product : Product;

	constructor(private cartService : CartService,private  imageService : ImageService) { }

	ngOnInit() {
		var src = this.imageService.getImageSrcById(this.product.imageId);
		console.log(src);
	}

}
