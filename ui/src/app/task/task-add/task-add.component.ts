import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewChild, ElementRef} from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { ParentTaskService } from 'src/app/services/parenttask.service';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @ViewChild('closeProjectModal') closeProjectModal: ElementRef;
  @ViewChild('closeUserModal') closeUserModal: ElementRef;
  @ViewChild('closeParentModal') closeParentModal: ElementRef;
  myForm : FormGroup
  status : string = ""
  error : string = ""
  task : {}
  enableParent : boolean = false;
  projects : Array<any> = [];
  project : any = {}
  users : Array<any> = [];
  user : any = {}
  parents : Array<any> = [];
  parent : any = {}
  isParentProj : boolean = false;
  id : number
  btnType : string = ""
  constructor(private parentService : ParentTaskService, private taskService : TaskService, 
    private projectService : ProjectService, private userService : UserService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'taskGroup': new FormGroup({
          'project': new FormControl('', Validators.required),
          'taskName': new FormControl('', Validators.required),
          'priority': new FormControl('', Validators.required),
          'parentTask': new FormControl('', Validators.required),
          'startDate': new FormControl('', Validators.required),
          'endDate': new FormControl('', Validators.required),
          'user': new FormControl('', Validators.required),
          'parentCheck': new FormControl('', Validators.required)
      })
  })
  console.log(this.enableParent);
  this.myForm.controls['taskGroup']['controls'].startDate.setValue(this.currentDate());
  this.myForm.controls['taskGroup']['controls'].endDate.setValue(this.endDate());
  this.myForm.statusChanges.subscribe((enableParent:any) => console.log(enableParent));
  const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(+id > 0){
        this.id = +id;
        this.getTask(this.id);
        this.btnType = "Update";
    } else {
        this.btnType = "Add";
    }
  }

  getTask(taskId) {
    this.taskService.getTask(taskId)
    .then((res) => {
      console.log(res);
      this.task = res;
      this.myForm.controls['taskGroup']['controls'].taskName.setValue(this.task["taskName"]);
      this.myForm.controls['taskGroup']['controls'].priority.setValue(this.task["priority"]);
      this.myForm.controls['taskGroup']['controls'].startDate.setValue(this.task["startDate"]);
      this.myForm.controls['taskGroup']['controls'].endDate.setValue(this.task["endDate"]);
      this.getUser(this.task["userId"]);
      this.getProject(this.task["projectId"]);
      this.getParentTask(this.task["parentId"]);
    })
  }

  currentDate() {
    const currentDate = new Date();
    console.log(currentDate.getDate() + 1);
    return currentDate.toISOString().substring(0,10);
  }
  endDate() {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    console.log(currentDate.getDate());
    return currentDate.toISOString().substring(0,10);
  }

  handleChange(value: boolean) {
    if(value) {
        this.myForm.controls['taskGroup']['controls'].project.disable();
        this.myForm.controls['taskGroup']['controls'].taskName.enable();
        this.myForm.controls['taskGroup']['controls'].priority.disable();
        this.myForm.controls['taskGroup']['controls'].startDate.disable();
        this.myForm.controls['taskGroup']['controls'].endDate.disable();
        this.isParentProj = true;
    } else {
        this.myForm.controls['taskGroup']['controls'].project.enable();
        this.myForm.controls['taskGroup']['controls'].taskName.enable();
        this.myForm.controls['taskGroup']['controls'].priority.enable();
        this.myForm.controls['taskGroup']['controls'].startDate.enable();
        this.myForm.controls['taskGroup']['controls'].endDate.enable();
        this.isParentProj = false;
    }
  }
  resetForm() {
    this.myForm.reset();
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
    })
    this.closeProjectModal.nativeElement.click();
  }

  getProject(projectId) {
    this.projectService.getProject(projectId)
    .then((res) => {
      console.log(res);
      this.project = res[0];
    })
  }

  getUsers() {
    this.userService.fetchUsers()
    .then((res) => {
      console.log(res);
      this.users = res;
    })
  }
  
  selectedUser(userId) {
    this.userService.getUser(userId)
    .then((res) => {
      console.log(res);
      this.user = res[0];
    })
    this.closeUserModal.nativeElement.click();
  }

  getUser(userId) {
    this.userService.getUser(userId)
    .then((res) => {
      console.log(res);
      this.user = res[0];
    })
  }

  getParentTasks() {
    this.parentService.fetchParentTasks()
    .then((res) => {
      console.log(res);
      this.parents = res;
    })
  }
  
  selectedParentTask(parentId) {
    this.parentService.getParentTask(parentId)
    .then((res) => {
      console.log(res);
      this.parent = res[0];
    })
    this.closeParentModal.nativeElement.click();
  }

  getParentTask(parentId) {
    this.parentService.getParentTask(parentId)
    .then((res) => {
      console.log(res);
      this.parent = res[0];
    })
  }

  onSubmit() {
    let validDateRange = this.validDateRange(this.myForm.value.taskGroup.startDate, this.myForm.value.taskGroup.endDate);
    if(validDateRange) {
      if(this.isParentProj) {
        this.task = {"parentTask":this.myForm.value.taskGroup.taskName}
        this.parentService.addTask(this.task)
          .then(res => {
              console.log(res);
              if (res.parentId > 0) {
                this.status = "Parent Task Added !!"
                this.myForm.reset();
              }
          }, err => {
              console.log('server err');
              console.log(err);
          }).catch(err => {
              console.log('client err');
              console.log(err);
          })
      } else {
        this.task = {"taskName":this.myForm.value.taskGroup.taskName,
        "startDate":this.myForm.value.taskGroup.startDate,
        "endDate":this.myForm.value.taskGroup.endDate,
        "priority":this.myForm.value.taskGroup.priority, 
        "status":"In Progress",
        "parentId":this.parent.parentId,
        "projectId":this.project.projectId,
        "userId":this.user.userId}
        if(this.id > 0) {
          this.taskService.updateTask(this.task)
          .then(res => {
                console.log(res);
                if (res.taskId > 0) {
                  this.status = "Task Updated !!"
                  this.myForm.reset();
                }
            }, err => {
                console.log('server err');
                console.log(err);
            })
            .catch(err => {
                console.log('client err');
                console.log(err);
            })
        } else {
            this.taskService.addTask(this.task)
            .then(res => {
                console.log(res);
                if (res.taskId > 0) {
                  this.status = "Task Added !!"
                  this.myForm.reset();
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
    } else {
      this.error = "Task End Date should be greater than Start Date!"
    }
  }
  validDateRange(startDate, endDate) {
    var sDate = new Date(startDate);
    var eDate = new Date(endDate);
    if(eDate <= sDate) {        
        return false;
    } else {
        return true;
    }
  }
}
