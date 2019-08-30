import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { ViewChild, ElementRef} from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;
  tasks : Array<any> = [];
  id : number
  task : any = {}
  status: string = "";
  projects : Array<any> = [];
  project : any = {}
  property : ""
  parentTask: string = "No Parent Task"
  endDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor(private projectService : ProjectService, private taskService : TaskService) { }

  ngOnInit() {
  }

  isEnded(date) {
    if(date <= this.endDate) {
      return true;
    } else {
      return false;
    }
  }

  getProjects() {
    this.projectService.fetchProjects()
    .then((res) => {
      console.log(res);
      this.projects = res;
    })
  }

  selectedProject(projectId) {
    this.projectService.getProject(projectId)
    .then((res) => {
      console.log(res);
      this.project = res[0];
      this.project.tasks.forEach((task, idx)=> {
           this.project.tasks[idx].parentTask = this.project.parentTasks.find((parentTask) => { return parentTask.parentId === this.project.tasks[idx].parentId })
      })
      delete this.project.parentTasks
      console.log(JSON.stringify(this.project))
    })
    this.closeModal.nativeElement.click();
  }

  sortBy(prop) {
    this.property = prop; 
  }

  endTask(id) {
        let currentTask = this.project.tasks.find((task) => { return task.taskId === id })
        currentTask.endDate = formatDate(new Date(), 'yyyy-MM-dd', 'en')
        currentTask.status = "Completed"
        var tmpTask = JSON.parse(JSON.stringify(currentTask))
        delete tmpTask.parentTask
        this.taskService.updateTask(tmpTask)
        .then(res => {
            console.log(res);
            if (res.taskId > 0) {
              this.status = 'Task Ended successfully!!';
            }
        }, err => {
            console.log('server err');
            console.log(err);
        })
        .catch(err => {
            console.log('client err');
            console.log(err);
        })
  }
}
