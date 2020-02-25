import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListEditComponent } from './Shopping/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { shoppingListComponent } from './Shopping/ShoppingList/shoppingList.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    declarations: [
       ShoppingListEditComponent,
       shoppingListComponent
    ],
    imports: [
       CommonModule,
       FormsModule,
       RouterModule.forChild([{path: '', component: shoppingListComponent}])
    ],
    exports: [
       ShoppingListEditComponent,
       shoppingListComponent,
       RouterModule
    ]
})
export class shoppingListModule {

}