import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';

const routes: Routes = [
  { path: 'myTasks', component: TasksComponent },
  { path: '', redirectTo: '/myTasks', pathMatch: 'full' },
  { path: 'completedTasks', component: CompletedTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
