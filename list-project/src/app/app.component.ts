import { Component, OnInit } from '@angular/core';
import { Recipe } from '../app/shared/recipe.model'
import { AuthService } from './auth/auth.service';
import { LoggingService } from './test-logging.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private store: Store<fromApp.AppState>, private loggingService: LoggingService){}
  title = 'list-project';
 ngOnInit(): void {
   this.store.dispatch(new AuthActions.AutoLogin())
   this.loggingService.printLog('Hello from AppComponent NgOnInit');
 }

}
