import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Input() tasks!: Task[];
  newTask!: Task;
  @Output() taskClose = new EventEmitter<any>();
  @Output() addTask = new EventEmitter<Task>();

  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      taskName: ['', [Validators.required]],
      taskDetails: ['', [Validators.required]],
    });
  }
  get m() {
    return this.myForm.controls;
  }

  onClickSubmit(data: Task) {
    this.addTask.emit(data);
  }

  close() {
    this.taskClose.emit();
  }
}
