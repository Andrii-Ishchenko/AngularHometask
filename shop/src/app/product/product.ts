import {Category} from '../enums/Category';

export class Product {
	public name: string;
	public description: string;
	public price:number;
	public category: Category;
	public isAvailable: boolean;
	public ingridients: Array<string>;

	constructor(name:string, desc: string, price: number, category: Category, available:boolean, ingridients: Array<string>) {
		this.name = name;
		this.description = desc;
		this.price = price;
		this.category = category;
		this.isAvailable = available;
		this.ingridients = ingridients;		
	}

	getCategoryName() {
		return Category[this.category];
	}
}
