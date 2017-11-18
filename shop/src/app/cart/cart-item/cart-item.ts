import { Product } from "../../products/product";

export class CartItem {

	constructor(public product : Product, public quantity : number ) {

	}

	getTotalPrice() : number{
		return this.product.price * this.quantity;
	}

	

}
