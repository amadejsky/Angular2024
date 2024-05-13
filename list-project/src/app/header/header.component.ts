import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataSotrageService } from '../shared/data-storage-service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

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

  constructor(private dataStorageService: DataSotrageService, private authService: AuthService){}

  onSelect(feature: string){
    this.selected.emit(feature);
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user=>{
      this.isAuth = !user ? false: true;
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
  }
}
