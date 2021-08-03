import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { User, Gender } from '../classes/User';
import { MessageService, CarMessage } from '../services/message.service';
import { Login } from '../classes/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Users: User[];
  logAttempt: Login;
  userAttempt: User;
  loggedUser: User;
  loggedIn: boolean = false;
//  hide: boolean = true;

  constructor(
    private router: Router,
    private userService: UserDataService,
    private messageService: MessageService) {

    this.userForm = new FormGroup({
      UserName: this.usernameFormControl,
      Password: this.passwordFormControl,
    });
  }

userForm: FormGroup;
usernameFormControl = new FormControl('', [Validators.required,]);
passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]);

  ngOnInit() {
    this.userService.swtch.subscribe(swtch => this.loggedIn = swtch)

    //var a: boolean = true
    //var b: User = {
    //  Birthdate: new Date(1987 - 10 - 23),
    //  Email: "yaacovteller@gmail.com",
    //  Fullname: "Yaacov Teller",
    //  Gender: Gender.male,
    //  PassportNumber: 343807961,
    //  Password: "password5",
    //  Permission: 2,
    //  PictureUrl: "",
    //  UserId: 3,
    //  UserName: "Jake"
    //}
    //AUTOMATIC ADMIN LOGIN FOR DEBUGGING
   // this.userService.Servicelogin(a, b)
  }

  regRoute() {
    this.router.navigateByUrl('/register');
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.messageService.specificMessage("Login failed!", `input was invalid, onSubmit`, 'warn');
      return;
    }
    if (this.userForm.valid) {
      this.logAttempt = {
        userName: this.usernameFormControl.value.toLowerCase(),
        password: this.passwordFormControl.value
      }
      this.userService.Login(this.logAttempt).subscribe(data => {
        this.successfulLogin(data)
      },
        error => {
          this.messageService.specificMessage("Login failed!", 'loginAttempt Error', 'warn');//`password or user name are incorrect`
        }
      )
    }
  }
  throwError() {
    this.messageService.specificMessage("Login failed!", `password or user name are incorrect`, 'warn');
  }
  successfulLogin(userAttempt: User) {
    if (userAttempt) {
      this.loggedUser = userAttempt;
      this.userForm.reset();
      this.router.navigateByUrl('/search');
      this.userService.Servicelogin(true, userAttempt)
      }
    else {
      this.throwError() 
      }
  }
  //logOut() {
  //  this.userService.Servicelogin(false, null)
  //  //   localStorage.removeItem('currentUser');
  //  this.userAttempt == null; //?
  //  this.logAttempt == null; //?
  //}
}

