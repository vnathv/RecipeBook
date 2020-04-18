import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg'),
    new Recipe('New Test', "New Test Recipe Description", "https://p1.pxfuel.com/preview/189/65/264/recipe-dry-fruits-almond-nuts-food-dry.jpg")
  ];

  @Output() onRecipeItemSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeItemSelected.emit(recipe);
  }
}
