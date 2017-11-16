import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ImageService } from '../../image/image.service';
import { ProductService } from '../product.service';
import { ProductCommunicationService } from '../product-communication.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('image') 
	el:ElementRef;

	source: string;
	private subscription : Subscription;

	product : Product;

	constructor(private productCommunicationService : ProductCommunicationService, private  imageService : ImageService) { }

	ngOnInit() {
		
	}

	setSelectedProduct(p: Product){
		this.product = p;
		this.source = this.imageService.getImageSrcById(this.product.imageId);
	//	this.el.nativeElement.src = this.source;
		console.log(this.source);
	}

	ngAfterViewInit(): void {
		this.subscription =	this.productCommunicationService.channel$.subscribe( p => this.setSelectedProduct(p));

	}


	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

}
