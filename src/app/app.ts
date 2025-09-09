import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User],
})
export class App {
  users = DUMMY_USERS;
}
