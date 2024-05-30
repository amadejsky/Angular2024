import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_ING, AddIngredient } from '../store/shopping-list.actions';
import * as ShoppingActions from '../store/shopping-list.actions'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;

  // @ViewChild('name') name: ElementRef<HTMLInputElement>;
  // @ViewChild('amount') amount: ElementRef<HTMLInputElement>;
  // @Output('emitIngredient') emitIngredient = new EventEmitter<Ingredient>();
  constructor(
    private shoppingService: ShoppingListService,
    private store: Store<{
      shoppingList: { ingredients: Ingredient[]}
    }>
  ){}
  
  addIngredientToArray(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
        // this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
        this.store.dispatch(new ShoppingActions.UpdateIngredient({index: this.editedItemIndex, ingredient: newIngredient}))
        console.log('item updated')
    }else{
      // this.shoppingService.addItem(newIngredient);
      this.store.dispatch(new ShoppingActions.AddIngredient(newIngredient))  
      
    }this.editMode = !this.editMode;
      this.slForm.reset();
    
  }
  ngOnInit(): void {
   this.subscription = this.shoppingService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedIngredient = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        })
      }
    );

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    // this.shoppingService.deleteItem(this.editedItemIndex);
    this.store.dispatch(new ShoppingActions.DeleteIngredient(this.editedItemIndex))
    this.onClear();
  }
}
