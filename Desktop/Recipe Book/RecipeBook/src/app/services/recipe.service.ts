import { Injectable } from '@angular/core';
import { Recipe } from '../Recipes/recipe-list/recipe.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]> ();

  private recipes: Recipe[] = [];
  //  new Recipe(
  //    'Schnitzel',
  //    'Tasty American Dish',
  //    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //    [
  //      new Ingredient('Meat', 1),
  //      new Ingredient('French Fries', 20)
  //    ])
  //];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    console.log(this.recipes.slice());
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipebyIndex(index: number) {
    return this.recipes[index];
  }
  
  AddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,recipe:Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
