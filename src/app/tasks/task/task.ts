import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Card } from '../../shared/card/card';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
