(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n    <div style=\"text-align:left\">\r\n  <h1 >\r\n    {{ title }}\r\n  </h1>\r\n  </div>\r\n  <hr/>\r\n  <ul class=\"nav nav-tabs\"  role=\"tablist\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\"  [routerLinkActive]=\"['active']\" data-toggle=\"tab\" routerLink=\"/addProject\" role=\"tab\">Add Project</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\"  [routerLinkActive]=\"['active']\" data-toggle=\"tab\" routerLink=\"/addTask\" role=\"tab\">Add Task</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\"  [routerLinkActive]=\"['active']\" data-toggle=\"tab\" routerLink=\"/addUser\" role=\"tab\">Add User</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\"  [routerLinkActive]=\"['active']\" data-toggle=\"tab\" routerLink=\"/viewTask\" role=\"tab\">View Task</a>\r\n    </li>\r\n  </ul>\r\n<hr/>\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Manager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project-add/project-add.component */ "./src/app/project/project-add/project-add.component.ts");
/* harmony import */ var _task_task_add_task_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task/task-add/task-add.component */ "./src/app/task/task-add/task-add.component.ts");
/* harmony import */ var _task_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task/task-view/task-view.component */ "./src/app/task/task-view/task-view.component.ts");
/* harmony import */ var _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user-add/user-add.component */ "./src/app/user/user-add/user-add.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_parenttask_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/parenttask.service */ "./src/app/services/parenttask.service.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _pipes_project_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/project.pipe */ "./src/app/pipes/project.pipe.ts");
/* harmony import */ var _pipes_user_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/user.pipe */ "./src/app/pipes/user.pipe.ts");
/* harmony import */ var _pipes_usersort_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/usersort.pipe */ "./src/app/pipes/usersort.pipe.ts");
/* harmony import */ var _pipes_projectsort_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/projectsort.pipe */ "./src/app/pipes/projectsort.pipe.ts");
/* harmony import */ var _pipes_tasksort_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/tasksort.pipe */ "./src/app/pipes/tasksort.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: '/addUser', pathMatch: 'full' },
    { path: 'viewTask', component: _task_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_9__["TaskViewComponent"] },
    { path: 'addTask', component: _task_task_add_task_add_component__WEBPACK_IMPORTED_MODULE_8__["TaskAddComponent"] },
    { path: 'addTask/:id', component: _task_task_add_task_add_component__WEBPACK_IMPORTED_MODULE_8__["TaskAddComponent"] },
    { path: 'addProject', component: _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_7__["ProjectAddComponent"] },
    { path: 'addProject/:id', component: _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_7__["ProjectAddComponent"] },
    { path: 'addUser', component: _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_10__["UserAddComponent"] },
    { path: 'addUser/:id', component: _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_10__["UserAddComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_7__["ProjectAddComponent"],
                _task_task_add_task_add_component__WEBPACK_IMPORTED_MODULE_8__["TaskAddComponent"],
                _task_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_9__["TaskViewComponent"],
                _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_10__["UserAddComponent"],
                _pipes_project_pipe__WEBPACK_IMPORTED_MODULE_15__["ProjectPipe"],
                _pipes_user_pipe__WEBPACK_IMPORTED_MODULE_16__["UserPipe"],
                _pipes_usersort_pipe__WEBPACK_IMPORTED_MODULE_17__["UserSortPipe"],
                _pipes_projectsort_pipe__WEBPACK_IMPORTED_MODULE_18__["ProjectSortPipe"],
                _pipes_tasksort_pipe__WEBPACK_IMPORTED_MODULE_19__["TaskSortPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                _pipes_project_pipe__WEBPACK_IMPORTED_MODULE_15__["ProjectPipe"],
                _pipes_user_pipe__WEBPACK_IMPORTED_MODULE_16__["UserPipe"],
                _pipes_usersort_pipe__WEBPACK_IMPORTED_MODULE_17__["UserSortPipe"],
                _pipes_projectsort_pipe__WEBPACK_IMPORTED_MODULE_18__["ProjectSortPipe"],
                _pipes_tasksort_pipe__WEBPACK_IMPORTED_MODULE_19__["TaskSortPipe"],
                _services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"],
                _services_parenttask_service__WEBPACK_IMPORTED_MODULE_12__["ParentTaskService"],
                _services_project_service__WEBPACK_IMPORTED_MODULE_13__["ProjectService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipes/project.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/project.pipe.ts ***!
  \***************************************/
/*! exports provided: ProjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPipe", function() { return ProjectPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectPipe = /** @class */ (function () {
    function ProjectPipe() {
    }
    ProjectPipe.prototype.transform = function (value, project) {
        if (project.trim() == '') {
            return value;
        }
        if (project.trim() != '') {
            var filteredProjects = value.filter(function (val) {
                return val.project.includes(project);
            });
            return filteredProjects;
        }
    };
    ProjectPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'projectfilter'
        })
    ], ProjectPipe);
    return ProjectPipe;
}());



/***/ }),

/***/ "./src/app/pipes/projectsort.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/projectsort.pipe.ts ***!
  \*******************************************/
/*! exports provided: ProjectSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSortPipe", function() { return ProjectSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectSortPipe = /** @class */ (function () {
    function ProjectSortPipe() {
    }
    ProjectSortPipe.prototype.transform = function (taskdets, args) {
        if (args && taskdets.length) {
            if (args == 'projectStartDate') {
                return taskdets.sort(function (a, b) {
                    return new Date(a.startDate) - new Date(b.startDate);
                });
            }
            if (args == 'projectEndDate') {
                return taskdets.sort(function (a, b) {
                    return new Date(a.endDate) - new Date(b.endDate);
                });
            }
            if (args == 'projectPriority') {
                return taskdets.sort(function (a, b) {
                    return a.priority - b.priority;
                });
            }
            if (args == 'projectCompleted') {
                return taskdets.sort(function (a, b) {
                    return a.compTasks - b.compTasks;
                });
            }
        }
        else {
            return taskdets;
        }
    };
    ProjectSortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'projectsortfilter'
        })
    ], ProjectSortPipe);
    return ProjectSortPipe;
}());



