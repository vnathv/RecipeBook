import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: 'shopping-edit.component.html',
  styleUrls: ['shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddToShoppingList = new EventEmitter<Ingredient>()
  @Output() onDeleteFromShoppingList = new EventEmitter<void>();
  @Output() onClearShoppingList = new EventEmitter<void>();

  @ViewChild('inputName', { static: true }) name: ElementRef;
  @ViewChild('inputAmount', { static: true }) amount: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  AddToShoppingList() {
    this.onAddToShoppingList.emit(new Ingredient(this.name.nativeElement.value, parseInt(this.amount.nativeElement.value)))

  }

  DeleteFromShoppingList() {
    this.onDeleteFromShoppingList.emit();
  }

  ClearShoppingList(){
this.onClearShoppingList.emit();
  }
}
