import { Component, computed, EventEmitter, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id());
  }
}
