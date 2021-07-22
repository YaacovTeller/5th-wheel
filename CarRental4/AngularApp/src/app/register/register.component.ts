import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserDataService } from '../services/user-data.service';
import { MessageService, CarMessage } from '../services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  loading = false;

  constructor(
    private router: Router,
    private userService: UserDataService,
    private messageService: MessageService,
  ) {

    this.userForm = new FormGroup({
      FullName: this.nameFormControl,
      PassportNumber: this.passportFormControl,
      UserName: this.usernameFormControl,
      Gender: this.genderFormControl,
      Email: this.emailFormControl,
      Password: this.passwordFormControl,

      PictureUrl: this.pictureFormControl,
      BirthDate: this.dateFormControl,
    });
  }

  userForm: FormGroup;
  emailFormControl = new FormControl('', [ Validators.required,Validators.email,]);
  passwordFormControl = new FormControl('', [ Validators.required, Validators.minLength(6),Validators.maxLength(10)]);
  nameFormControl = new FormControl('', [ Validators.required,]);
  usernameFormControl = new FormControl('', [ Validators.required,]);
  passportFormControl = new FormControl('', [ Validators.required,Validators.minLength(9),Validators.maxLength(9)]);
  genderFormControl = new FormControl('', [ Validators.required,]);

  pictureFormControl = new FormControl('', []);
  dateFormControl = new FormControl('', []);
  minDate = new Date(1910, 0, 1);
  maxDate = new Date(2020, 0, 1);

  hide = true;

  onSubmit(){
    if (this.userForm.invalid) {
      var m: CarMessage = new CarMessage("Registration failed!", `input was invalid`);
      this.messageService.changeMessage(m)
      return;
  }
    if (this.userForm.valid) {
      console.log(JSON.stringify(this.userForm.value));

      this.userService.register(this.userForm.value)
      .pipe(first())
      .subscribe(
          data => {
            var m: CarMessage = new CarMessage("Registration Succeeded!", `Welcome to the database!`);
            this.messageService.changeMessage(m)
            this.router.navigate(['/login']);
            setTimeout(() => this.userForm.reset(), 1000);
          },
        error => {
          //if (error.status == 400) {
          //       this.loading = false;
          //}
          if (error.status == 409) {
            var m: CarMessage = new CarMessage("Duplicate user", `Registration failed with ${error.status}, user name already exists.`);
            this.messageService.changeMessage(m)
          }
          else {
            var m: CarMessage = new CarMessage("Error", `Registration failed with ${error.status}`);
            this.messageService.changeMessage(m)
          }
          });
    }
  }
}
