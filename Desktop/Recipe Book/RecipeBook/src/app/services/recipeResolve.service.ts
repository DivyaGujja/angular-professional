import { Injectable } from '@angular/core';
import { datastorageService } from './datastorage.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../Recipes/recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({providedIn: 'root'})
export class recipeResolveService implements Resolve<Recipe[]> {
    constructor(private datastorageservice:datastorageService,
                private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if (recipes.length === 0) {
          return this.datastorageservice.fetchRecipes();
        } else {
           return recipes;
        }
    }
}