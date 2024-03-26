import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(private userService: UserService){}
  setToActive(id: number) {
    this.userService.setToActive(id);
  }
  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }
  
}
