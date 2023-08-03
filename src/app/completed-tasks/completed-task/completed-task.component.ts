import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss'],
})
export class CompletedTaskComponent {
  @Input() tasks!: Task[];

  @Output() toggleEmit = new EventEmitter<Task>();

  @Output() taskDelete = new EventEmitter<Task>();

  emitToggle(task: Task) {
    this.toggleEmit.emit(task);
  }

  deleteTask(task: Task) {
    this.taskDelete.emit(task);
  }
}
