import { Injectable } from '@angular/core';
import {Product} from './product';
import {Category} from '../enums/Category'
@Injectable()
export class ProductService {

  constructor() { }

  getProducts(){
    return [
      new Product("CocaCola", 
                  "Coca-Cola is the most popular and biggest-selling soft drink in history, as well as one of the most recognizable brands in the world.	",
                  1,
                  Category.Drink,
                  true,
                  ["water","coca","cola"]),
      new Product("Cheesecake", 
                    "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies. Cheesecake is usually sweetened with sugar and may be flavored or topped with fruit, whipped cream, nuts, cookies, fruit sauce, or chocolate syrup",
                    12, 
                    Category.Dessert, 
                    true, 
                    ["crackers","sugar","butter", "cream cheese", "eggs", "vanilla"]),
	  new Product("English Breakfast","English Breakfast is the first meal of a day, most often eaten in the early morning before undertaking the day's work", 10, Category.Meal, true, ["bacon", "sausages", "eggs", "coffee"]),
	  new Product("Sushi","Sushi is a traditional food from Japan made with specially prepared rice, seafoods and vegetables.", 18,Category.Meal, false, ["rice","vinegar", "nori", "seafood"])

    ];
  }
}
