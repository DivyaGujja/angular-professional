import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../Recipes/recipe-list/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators'
import { authService } from '../Auth/auth.service';

@Injectable({ providedIn: 'root'})
export class datastorageService {
   constructor(private http: HttpClient,
               private recipeService: RecipeService,
               private authservice: authService) {}

   storeRecipes() {
       const recipes = this.recipeService.getRecipes();
       this.http.put('https://recipe-book-project-dd7f5.firebaseio.com/recipes.json',recipes).subscribe(
           (recipes:Recipe[]) => {console.log(recipes)}
       );
   }
   
   fetchRecipes() {
       
        return this.http.get<Recipe[]>(
            'https://recipe-book-project-dd7f5.firebaseio.com/recipes.json')
            .pipe(map( recipes => {
            return recipes.map( recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
           }),
           tap(recipes => {
            this.recipeService.setRecipes(recipes);
           }));
       } 
}
