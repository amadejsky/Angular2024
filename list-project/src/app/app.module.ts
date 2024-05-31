import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './shopping-list/store/shopping-list.reducer';
import { authReducer } from './auth/store/auth.reducer';
import * as fromApp from './store/app.reducer';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    AuthModule,
    SharedModule,
    CoreModule
  ],
  providers: [
   ],
  bootstrap: [AppComponent],

})
export class AppModule { }
