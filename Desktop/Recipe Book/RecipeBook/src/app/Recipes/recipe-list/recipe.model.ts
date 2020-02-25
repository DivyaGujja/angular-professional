import { Ingredient } from 'src/app/Shared/ingredient.model';

export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];

    constructor(name: string, desc: string, image: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.ingredients = ingredients;
    }
}