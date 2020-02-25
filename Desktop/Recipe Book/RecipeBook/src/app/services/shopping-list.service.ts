import { Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]> ();
  startedEdit = new Subject<number> ();
  private ingredients:Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientbyIndex(index:number) {
    return this.ingredients[index];
  }

  updateIngredients(index:number, newIngredient:Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredients(index:number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
}
