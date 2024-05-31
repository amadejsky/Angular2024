import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_ING, AddIngredient } from '../store/shopping-list.actions';
import * as ShoppingActions from '../store/shopping-list.actions'
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;

  editedIngredient: Ingredient;

  // @ViewChild('name') name: ElementRef<HTMLInputElement>;
  // @ViewChild('amount') amount: ElementRef<HTMLInputElement>;
  // @Output('emitIngredient') emitIngredient = new EventEmitter<Ingredient>();
  constructor(
    private store: Store<fromApp.AppState>
  ){}
  
  addIngredientToArray(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
        // this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
        this.store.dispatch(new ShoppingActions.UpdateIngredient(newIngredient)
      );
      
    }else{
      // this.shoppingService.addItem(newIngredient);
      this.store.dispatch(new ShoppingActions.AddIngredient(newIngredient))  
      
    }this.editMode = !this.editMode;
      this.slForm.reset();
    
  }
  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1){
        this.editMode = true;
        this.editedIngredient = stateData.editedIngredient;
        this.editedItemIndex = stateData.editedIngredientIndex;
        this.slForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        })
      }else{
        this.editMode = false;
      }
    });
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingActions.StopEdit());
  }

  onDelete(){
    // this.shoppingService.deleteItem(this.editedItemIndex);
    this.store.dispatch(new ShoppingActions.DeleteIngredient())
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
}