/***/ }),

/***/ "./src/app/pipes/tasksort.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/tasksort.pipe.ts ***!
  \****************************************/
/*! exports provided: TaskSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSortPipe", function() { return TaskSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskSortPipe = /** @class */ (function () {
    function TaskSortPipe() {
    }
    TaskSortPipe.prototype.transform = function (taskdets, args) {
        if (args && taskdets.length) {
            if (args == 'taskStartDate') {
                return taskdets.sort(function (a, b) {
                    return new Date(a.startDate) - new Date(b.startDate);
                });
            }
            if (args == 'taskEndDate') {
                return taskdets.sort(function (a, b) {
                    return new Date(a.endDate) - new Date(b.endDate);
                });
            }
            if (args == 'taskPriority') {
                return taskdets.sort(function (a, b) {
                    return a.priority - b.priority;
                });
            }
            if (args == 'taskCompleted') {
                return taskdets.sort(function (a, b) {
                    return new Date(a.endDate) - new Date(b.endDate);
                });
            }
        }
        else {
            return taskdets;
        }
    };
    TaskSortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'tasksortfilter'
        })
    ], TaskSortPipe);
    return TaskSortPipe;
}());



/***/ }),

/***/ "./src/app/pipes/user.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/user.pipe.ts ***!
  \************************************/
/*! exports provided: UserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPipe", function() { return UserPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserPipe = /** @class */ (function () {
    function UserPipe() {
    }
    UserPipe.prototype.transform = function (value, firstName) {
        if (firstName.trim() == '') {
            return value;
        }
        if (firstName.trim() != '') {
            var filteredUsers = value.filter(function (val) {
                return val.firstName.toUpperCase().includes(firstName.toUpperCase());
            });
            return filteredUsers;
        }
    };
    UserPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'userfilter'
        })
    ], UserPipe);
    return UserPipe;
}());



/***/ }),

/***/ "./src/app/pipes/usersort.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/usersort.pipe.ts ***!
  \****************************************/
/*! exports provided: UserSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSortPipe", function() { return UserSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSortPipe = /** @class */ (function () {
    function UserSortPipe() {
    }
    UserSortPipe.prototype.transform = function (taskdets, args) {
        if (args && taskdets.length) {
            if (args == 'firstName') {
                return taskdets.sort(function (a, b) {
                    var nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase();
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            if (args == 'lastName') {
                return taskdets.sort(function (a, b) {
                    var nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase();
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            if (args == 'empId') {
                return taskdets.sort(function (a, b) {
                    return a.empId - b.empId;
                });
            }
        }
        else {
            return taskdets;
        }
    };
    UserSortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'usersortfilter'
        })
    ], UserSortPipe);
    return UserSortPipe;
}());



/***/ }),

/***/ "./src/app/project/project-add/project-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project/project-add/project-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    width: 100px;\r\n}\r\n\r\n.bigbtns {\r\n    height: 100px;\r\n}\r\n\r\nhr {\r\n  border: 0;\r\n  clear:both;\r\n  display:block;\r\n  width: 96%;               \r\n  background-color:grey;\r\n  height: 1px;\r\n}"

/***/ }),

