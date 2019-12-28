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
  logCheck: any;
  hide: boolean = true;

  constructor(
    private router: Router,
    private userService: UserDataService,
    private messageService: MessageService) {

    this.userForm = new FormGroup({
      UserName: this.usernameFormControl,
      Password: this.passwordFormControl,
    });

    //this.userService.getUsers().subscribe(
    //  Users => {
    //    this.Users = Users;
    //    console.log(Users)
    //  })
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
      var m: CarMessage = new CarMessage("Login failed!", `input was invalid`);
      this.messageService.changeMessage(m)
      return;
    }
    if (this.userForm.valid) {

      //this.userService.login(this.usernameFormControl.value, this.passwordFormControl.value)

      //this.userService.register(this.userForm.value)
      //  .pipe(first())
      //  .subscribe(
      //    data => {
      //      // this.alertService.success('Registration successful', true);
      //      this.router.navigate(['/login']);
      //    },
      //    error => {
      //      // this.alertService.error(error);
      //      this.loading = false;
      //    });
      this.logAttempt = {
        userName: this.usernameFormControl.value.toLowerCase(),
        password: this.passwordFormControl.value
      }

      this.userService.Login(this.logAttempt).subscribe(data => this.userAttempt = data)

      //OLD LOGIN WORKAROUND
      //var userAttempt = this.Users.find(
      //  u => u.UserName.toLowerCase() == this.usernameFormControl.value.toLowerCase() && u.Password == this.passwordFormControl.value
      //)
      //console.log(userAttempt)
      //OLD LOGIN WORKAROUND

   //   debugger

      //this.logCheck = setInterval(() => this.successfulLogin() ,20)
      //setTimeout(() => { this.clear(), this.throwError() }, 500);

   //   this.userAttempt == null;
      setTimeout(() => this.successfulLogin(), 500);
    }
  }
  clear() {
    clearInterval(this.logCheck);
  }
  throwError() {
    var m: CarMessage = new CarMessage("Login failed!", `password or user name are incorrect`);
    this.messageService.changeMessage(m)
  }
  successfulLogin() {
  //  debugger
    //if (this.userAttempt === undefined) {
    //  return;
    //}
    if (this.userAttempt) {
      this.clear()
      this.loggedUser = this.userAttempt;
      this.userForm.reset();
      this.router.navigateByUrl('/search');
      //this.router.navigateByUrl('/rentals');
      this.userService.Servicelogin(true, this.loggedUser)
      var _this = this;
      var m: CarMessage = new CarMessage("Login succeeded!", `hello ${_this.loggedUser.UserName}!`);
      this.messageService.changeMessage(m)
      localStorage.setItem('currentUser', JSON.stringify(_this.loggedUser));
      let a = JSON.parse(localStorage.getItem('currentUser'));
      console.log(a)
      }
    else {
      this.throwError() 
      }
  }
  logOut() {
    this.userService.Servicelogin(false, null)
    //   localStorage.removeItem('currentUser');
    this.userAttempt == null;
  }
}

