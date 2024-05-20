import { Component, OnInit } from '@angular/core';
import { Recipe } from '../app/shared/recipe.model'
import { AuthService } from './auth/auth.service';
import { LoggingService } from './test-logging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private loggingService: LoggingService){}
  title = 'list-project';
 ngOnInit(): void {
   this.authService.autologin();
   this.loggingService.printLog('Hello from AppComponent NgOnInit');
 }

}