/***/ "./src/app/project/project-add/project-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project/project-add/project-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"myForm\" (submit)=\"onSubmit()\"  ngNativeValidate>\r\n  <div formGroupName=\"projectGroup\">\r\n      <div class=\"form-group row\">\r\n          <label for=\"project\" class=\"col-sm-2 col-form-label\"><b>Project:</b></label>\r\n          <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" id=\"project\" name=\"project\" formControlName=\"project\">\r\n   </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <div class=\"col-sm-6\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"dateCheck\" name=\"dateCheck\" [checked]=\"enableDate\" (change)=\"enableDate = !enableDate\">\r\n            <label for=\"dateCheck\" class=\"form-check-label\">Set Start and End Date</label>\r\n          </div>\r\n          <label for=\"startDate\" *ngIf=\"enableDate\" class=\"col-form-label\"><b>Start Date:</b></label>\r\n          <div class=\"col-md-2\">\r\n            <input type=\"date\" *ngIf=\"enableDate\" class=\"form-control\" id=\"startDate\" name=\"startDate\" formControlName=\"startDate\">\r\n          </div>\r\n          <label for=\"endDate\" *ngIf=\"enableDate\" class=\"col-form-label\"><b>End Date:</b></label>\r\n          <div class=\"col-md-2\">\r\n            <input type=\"date\" *ngIf=\"enableDate\" class=\"form-control\" id=\"endDate\" name=\"endDate\" formControlName=\"endDate\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"priority\" class=\"col-sm-2 col-form-label\"><b>Priority:</b></label>\r\n          <span class=\"font-weight-bold blue-text mr-0 mt-0\">0</span>\r\n          <div class=\"col-sm-3\">\r\n          <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"30\" step=\"1\" id=\"priority\" name=\"priority\" formControlName=\"priority\">\r\n        </div>\r\n        <span class=\"font-weight-bold blue-text ml-0 mt-0\">30</span>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"user\" class=\"col-sm-2 col-form-label\"><b>Manager:</b></label>\r\n          <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" readonly id=\"user\" name=\"user\" formControlName=\"user\">\r\n    </div>\r\n        <div class=\"col-50\"><button type=\"button\" class=\"btn btn-primary  mr-3\" data-toggle=\"modal\" data-target=\"#userModal\" (click)=\"getUsers()\">Search</button></div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <div class=\"col-10\">\r\n          <button type=\"submit\" class=\"btn btn-primary  mr-3\"  [disabled]=\"!myForm.valid\">{{btnType}}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"resetForm()\">Reset</button>\r\n          </div>\r\n          <div class=\"col-3\">\r\n           <span class=\"text-success\">{{status}}</span>\r\n           <span class=\"text-danger\">{{error}}</span>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  </form>\r\n  <hr/>\r\n  <div class=\"form-group row\">\r\n      <label for=\"search\" class=\"col-sm-1 col-form-label\"><b>Search:</b></label>\r\n      <div class=\"col-sm-3\">\r\n        <input type=\"text\" #project (keyup)=\"0\" class=\"form-control\" id=\"search\" name=\"search\">\r\n      </div>\r\n      <label class=\"col-form-label\"><b>Sort By:</b></label>\r\n      <div class=\"col-sm-6\">\r\n          <button type=\"button\" (click) = \"sortBy('projectStartDate')\" class=\"btn btn-primary  mr-3\">Start Date</button>\r\n          <button type=\"button\" (click) = \"sortBy('projectEndDate')\" class=\"btn btn-primary  mr-3\">End Date</button>\r\n          <button type=\"button\" (click) = \"sortBy('projectPriority')\" class=\"btn btn-primary  mr-3\">Priority</button>\r\n          <button type=\"button\" (click) = \"sortBy('projectCompleted')\" class=\"btn btn-primary  mr-3\">Completed</button>\r\n      </div>\r\n  </div>\r\n  <hr/>\r\n      <div class=\"row\" *ngFor=\"let project of projects | projectfilter : project.value | projectsortfilter : property\">\r\n          <div class=\"col-5\"><div class=\"card text-white bg-secondary w-60 p-3\">\r\n              <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">{{project.project}}</h5>\r\n                  <div class=\"row\">\r\n                      <div class=\"col\"><b>No. of Tasks:</b> {{project.tasks?.length}}</div>\r\n                      <div class=\"col\"><b>Completed:</b> {{project.compTasks}}</div>\r\n                      <div class=\"w-100\"></div>\r\n                      <div class=\"col\"><b>Start Date:</b> {{project.startDate}}</div> \r\n                      <div class=\"col\"><b>End Date:</b> {{project.endDate}}</div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n          <div class=\"col-3\" style=\"text-align:center;\">\r\n            <label class=\"col-form-label\"><h4>Priority</h4></label>\r\n            <div class=\"card text-white bg-secondary w-80 p-3\">\r\n              <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">{{project.priority}}</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n           <div class=\"col-4\" style=\"text-align:center;\">\r\n             <div class=\"col-2 bigbtns\"><button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/addProject/{{project.projectId}}\">Update\r\n            </button></div>\r\n             <div class=\"col-2 bigbtns\"><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteProject(project.projectId)\">Suspend\r\n            </button></div>\r\n           </div>\r\n              <hr>\r\n        </div>\r\n     \r\n    </div>\r\n<!-- User Modal -->\r\n<div class=\"modal fade\" id=\"userModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"userModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"userTitle\">Users</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"list-group\" *ngFor=\"let user of users\">\r\n                <li class=\"list-group-item list-group-item-action\" (click)=\"selectedUser(user.empId)\">\r\n                  {{user.firstName}}\r\n                </li>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" #closeUserModal>Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/project/project-add/project-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project/project-add/project-add.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAddComponent", function() { return ProjectAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectAddComponent = /** @class */ (function () {
    function ProjectAddComponent(projectService, userService, route) {
        this.projectService = projectService;
        this.userService = userService;
        this.route = route;
        this.status = "";
        this.error = "";
        this.projects = [];
        this.project = {};
        this.users = [];
        this.user = {};
        this.taskCount = 0;
        this.enableDate = false;
        this.btnType = "";
    }
    ProjectAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'projectGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'project': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'user': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'startDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            })
        });
        this.myForm.controls['projectGroup']['controls'].startDate.setValue(this.currentDate());
        this.myForm.controls['projectGroup']['controls'].endDate.setValue(this.endDate());
        this.fetchProjects();
        this.route.params.subscribe(function (params) {
            var empId = +params['id'];
            if (+empId > 0) {
                _this.id = +empId;
                _this.populateProject(_this.id);
                _this.btnType = "Update";
            }
            else {
                _this.btnType = "Add";
            }
        });
    };
    ProjectAddComponent.prototype.populateProject = function (projectId) {
        var _this = this;
        this.projectService.getProject(projectId)
            .then(function (res) {
            console.log(res);
            _this.project = res[0];
            _this.myForm.controls['projectGroup']['controls'].project.setValue(_this.project["project"]);
            _this.myForm.controls['projectGroup']['controls'].priority.setValue(_this.project["priority"]);
            _this.myForm.controls['projectGroup']['controls'].user.setValue(_this.project["managerName"]);
            _this.myForm.controls['projectGroup']['controls'].startDate.setValue(_this.project["startDate"]);
            _this.myForm.controls['projectGroup']['controls'].endDate.setValue(_this.project["endDate"]);
            _this.getUser(_this.project["managerId"]);
        });
    };
    ProjectAddComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.projectService.fetchProjects()
            .then(function (res) {
            console.log(res);
            _this.projects = res;
            _this.projects.forEach(function (proj, idx) {
                _this.projects[idx].compTasks = proj.tasks.filter(function (task) { return task.status == "Completed"; }).length;
            });
        });
    };
    ProjectAddComponent.prototype.currentDate = function () {
        var currentDate = new Date();
        console.log(currentDate.getDate() + 1);
        return currentDate.toISOString().substring(0, 10);
    };
    ProjectAddComponent.prototype.endDate = function () {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        console.log(currentDate.getDate());
        return currentDate.toISOString().substring(0, 10);
    };
    ProjectAddComponent.prototype.onSubmit = function () {
        var _this = this;
        var dateCheck = this.validateDate(this.myForm.value.projectGroup.startDate, this.myForm.value.projectGroup.endDate);
        if (!dateCheck) {
            this.project.project = this.myForm.value.projectGroup.project;
            this.project.startDate = this.myForm.value.projectGroup.startDate;
            this.project.endDate = this.myForm.value.projectGroup.endDate;
            this.project.priority = this.myForm.value.projectGroup.priority;
            this.project.managerId = this.user.empId;
            if (this.id > 0) {
                this.projectService.updateProject(this.project)
                    .then(function (res) {
                    console.log(res);
                    if (res.projectId > 0) {
                        _this.status = "Project Updated Successfully!";
                        _this.myForm.reset();
                        _this.fetchProjects();
                    }
                }, function (err) {
                    console.log('server err');
                    console.log(err);
                })
                    .catch(function (err) {
                    console.log('client err');
                    console.log(err);
                });
            }
            else {
                this.projectService.addProject(this.project)
                    .then(function (res) {
                    console.log(res);
                    if (res.projectId > 0) {
                        _this.status = "Project Added !!";
                        _this.myForm.reset();
                        _this.fetchProjects();
                    }
                }, function (err) {
                    console.log('server err');
                    console.log(err);
                })
                    .catch(function (err) {
                    console.log('client err');
                    console.log(err);
                });
            }
        }
        else {
            this.error = "Project End Date should be greater than Start Date!";
        }
    };
    ProjectAddComponent.prototype.validateDate = function (startDate, endDate) {
        var fDate = new Date(startDate);
        var lDate = new Date(endDate);
        if (lDate <= fDate) {
            return true;
        }
        else {
            return false;
        }
    };
    ProjectAddComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.fetchUsers()
            .then(function (res) {
            console.log(res);
            _this.users = res;
        });
    };
    ProjectAddComponent.prototype.selectedUser = function (userId) {
        var _this = this;
        this.userService.getUser(userId)
            .then(function (res) {
            console.log(res);
            _this.user = res[0];
            _this.myForm.controls['projectGroup']['controls'].user.setValue(_this.user.firstName);
        });
        this.closeUserModal.nativeElement.click();
    };
    ProjectAddComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.userService.getUser(userId)
            .then(function (res) {
            console.log(res);
            _this.user = res[0];
            _this.myForm.controls['projectGroup']['controls'].user.setValue(_this.user.firstName);
        });
    };
    ProjectAddComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        this.projectService.deleteProject(projectId)
            .then(function (res) {
            console.log(res);
            if (res.projectId == projectId) {
                _this.status = "Project Suspended Successfully!";
            }
            _this.fetchProjects();
        });
    };
    ProjectAddComponent.prototype.sortBy = function (prop) {
        this.property = prop;
    };
    ProjectAddComponent.prototype.resetForm = function () {
        this.myForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeUserModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProjectAddComponent.prototype, "closeUserModal", void 0);
    ProjectAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-add',
            template: __webpack_require__(/*! ./project-add.component.html */ "./src/app/project/project-add/project-add.component.html"),
            styles: [__webpack_require__(/*! ./project-add.component.css */ "./src/app/project/project-add/project-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProjectAddComponent);
    return ProjectAddComponent;
}());



