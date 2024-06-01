import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataSotrageService } from '../shared/data-storage-service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as FromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuth = false;
  private userSub: Subscription;
  @Output('selected') selected = new EventEmitter<string>();

  constructor(private dataStorageService: DataSotrageService, private authService: AuthService,
    private store: Store<FromApp.AppState>
  ){}

  onSelect(feature: string){
    this.selected.emit(feature);
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.store.dispatch(new RecipeActions.FetchRecipes())
  }

  ngOnInit(): void {
    this.userSub = this.store.select('auth').pipe(map(authState=>{
      return authState.user
    })).subscribe(user=>{
      this.isAuth = !user ? false: true;
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
  }
}
