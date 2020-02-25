import { NgModule } from '@angular/core';
import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './Recipes/recipe-details/recipe-details.component';
import { RecipeDefaultComponent } from './Recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './Recipes/recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { recipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './Recipes/recipes.component';
import { sharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeDefaultComponent,
    RecipeEditComponent
    ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    recipesRoutingModule,
    sharedModule
  ],
  exports: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeDefaultComponent,
    RecipeEditComponent  
  ] 
})
export class recipesModule {

}