import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html'
})

export class ShoppingListComponent {
  ingredients: Ingredient[] =[];

  onAddedToShoppingList(ingredient:Ingredient){
    this.ingredients.push(ingredient)
  }

  onDeletedFromShoppingList(){
    this.ingredients.pop();
  }

}