/***/ }),

/***/ "./src/app/services/parenttask.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/parenttask.service.ts ***!
  \************************************************/
/*! exports provided: ParentTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTaskService", function() { return ParentTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentTaskService = /** @class */ (function () {
    function ParentTaskService(http) {
        this.http = http;
        this.tasks = [];
        this.server = "http://localhost:3001/parentask";
    }
    ParentTaskService.prototype.fetchParentTasks = function () {
        return this.http.get(this.server)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ParentTaskService.prototype.getParentTask = function (parentId) {
        return this.http.get(this.server + "/" + parentId)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ParentTaskService.prototype.addTask = function (task) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.server, task, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ParentTaskService.prototype.updateTask = function (task) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.server, task, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ParentTaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ParentTaskService);
    return ParentTaskService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.tasks = [];
        this.server = "http://localhost:3001/project";
    }
    ProjectService.prototype.fetchProjects = function () {
        return this.http.get(this.server)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ProjectService.prototype.getProject = function (projectId) {
        return this.http.get(this.server + "/" + projectId)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ProjectService.prototype.addProject = function (project) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.server, project, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ProjectService.prototype.updateProject = function (project) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.server, project, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ProjectService.prototype.deleteProject = function (projectId) {
        return this.http.delete(this.server + "/" + projectId)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.tasks = [];
        this.server = "http://localhost:3001/task";
    }
    TaskService.prototype.fetchTasks = function () {
        return this.http.get(this.server)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    TaskService.prototype.getTask = function (taskId) {
        return this.http.get(this.server + "/" + taskId)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    TaskService.prototype.addTask = function (task) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.server, task, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    TaskService.prototype.updateTask = function (task) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.server, task, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.tasks = [];
        this.server = "http://localhost:3001/user";
    }
    UserService.prototype.fetchUsers = function () {
        return this.http.get(this.server)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    UserService.prototype.getUser = function (userId) {
        return this.http.get(this.server + "/" + userId)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    UserService.prototype.addUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.server, user, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log("update user request to service");
        console.log(user);
        return this.http.put(this.server, user, options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.server + "/" + userId)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/task/task-add/task-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/task/task-add/task-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task/task-add/task-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/task/task-add/task-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\r\n  <div formGroupName=\"taskGroup\">\r\n      <div class=\"form-group row\">\r\n          <label for=\"project\" class=\"col-sm-2 col-form-label\"><b>Project:</b></label>\r\n          <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"project.project\" id=\"project\" name=\"project\" formControlName=\"project\">\r\n     </div>\r\n        <div  class=\"col-50\"><button [disabled]=\"id || isParentProj\"  type=\"button\" class=\"btn btn-primary  mr-3\" data-toggle=\"modal\" data-target=\"#projectModal\" (click)=\"getProjects()\">Search</button></div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"taskName\" class=\"col-sm-2 col-form-label\"><b>Task:</b></label>\r\n          <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" id=\"taskName\" name=\"taskName\" formControlName=\"taskName\">\r\n      </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <div class=\"col-sm-5\">\r\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"parentCheck\" name=\"parentCheck\" formControlName=\"parentCheck\" [checked]=\"enableParent\" (change)=\"handleChange(enableParent = !enableParent)\">\r\n          <label for=\"parentCheck\" class=\"form-check-label\">Parent Task</label>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"priority\" class=\"col-sm-2 col-form-label\"><b>Priority:</b></label>\r\n          <span class=\"font-weight-bold blue-text mr-0 mt-0\">0</span>\r\n          <div class=\"col-sm-3\">\r\n          <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"30\" step=\"1\" id=\"priority\" name=\"priority\" formControlName=\"priority\">\r\n    </div>\r\n        <span class=\"font-weight-bold blue-text ml-0 mt-0\">30</span>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"parentTask\" class=\"col-sm-2 col-form-label\"><b>Parent Task:</b></label>\r\n        <div class=\"col-sm-3\">\r\n        <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"parent.parentTask\" id=\"parentTask\" name=\"parentTask\" formControlName = \"parentTask\">\r\n        </div>\r\n      <div  class=\"col-50\"><button [disabled]=\"isParentProj\" type=\"button\" class=\"btn btn-primary  mr-3\" data-toggle=\"modal\" data-target=\"#parentModal\" (click)=\"getParentTasks()\">Search</button></div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"startDate\" class=\"col-sm-2 col-form-label\"><b>Start Date:</b></label>\r\n        <div class=\"col-sm-3\">\r\n        <input type=\"date\" class=\"form-control\" id=\"startDate\" name=\"startDate\" formControlName=\"startDate\">\r\n    </div>\r\n      <label for=\"endDate\"  class=\"col-sm-1 col-form-label\"><b>End Date:</b></label>\r\n      <div class=\"col-sm-3\">\r\n          <input type=\"date\" class=\"form-control\" id=\"endDate\" name=\"endDate\" formControlName=\"endDate\">\r\n      </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"user\" class=\"col-sm-2 col-form-label\"><b>User:</b></label>\r\n          <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"user.firstName\" id=\"user\" name=\"user\" formControlName=\"user\">\r\n       </div>\r\n        <div class=\"col-50\"><button [disabled]=\"id || isParentProj\" type=\"button\" class=\"btn btn-primary  mr-3\" data-toggle=\"modal\" data-target=\"#userModal\" (click)=\"getUsers()\">Search</button></div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <div class=\"col-7\">\r\n          <button type=\"submit\" class=\"btn btn-primary  mr-3\">{{btnType}}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"resetForm()\">Reset</button>\r\n          </div>\r\n          <div class=\"col-3\">\r\n              <span class=\"h4 text-success\">{{status}}</span>\r\n              <span class=\"h4 text-danger\">{{error}}</span>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  </form>\r\n </div>\r\n  <!-- Project Modal -->\r\n<div class=\"modal fade\" id=\"projectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"projectModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"projectTitle\">Projects</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"list-group\" *ngFor=\"let project of projects\">\r\n                <li class=\"list-group-item list-group-item-action\" (click)=\"selectedProject(project.projectId)\">\r\n                  {{project.project}}\r\n                </li>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" #closeProjectModal>Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n   <!-- Parent Task Modal -->\r\n<div class=\"modal fade\" id=\"parentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"parentModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"parentTitle\">Parent Tasks</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"list-group\" *ngFor=\"let parent of parents\">\r\n                <li class=\"list-group-item list-group-item-action\" (click)=\"selectedParentTask(parent.parentId)\">\r\n                  {{parent.parentTask}}\r\n                </li>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" #closeParentModal>Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n   <!-- User Modal -->\r\n<div class=\"modal fade\" id=\"userModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"userModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"userTitle\">Users</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"list-group\" *ngFor=\"let user of users\">\r\n                <li class=\"list-group-item list-group-item-action\" (click)=\"selectedUser(user.empId)\">\r\n                  {{user.firstName}}\r\n                </li>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"  #closeUserModal>Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/task/task-add/task-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/task-add/task-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TaskAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddComponent", function() { return TaskAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_parenttask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/parenttask.service */ "./src/app/services/parenttask.service.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent(parentService, taskService, projectService, userService, route) {
        this.parentService = parentService;
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
        this.route = route;
        this.status = "";
        this.error = "";
        this.enableParent = false;
        this.projects = [];
        this.project = {};
        this.users = [];
        this.user = {};
        this.parents = [];
        this.parent = {};
        this.isParentProj = false;
        this.btnType = "";
    }
    TaskAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'taskGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'project': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'taskName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'parentTask': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'startDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'user': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'parentCheck': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            })
        });
        console.log(this.enableParent);
        this.myForm.controls['taskGroup']['controls'].startDate.setValue(this.currentDate());
        this.myForm.controls['taskGroup']['controls'].endDate.setValue(this.endDate());
        this.myForm.statusChanges.subscribe(function (enableParent) { return console.log(enableParent); });
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            console.log(id);
            if (+id > 0) {
                _this.id = +id;
                _this.getTask(_this.id);
                _this.btnType = "Update";
                _this.myForm.controls['taskGroup']['controls'].parentCheck.disable();
            }
            else {
                _this.btnType = "Add";
            }
        });
    };
    TaskAddComponent.prototype.getTask = function (taskId) {
        var _this = this;
        this.taskService.getTask(taskId)
            .then(function (res) {
            console.log(res);
            _this.task = res[0];
            _this.myForm.controls['taskGroup']['controls'].taskName.setValue(_this.task["taskName"]);
            _this.myForm.controls['taskGroup']['controls'].priority.setValue(_this.task["priority"]);
            _this.myForm.controls['taskGroup']['controls'].startDate.setValue(_this.task["startDate"]);
            _this.myForm.controls['taskGroup']['controls'].endDate.setValue(_this.task["endDate"]);
            _this.getUser(_this.task["userId"]);
            _this.getProject(_this.task["projectId"]);
            _this.getParentTask(_this.task["parentId"]);
        });
    };
    TaskAddComponent.prototype.currentDate = function () {
        var currentDate = new Date();
        console.log(currentDate.getDate() + 1);
        return currentDate.toISOString().substring(0, 10);
    };
    TaskAddComponent.prototype.endDate = function () {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        console.log(currentDate.getDate());
        return currentDate.toISOString().substring(0, 10);
    };
    TaskAddComponent.prototype.handleChange = function (value) {
        if (value) {
            this.myForm.controls['taskGroup']['controls'].project.disable();
            this.myForm.controls['taskGroup']['controls'].taskName.enable();
            this.myForm.controls['taskGroup']['controls'].priority.disable();
            this.myForm.controls['taskGroup']['controls'].startDate.disable();
            this.myForm.controls['taskGroup']['controls'].endDate.disable();
            this.isParentProj = true;
        }
        else {
            this.myForm.controls['taskGroup']['controls'].project.enable();
            this.myForm.controls['taskGroup']['controls'].taskName.enable();
            this.myForm.controls['taskGroup']['controls'].priority.enable();
            this.myForm.controls['taskGroup']['controls'].startDate.enable();
            this.myForm.controls['taskGroup']['controls'].endDate.enable();
            this.isParentProj = false;
        }
    };
    TaskAddComponent.prototype.resetForm = function () {
        this.myForm.reset();
        this.btnType = "Add";
    };
    TaskAddComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.fetchProjects()
            .then(function (res) {
            console.log(res);
            _this.projects = res;
        });
    };
    TaskAddComponent.prototype.selectedProject = function (projectId) {
        var _this = this;
        this.projectService.getProject(projectId)
            .then(function (res) {
            console.log(res);
            _this.project = res[0];
        });
        this.closeProjectModal.nativeElement.click();
    };
    TaskAddComponent.prototype.getProject = function (projectId) {
        var _this = this;
        this.projectService.getProject(projectId)
            .then(function (res) {
            console.log(res);
            _this.project = res[0];
        });
    };
    TaskAddComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.fetchUsers()
            .then(function (res) {
            console.log(res);
            _this.users = res;
        });
    };
    TaskAddComponent.prototype.selectedUser = function (userId) {
        var _this = this;
        this.userService.getUser(userId)
            .then(function (res) {
            console.log(res);
            _this.user = res[0];
        });
        this.closeUserModal.nativeElement.click();
    };
    TaskAddComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.userService.getUser(userId)
            .then(function (res) {
            console.log(res);
            _this.user = res[0];
        });
    };
    TaskAddComponent.prototype.getParentTasks = function () {
        var _this = this;
        this.parentService.fetchParentTasks()
            .then(function (res) {
            console.log(res);
            _this.parents = res;
        });
    };
    TaskAddComponent.prototype.selectedParentTask = function (parentId) {
        var _this = this;
        this.parentService.getParentTask(parentId)
            .then(function (res) {
            console.log(res);
            _this.parent = res[0];
        });
        this.closeParentModal.nativeElement.click();
    };
    TaskAddComponent.prototype.getParentTask = function (parentId) {
        var _this = this;
        this.parentService.getParentTask(parentId)
            .then(function (res) {
            console.log(res);
            _this.parent = res[0];
        });
    };
    TaskAddComponent.prototype.onSubmit = function () {
        var _this = this;
        var validDateRange = this.validDateRange(this.myForm.value.taskGroup.startDate, this.myForm.value.taskGroup.endDate);
        if (validDateRange) {
            if (this.isParentProj) {
                this.task = { "parentTask": this.myForm.value.taskGroup.taskName };
                this.parentService.addTask(this.task)
                    .then(function (res) {
                    console.log(res);
                    if (res.parentId > 0) {
                        _this.status = "Parent Task Added !!";
                        _this.myForm.reset();
                    }
                }, function (err) {
                    console.log('server err');
                    console.log(err);
                }).catch(function (err) {
                    console.log('client err');
                    console.log(err);
                });
            }
            else {
                if (this.id > 0) {
                    this.task["taskName"] = this.myForm.value.taskGroup.taskName;
                    this.task["startDate"] = this.myForm.value.taskGroup.startDate;
                    this.task["endDate"] = this.myForm.value.taskGroup.endDate;
                    this.task["priority"] = this.myForm.value.taskGroup.priority;
                    this.task["parentId"] = this.parent.parentId;
                    this.task["projectId"] = this.project.projectId;
                    this.task["userId"] = this.user.empId;
                    this.taskService.updateTask(this.task)
                        .then(function (res) {
                        console.log(res);
                        if (res.taskId > 0) {
                            _this.status = "Task Updated !!";
                            _this.myForm.reset();
                        }
                    }, function (err) {
                        console.log('server err');
                        console.log(err);
                    })
                        .catch(function (err) {
                        console.log('client err');
                        console.log(err);
                    });
                }
                else {
                    this.task = { "taskName": this.myForm.value.taskGroup.taskName,
                        "startDate": this.myForm.value.taskGroup.startDate,
                        "endDate": this.myForm.value.taskGroup.endDate,
                        "priority": this.myForm.value.taskGroup.priority,
                        "status": "In Progress",
                        "parentId": this.parent.parentId,
                        "projectId": this.project.projectId,
                        "userId": this.user.empId };
                    this.taskService.addTask(this.task)
                        .then(function (res) {
                        console.log(res);
                        if (res.taskId > 0) {
                            _this.status = "Task Added !!";
                            _this.myForm.reset();
                        }
                    }, function (err) {
                        console.log('server err');
                        console.log(err);
                    })
                        .catch(function (err) {
                        console.log('client err');
                        console.log(err);
                    });
                }
            }
        }
        else {
            this.error = "Task End Date should be greater than Start Date!";
        }
    };
    TaskAddComponent.prototype.validDateRange = function (startDate, endDate) {
        var sDate = new Date(startDate);
        var eDate = new Date(endDate);
        if (eDate <= sDate) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeProjectModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskAddComponent.prototype, "closeProjectModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeUserModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskAddComponent.prototype, "closeUserModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeParentModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskAddComponent.prototype, "closeParentModal", void 0);
    TaskAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-add',
            template: __webpack_require__(/*! ./task-add.component.html */ "./src/app/task/task-add/task-add.component.html"),
            styles: [__webpack_require__(/*! ./task-add.component.css */ "./src/app/task/task-add/task-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_parenttask_service__WEBPACK_IMPORTED_MODULE_4__["ParentTaskService"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], TaskAddComponent);
    return TaskAddComponent;
}());



