import {Category} from '../enums/Category';

export class Product {
	public name: string = "CocaCola";
	public description: string = "Cold drink.";
	public price:number = 5;
	public category: Category = Category.Drink;
	public isAvailable: boolean = true;

	constructor(name:string, desc: string, price: number, category: Category, available:boolean) {
		this.name = name;
		this.description = desc;
		this.price = price;
		this.category = category;
		this.isAvailable = available;		
	}
}
