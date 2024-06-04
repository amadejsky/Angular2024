import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';
import { DataService } from '../shared/data-service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit{
user: { name: string; } | undefined;
isLoggedIn = false;
data: string | undefined;

constructor(private userService: UserService, private dataService: DataService){}

ngOnInit(): void {
  this.user = this.userService.user;
  // this.data = this.dataService.getDetails();
  // this.dataService.getDetails().then((data:string)=> this.data = data)
}
}
