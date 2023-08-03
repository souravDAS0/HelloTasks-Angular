import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './tasks/task/task.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { CompletedTaskComponent } from './completed-tasks/completed-task/completed-task.component';
import { CompletedTaskDetailsComponent } from './completed-tasks/completed-task-details/completed-task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletedTasksComponent,
    TasksComponent,
    TaskDetailsComponent,
    TaskComponent,
    AddTaskComponent,
    CompletedTaskComponent,
    CompletedTaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
