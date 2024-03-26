import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('name') name: ElementRef<HTMLInputElement>;
  @ViewChild('amount') amount: ElementRef<HTMLInputElement>;
  // @Output('emitIngredient') emitIngredient = new EventEmitter<Ingredient>();
  constructor(private shoppingService: ShoppingListService){}

  addIngredientToArray(){
    const name: string = this.name.nativeElement.value;
    const amount: number = Number(this.amount.nativeElement.value);
    const ingredient= new Ingredient(name,amount);
    this.shoppingService.addItem(ingredient);
  }
}
