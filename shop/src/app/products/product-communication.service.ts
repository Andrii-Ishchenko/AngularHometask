import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product';

@Injectable()
export class ProductCommunicationService {

 private channel = new Subject<Product>();

 public channel$ = this.channel.asObservable();
  
 push(p: Product){
	 this.channel.next(p);
 }

}
