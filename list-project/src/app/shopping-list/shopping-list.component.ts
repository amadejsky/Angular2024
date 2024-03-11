import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes',15),
    new Ingredient('Cheese',4),
    new Ingredient('Basil',2),
    new Ingredient('Garlic',1)
  ];


}
