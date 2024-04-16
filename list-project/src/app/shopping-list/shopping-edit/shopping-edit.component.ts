import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  // @ViewChild('name') name: ElementRef<HTMLInputElement>;
  // @ViewChild('amount') amount: ElementRef<HTMLInputElement>;
  // @Output('emitIngredient') emitIngredient = new EventEmitter<Ingredient>();
  constructor(private shoppingService: ShoppingListService){}

  addIngredientToArray(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingService.addItem(newIngredient);
  }
}
