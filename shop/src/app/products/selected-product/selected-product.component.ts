import { Component, OnInit, Input, ElementRef, ViewChild, OnDestroy, AfterViewInit, AfterViewChecked, ChangeDetectorRef  } from '@angular/core';
import { Product } from '../product';
import { ImageService } from '../../image/image.service';
import { ProductService } from '../product.service';
import { ProductCommunicationService } from '../product-communication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit, OnDestroy {

	@ViewChild('img') 
	el;

	private subscription : Subscription;

	product : Product = null;

	//ChangeDetector is used to find image el after view has been updated after product came up for the first time.
	constructor(private productCommunicationService : ProductCommunicationService, private imageService : ImageService, private cdRef:ChangeDetectorRef) { }

	ngOnInit() {
		this.subscription =	this.productCommunicationService.channel$.subscribe(p => this.setProduct(p));
	}

	setProduct(p : Product){
		this.product = p;
		this.cdRef.detectChanges();
		this.el.nativeElement.src =  this.imageService.getImageSrcById(this.product.imageId);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

}
