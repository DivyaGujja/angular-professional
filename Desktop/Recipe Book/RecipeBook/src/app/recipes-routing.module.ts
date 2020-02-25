import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './Recipes/recipes.component';
import { authGuardService } from './Auth/auth-guard.service';
import { RecipeDefaultComponent } from './Recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './Recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './Recipes/recipe-details/recipe-details.component';
import { recipeResolveService } from './services/recipeResolve.service';

const routes: Routes = [
    {path: '', component: RecipesComponent, 
    canActivate: [authGuardService],
    children: [
        {path: '', component: RecipeDefaultComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailsComponent, resolve: [recipeResolveService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve:[recipeResolveService]}
    ]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class recipesRoutingModule {
 
}