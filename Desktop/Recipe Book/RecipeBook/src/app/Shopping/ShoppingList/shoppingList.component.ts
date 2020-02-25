import { Component, OnInit } from "@angular/core";
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component ({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})

export class shoppingListComponent implements OnInit{
    ingredients:Ingredient[] = [];

    constructor(private slService: ShoppingListService) {}

    ngOnInit() {
      this.ingredients = this.slService.getIngredients();
      this.slService.ingredientsChanged.subscribe(
          (ingredient:Ingredient[]) => {
              this.ingredients = ingredient;
          }
      );
    }

    onEditItem(index: number) {
       this.slService.startedEdit.next(index);
    }
    
}