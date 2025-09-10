import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User, Tasks],
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
