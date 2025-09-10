import { Component, computed, input, output } from '@angular/core';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<IUser>();
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
