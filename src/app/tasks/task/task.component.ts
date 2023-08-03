import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() tasks!: Task[];

  @Output() toggleEmit = new EventEmitter<Task>();

  @Output() taskDelete = new EventEmitter<Task>();

  @Output() completed = new EventEmitter<Task>();

  ngOnInit(): void {}

  emitToggle(task: Task) {
    this.toggleEmit.emit(task);
  }

  deleteTask(task: Task) {
    this.taskDelete.emit(task);
  }

  selectedValue(task: Task) {
    this.completed.emit(task);
  }
}
