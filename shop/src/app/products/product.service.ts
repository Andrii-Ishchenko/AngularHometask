import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category';

@Injectable()
export class ProductService {

	private selectedProduct : Product = null;

	private productList : Product[] = [
		new Product("The Odyssey", "Epic greek poem about hero Odysseus and his journey home.", 15, Category.Books, true, 8, ["Poem", "Epic"], 0),
		new Product("War and Peace", "Epic novel about events that lead to Napoleon's invasion to Russia", 25, Category.Books, true, 2, ["Drama", "Historical", "Realism"],1),
		new Product("Titanic", "Love story in crysis", 12, Category.Movies, true, 1, ["Drama", "Romantic", "Disaster"], 2),
		new Product("Doom", "3D Space Shooter on Mars", 3, Category.Games, true, 9, ["FPS", "Horror"], 3)
	  ];

	constructor() { }

	getProducts() : Product[]{
		return this.productList;
	}

	getTotalCost(){
		let sum : number = 0;
		this.productList.forEach(function(element){ sum += element.price * element.capacity;})
		return sum;
	}

	selectProduct(p : Product){
		this.selectedProduct = p;
	}

	getSelected() : Product{
		return this.selectedProduct;
	}

}
