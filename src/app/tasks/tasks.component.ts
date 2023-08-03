import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTask!: Task;

  completedTasks: Task[] = [];
  completedTask!: Task;

  showTaskDetails = false;
  selectedTask!: Task;
  openTask: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem('tasks') ?? '');
    this.completedTasks = JSON.parse(localStorage.getItem('completed') ?? '');
  }

  toggle(task: Task) {
    if (task === this.selectedTask) {
      this.showTaskDetails = !this.showTaskDetails;
    } else {
      this.selectedTask = task;
      this.showTaskDetails = true;
    }
    this.openTask = false;
    // console.log(this.showTaskDetails);
  }

  deleteTask(task: Task) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.showTaskDetails = false;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  openAddTask() {
    this.openTask = true;
    this.showTaskDetails = false;
  }

  closeAddTask() {
    this.openTask = false;
  }

  addNewTask(task: Task) {
    this.newTask = {
      taskName: task.taskName,
      taskDetails: task.taskDetails,
      taskTime: new Date(),
    };
    this.tasks = [...this.tasks, this.newTask];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    this.closeAddTask();
  }

  closeTaskDetails() {
    this.showTaskDetails = !this.showTaskDetails;
  }

  completed(data: Task) {
    this.completedTask = {
      taskName: data.taskName,
      taskDetails: data.taskDetails,
      taskTime: new Date(),
    };

    this.completedTasks = [...this.completedTasks, this.completedTask];
    localStorage.setItem('completed', JSON.stringify(this.completedTasks));
    this.deleteTask(data);
    console.log(this.completedTasks);
  }
}