/***/ }),

/***/ "./src/app/task/task-view/task-view.component.css":
/*!********************************************************!*\
  !*** ./src/app/task/task-view/task-view.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modbtns {\r\n    width: 100px;\r\n}"

/***/ }),

/***/ "./src/app/task/task-view/task-view.component.html":
/*!*********************************************************!*\
  !*** ./src/app/task/task-view/task-view.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"form-group row\">\r\n    <label for=\"search\" class=\"col-sm-1 col-form-label\"><b>Project:</b></label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"text\" readonly [(ngModel)]=\"project.project\" class=\"form-control\" id=\"search\" name=\"search\">\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary  mr-3\" data-toggle=\"modal\" data-target=\"#projectModal\" (click)=\"getProjects()\">Search</button>\r\n    <label class=\"col-form-label\"><b>Sort By:</b></label>\r\n    <div class=\"col-sm-5\">\r\n        <button type=\"button\" (click) = \"sortBy('taskStartDate')\" class=\"btn btn-primary  mr-3\">Start Date</button>\r\n        <button type=\"button\" (click) = \"sortBy('taskEndDate')\" class=\"btn btn-primary  mr-3\">End Date</button>\r\n        <button type=\"button\" (click) = \"sortBy('taskPriority')\" class=\"btn btn-primary  mr-3\">Priority</button>\r\n        <button type=\"button\" (click) = \"sortBy('taskCompleted')\" class=\"btn btn-primary  mr-3\">Completed</button>\r\n    </div>\r\n</div>\r\n<hr/>\r\n  <span class=\"h5 text-success\">{{status}}</span>\r\n<div class=\"row table-responsive\">\r\n    <table class=\"table\">\r\n           <tr [hidden]=\"!project.tasks\">\r\n                <th scope=\"col\">Task</th>\r\n                <th scope=\"col\">Parent</th>\r\n                <th scope=\"col\">Priority</th>\r\n                <th scope=\"col\">Start</th>\r\n                <th scope=\"col\">End</th>\r\n           </tr>\r\n        <tbody *ngFor=\"let task of project.tasks | tasksortfilter : property\">\r\n            <tr>\r\n                <td>\r\n                    <div class=\"card text-white bg-secondary mb-3\">\r\n                      <div class=\"card-body\">\r\n                          <h5 class=\"card-title\">{{task.taskName}}</h5>\r\n                      </div>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class=\"card text-white bg-secondary mb-3\">\r\n                      <div class=\"card-body\">\r\n                          <h5 class=\"card-title\">{{ task.parentTask ? task.parentTask.parentTask : \"No Parent Task\"}}</h5>\r\n                      </div>\r\n                    </div>\r\n                </td>\r\n                <td>{{task.priority}}</td>\r\n                <td>{{task.startDate}}</td>\r\n                <td>{{task.endDate}}</td>\r\n                <td><button type=\"button\" [disabled]=\"isEnded(task.endDate)\" class=\"btn btn-primary modbtns\" routerLink=\"/addTask/{{task.taskId}}\">Edit\r\n                  </button></td>\r\n                <td><button type=\"button\" [disabled]=\"isEnded(task.endDate)\" class=\"btn btn-danger modbtns\" (click)=\"endTask(task.taskId)\">End Task\r\n                  </button></td>\r\n            </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n    </div>\r\n      <!-- Projects Modal -->\r\n<div class=\"modal fade\" id=\"projectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"projectModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"projectTitle\">Projects</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeModal>\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"list-group\" *ngFor=\"let project of projects\">\r\n                <li class=\"list-group-item list-group-item-action\" (click)=\"selectedProject(project.projectId)\">\r\n                  {{project.project}}\r\n                </li>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/task/task-view/task-view.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-view/task-view.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskViewComponent = /** @class */ (function () {
    function TaskViewComponent(projectService, taskService) {
        this.projectService = projectService;
        this.taskService = taskService;
        this.tasks = [];
        this.task = {};
        this.status = "";
        this.projects = [];
        this.project = {};
        this.parentTask = "No Parent Task";
        this.endDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
    }
    TaskViewComponent.prototype.ngOnInit = function () {
    };
    TaskViewComponent.prototype.isEnded = function (date) {
        if (date <= this.endDate) {
            return true;
        }
        else {
            return false;
        }
    };
    TaskViewComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.fetchProjects()
            .then(function (res) {
            console.log(res);
            _this.projects = res;
        });
    };
    TaskViewComponent.prototype.selectedProject = function (projectId) {
        var _this = this;
        this.projectService.getProject(projectId)
            .then(function (res) {
            console.log(res);
            _this.project = res[0];
            _this.project.tasks.forEach(function (task, idx) {
                _this.project.tasks[idx].parentTask = _this.project.parentTasks.find(function (parentTask) { return parentTask.parentId === _this.project.tasks[idx].parentId; });
            });
            delete _this.project.parentTasks;
            console.log(JSON.stringify(_this.project));
        });
        this.closeModal.nativeElement.click();
    };
    TaskViewComponent.prototype.sortBy = function (prop) {
        this.property = prop;
    };
    TaskViewComponent.prototype.endTask = function (id) {
        var _this = this;
        var currentTask = this.project.tasks.find(function (task) { return task.taskId === id; });
        currentTask.endDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        currentTask.status = "Completed";
        var tmpTask = JSON.parse(JSON.stringify(currentTask));
        delete tmpTask.parentTask;
        this.taskService.updateTask(tmpTask)
            .then(function (res) {
            console.log(res);
            if (res.taskId > 0) {
                _this.status = 'Task Ended successfully!!';
            }
        }, function (err) {
            console.log('server err');
            console.log(err);
        })
            .catch(function (err) {
            console.log('client err');
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskViewComponent.prototype, "closeModal", void 0);
    TaskViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-view',
            template: __webpack_require__(/*! ./task-view.component.html */ "./src/app/task/task-view/task-view.component.html"),
            styles: [__webpack_require__(/*! ./task-view.component.css */ "./src/app/task/task-view/task-view.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
    ], TaskViewComponent);
    return TaskViewComponent;
}());



/***/ }),

