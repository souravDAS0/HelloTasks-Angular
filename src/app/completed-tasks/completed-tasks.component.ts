import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent implements OnInit {
  completedTasks!: Task[];
  showTaskDetails = false;
  selectedTask!: Task;

  ngOnInit(): void {
    this.completedTasks = JSON.parse(localStorage.getItem('completed') ?? '');
  }

  toggle(task: Task) {
    if (task === this.selectedTask) {
      this.showTaskDetails = !this.showTaskDetails;
    } else {
      this.selectedTask = task;
      this.showTaskDetails = true;
    }
    // console.log(this.showTaskDetails);
  }

  closeTask() {
    this.showTaskDetails = !this.showTaskDetails;
  }

  deleteTask(task: Task) {
    const index: number = this.completedTasks.indexOf(task);
    if (index !== -1) {
      this.completedTasks.splice(index, 1);
    }
    this.showTaskDetails = false;
    localStorage.setItem('completed', JSON.stringify(this.completedTasks));
  }
}
