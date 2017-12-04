import {Category} from '../enums/Category';

export class Product {

	constructor(public name:string,public desc: string, public price: number, public category: Category, public available:boolean, public ingridients: Array<string>) {

	}

	getCategoryName() {
		return Category[this.category];
	}
}
