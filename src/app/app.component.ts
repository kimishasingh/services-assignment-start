import { Component, OnInit } from '@angular/core';
import { UsersService } from './usersService.service';
import { CounterService } from './counterService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent{

}
