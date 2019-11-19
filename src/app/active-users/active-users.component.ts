import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersService : UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
}
