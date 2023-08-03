import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent {
  @Input() task!: Task;

  @Input() showTaskDetails!: boolean;

  @Output() taskDelete = new EventEmitter<Task>();

  @Output() close = new EventEmitter<any>();

  @Output() completed = new EventEmitter<Task>();

  deleteTask(task: Task) {
    this.taskDelete.emit(task);
  }

  closeDetails() {
    this.close.emit();
  }

  selectedValue(task: Task) {
    this.completed.emit(task);
  }
}