/***/ "./src/app/user/user-add/user-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 1200px;\r\n  margin: auto;\r\n  border: 3px;\r\n  }\r\n\r\ntd {\r\n    border-top: none;\r\n}\r\n\r\nbutton {\r\n    width: 120px;\r\n}"

/***/ }),

/***/ "./src/app/user/user-add/user-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n  <form [formGroup]=\"myForm\" (submit)=\"onSubmit()\"  ngNativeValidate>\r\n  <div formGroupName=\"userGroup\">\r\n      <div class=\"form-group row\">\r\n          <label for=\"firstName\" class=\"col-md-2 col-form-label\"><b>First Name:</b></label>\r\n          <div class=\"col-md-6\">\r\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" formControlName=\"firstName\">\r\n </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"lastName\" class=\"col-md-2 col-form-label\"><b>Last Name:</b></label>\r\n          <div class=\"col-md-6\">\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" formControlName=\"lastName\">\r\n </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label for=\"empId\" class=\"col-md-2 col-form-label\"><b>Employee ID:</b></label>\r\n          <div class=\"col-md-2\">\r\n          <input type=\"text\" class=\"form-control\" id=\"empId\" name=\"empId\" formControlName=\"empId\">\r\n    </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <div class=\"col-md-7\">\r\n          <button type=\"submit\" class=\"btn btn-primary  mr-3\" [disabled]=\"!myForm.valid\">{{btnType}}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"resetForm()\">Reset</button>\r\n          </div>\r\n          <p class=\"text-success col-md-2 text-left\"> {{status}} </p>\r\n      </div>\r\n  </div>\r\n  </form>\r\n  <hr/>\r\n  <div class=\"form-group row\">\r\n      <div class=\"col-sm-3\">\r\n        <input placeholder=\"Search\" type=\"text\" #firstName (keyup)=\"0\" class=\"form-control\" id=\"search\" name=\"search\">\r\n      </div>\r\n      <label class=\"col-form-label\"><b>Sort:</b></label>\r\n      <div class=\"col-sm-5\">\r\n          <button type=\"button\" (click) = \"sortBy('firstName')\" class=\"btn btn-primary  mr-3\">First Name</button>\r\n          <button type=\"button\" (click) = \"sortBy('lastName')\" class=\"btn btn-primary  mr-3\">Last Name</button>\r\n          <button type=\"button\" (click) = \"sortBy('empId')\" class=\"btn btn-primary  mr-3\">Emp ID</button>\r\n      </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row table-responsive w-75 \">\r\n      <table class=\"table\" style=\"border-collapse: collapse;\">\r\n          <tbody *ngFor=\"let user of users | userfilter : firstName.value | usersortfilter : property\">\r\n            <tr>\r\n                <td ><input class=\"form-control\" type=\"text\" placeholder=\"{{user.firstName}}\" readonly></td>\r\n                <td ><button type=\"button\" class=\"btn btn-primary\" routerLink=\"/addUser/{{user.empId}}\">Edit\r\n                </button></td>\r\n            </tr>\r\n            <tr>\r\n                <td ><input class=\"form-control\" type=\"text\" placeholder=\"{{user.lastName}}\" readonly></td>\r\n                <td ><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser(user.empId)\">Delete\r\n                  </button></td>\r\n              </tr>\r\n              <tr>\r\n                  <td ><input class=\"form-control\" type=\"text\" placeholder=\"{{user.empId}}\" readonly></td>\r\n                </tr>\r\n          </tbody>\r\n        </table>\r\n        </div>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/user/user-add/user-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.ts ***!
  \*****************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.status = "";
        this.users = [];
        this.btnType = "";
        this.property = '';
    }
    UserAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllUsers();
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'userGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'empId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            })
        });
        this.route.params.subscribe(function (params) {
            var empId = +params['id'];
            console.log(empId);
            if (empId) {
                _this.getUser(empId);
                _this.btnType = "Update";
            }
            else {
                _this.btnType = "Add";
            }
        });
    };
    UserAddComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.fetchUsers()
            .then(function (res) {
            console.log(res);
            _this.users = res;
        });
    };
    UserAddComponent.prototype.getUser = function (empId) {
        var _this = this;
        this.userService.getUser(empId)
            .then(function (res) {
            console.log(res);
            _this.user = res;
            _this.id = _this.user[0]._id;
            _this.myForm.controls['userGroup']['controls'].firstName.setValue(_this.user[0].firstName);
            _this.myForm.controls['userGroup']['controls'].lastName.setValue(_this.user[0].lastName);
            _this.myForm.controls['userGroup']['controls'].empId.setValue(_this.user[0].empId);
        });
    };
    UserAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user = { "firstName": this.myForm.value.userGroup.firstName,
            "lastName": this.myForm.value.userGroup.lastName,
            "empId": this.myForm.value.userGroup.empId };
        if (this.id) {
            this.user["_id"] = this.id;
            this.userService.updateUser(this.user)
                .then(function (res) {
                console.log(res);
                if (res.userId > 0) {
                    _this.status = "User Updated !!";
                    _this.myForm.reset();
                    _this.getAllUsers();
                }
            }, function (err) {
                console.log('server err');
                console.log(err);
            })
                .catch(function (err) {
                console.log('client err');
                console.log(err);
            });
        }
        else {
            this.userService.addUser(this.user)
                .then(function (res) {
                console.log(res);
                if (res.userId > 0) {
                    _this.status = "User Added !!";
                    _this.myForm.reset();
                    _this.getAllUsers();
                }
            }, function (err) {
                console.log('server err');
                console.log(err);
            })
                .catch(function (err) {
                console.log('client err');
                console.log(err);
            });
        }
    };
    UserAddComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .then(function (res) {
            console.log(res);
            if (res == 200) {
                _this.status = "User Deleted !!";
            }
            _this.getAllUsers();
        });
    };
    UserAddComponent.prototype.sortBy = function (prop) {
        this.property = prop;
    };
    UserAddComponent.prototype.resetForm = function () {
        this.myForm.reset();
        this.btnType = "Add";
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/user/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/user/user-add/user-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nithy\projmanager\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map