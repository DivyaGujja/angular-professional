import { NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', loadChildren: './recipes.module#recipesModule'},
    {path: 'shopping-list', loadChildren: './shopping-list.module#shoppingListModule'},
    {path: 'auth', loadChildren: './auth.module#authModule'},
    {path: 'home', redirectTo: '/recipes'}
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
   exports: [RouterModule]
})
export class AppRoutingModule {}