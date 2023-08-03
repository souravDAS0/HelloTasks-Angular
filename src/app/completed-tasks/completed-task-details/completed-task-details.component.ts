import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-completed-task-details',
  templateUrl: './completed-task-details.component.html',
  styleUrls: ['./completed-task-details.component.scss'],
})
export class CompletedTaskDetailsComponent {
  @Input() task!: Task;

  @Input() showTaskDetails!: boolean;

  @Output() close = new EventEmitter<any>();
  @Output() taskDelete = new EventEmitter<Task>();

  closeDetails() {
    this.close.emit();
  }

  deleteTask(task: Task) {
    this.taskDelete.emit(task);
  }
}
