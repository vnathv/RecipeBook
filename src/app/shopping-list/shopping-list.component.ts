import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html'
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Tomato", 100),
    new Ingredient("Chilly", 50)
  ];

}
