import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AssigmentComponent } from './assigment/assigment.component';

import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';

// const routes: Routes = [
//   { path: '', component: AppComponent},
//   { path: 'assigment', component: AssigmentComponent}

// ]
@NgModule({
  declarations: [
    AppComponent,
    AssigmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
