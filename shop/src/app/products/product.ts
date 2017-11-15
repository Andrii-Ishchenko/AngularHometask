import { Category } from './category';

export class Product {

	constructor(public name: string, 
		public description : string, 
		public price : number, 
		public category: Category,
		public available : boolean,
		public capacity: number,
		public genres: Array<string>, 
		public imageId : number) {
	}

	canBeBought() : boolean {
		return this.available && this.capacity > 0;
	}
}
