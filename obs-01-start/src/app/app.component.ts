import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated : boolean = false;
  private subscription: Subscription;
  constructor(private uService: UserService) {}

  ngOnInit() {
    this.subscription = this.uService.activatedEmitter.subscribe((isActive: boolean) => {
      if(isActive){
        this.isActivated = true;
      }else {
        this.isActivated = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
