import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { TaskService } from './services/task.service';
import { ParentTaskService } from './services/parenttask.service';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';
import { ProjectPipe } from './pipes/project.pipe';
import { UserPipe } from './pipes/user.pipe';
import { UserSortPipe } from './pipes/usersort.pipe';
import { ProjectSortPipe } from './pipes/projectsort.pipe';
import { TaskSortPipe } from './pipes/tasksort.pipe';

const routes : Routes = [
  { path: '', redirectTo: '/addUser', pathMatch: 'full' },
  { path: 'viewTask', component: TaskViewComponent},
  { path: 'addTask', component: TaskAddComponent},
  { path: 'addTask/:id', component: TaskAddComponent},
  { path: 'addProject', component: ProjectAddComponent},
  { path: 'addProject/:id', component: ProjectAddComponent},
  { path: 'addUser', component: UserAddComponent},
  { path: 'addUser/:id', component: UserAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectAddComponent,
    TaskAddComponent,
    TaskViewComponent,
    UserAddComponent,
    ProjectPipe,
    UserPipe,
    UserSortPipe,
    ProjectSortPipe,
    TaskSortPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectPipe,
    UserPipe,
    UserSortPipe,
    ProjectSortPipe,
    TaskSortPipe,
    TaskService, 
    ParentTaskService, 
    ProjectService, 
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
