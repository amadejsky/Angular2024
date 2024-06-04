import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AlertComponent } from './alert/alert.component';
import {createCustomElement} from '@angular/elements'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainNavComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'angular-config';
  content:string |Component| null = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer){
    const AlertElement = createCustomElement(AlertComponent,{injector: injector});
    customElements.define('my-alert', AlertElement);
    setTimeout(()=>{
      this.content=domSanitizer.bypassSecurityTrustHtml("<my-alert message ='Rendered dynamically'></my-alert>");
    },1000);
  }
}
