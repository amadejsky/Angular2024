import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  currentIngredient: Ingredient = new Ingredient('',0);
  @ViewChild('name') name: ElementRef<HTMLInputElement>;
  @ViewChild('amount') amount: ElementRef<HTMLInputElement>;
  @Output('emitIngredient') emitIngredient = new EventEmitter<Ingredient>();

  addIngredientToArray(){
    const name: string = this.name.nativeElement.value;
    const amount: number = Number(this.amount.nativeElement.value);
    this.currentIngredient= new Ingredient(name,amount);
    this.emitIngredient.emit(this.currentIngredient);
    console.log('Emited ingredient from edit is: '+this.currentIngredient.name);
  }

}
