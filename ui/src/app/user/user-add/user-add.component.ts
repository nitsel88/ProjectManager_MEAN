import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  myForm : FormGroup
  status : string = ""
  users : Array<any> = [];
  user : {}
  id : number
  btnType : string = ""
  property = '';
  constructor(private userService : UserService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.getAllUsers();
    this.myForm = new FormGroup({
      'userGroup': new FormGroup({
          'firstName': new FormControl('', [Validators.required]),
          'lastName': new FormControl('', [Validators.required]),
          'empId': new FormControl('',[Validators.required])
      })
  })
    this.route.params.subscribe(params => {
    let empId = +params['id'];
    console.log(empId);
    if(empId){        
        this.getUser(empId);
        this.btnType = "Update";
    } else {
        this.btnType = "Add";
    }
  
    })
  }

  getAllUsers() {
    this.userService.fetchUsers()
    .then((res) => {
      console.log(res);
      this.users = res;
    })
  }

  getUser(empId) {
    this.userService.getUser(empId)
    .then((res) => {
      console.log(res);
      this.user = res;
      this.id = this.user[0]._id
      this.myForm.controls['userGroup']['controls'].firstName.setValue(this.user[0].firstName);
      this.myForm.controls['userGroup']['controls'].lastName.setValue(this.user[0].lastName);
      this.myForm.controls['userGroup']['controls'].empId.setValue(this.user[0].empId);
    })
  }

  onSubmit() {
    this.user = {"firstName":this.myForm.value.userGroup.firstName,
    "lastName":this.myForm.value.userGroup.lastName,
    "empId":this.myForm.value.userGroup.empId}
    if(this.id) {
      this.userService.updateUser(this.user)
          .then(res => {
              console.log(res);
              if (res.userId > 0) {
                this.status = "User Updated !!"
                this.myForm.reset();
                this.getAllUsers();
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
        this.userService.addUser(this.user)
        .then(res => {
            console.log(res);
            if (res.userId > 0) {
              this.status = "User Added !!"
              this.myForm.reset();
              this.getAllUsers();
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

  deleteUser(userId) {
    this.userService.deleteUser(userId)
    .then((res) => {
      console.log(res);
      if(res == 200) {
       this.status = "User Deleted !!";
      }
      this.getAllUsers();
    })
  }
  sortBy(prop) {
    this.property = prop; 
  }
  resetForm() {
    this.myForm.reset();
  }
}
