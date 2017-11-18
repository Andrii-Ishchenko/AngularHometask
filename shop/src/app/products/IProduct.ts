import { Category } from "./category";

export interface IProduct {
     name: string, 
     description : string, 
     price : number, 
     category: Category,
     available : boolean,
     capacity: number,
     genres: Array<string>, 
     imageId : number,

     canBeBought(): boolean,
     getCategoryName(): string   
} 