import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../services/car-data.service';
import { RentalDataService } from '../services/rental-data.service';
import { Car } from '../Classes/Car';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../Classes/User';
import { first } from 'rxjs/operators';
import { Rental } from '../classes/Rental';
import { UserDataService } from '../services/user-data.service';
import { MessageService, CarMessage } from '../services/message.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private carService: CarDataService,
    private rentalService: RentalDataService,
    private userService: UserDataService,
    private messageService: MessageService,) {

  }

  carFolder: string = `./../../assets/cars/`;
  sDate: Date
  eDate: Date
  minDate: Date = new Date()
  sString: string = ""
  eString: string = ""
  daysDifference: number

  car: Car;
  loggedUser: User;
  //rentalObject: any = {};
  rental: Rental;
  rentalComplete: boolean;

  ngOnInit() {
    this.carService.car.subscribe(c => this.car = c)
    this.userService.user.subscribe(user => this.loggedUser = user)
    //this.rentalForm.controls['Car'].setValue(this.car);
    //this.rentalForm.controls['User'].setValue(this.user);
    this.rentalComplete = false;
    if (!this.car) {
      this.messageService.specificMessage("No selected vehicle", `Dude, you can't check out a lack of car, go back and find one you like`, 'info')
      //console.log("LOGGED USER: " + this.loggedUser.UserId)
    }
  }
  setDateStrings() {
    this.sString = this.sDate? (this.sDate.getMonth() + 1) + "/" + (this.sDate.getDate() + 1) + "/" + this.sDate.getFullYear() : ""
    this.eString = this.eDate? (this.eDate.getMonth() + 1) + "/" + (this.eDate.getDate() + 1)  + "/" + this.eDate.getFullYear() : ""

    if (this.sDate && this.eDate) {
      var millisecondDifference = this.eDate.getTime() - this.sDate.getTime()
      this.daysDifference = millisecondDifference / (1000 * 60 * 60 * 24)
    }
  }
  picError() {

  }

  onSubmit() {
    //if (this.rentalForm.invalid) {
    //  return;
    //}
    //if (this.rentalForm.valid) {
    //  console.log("Form valid");
    //  console.log(this.rentalForm.value);
    if (!this.sDate || !this.eDate) {
      this.messageService.specificMessage("Unselected dates", "Make sure to select a start and end date", 'warn')
      return
    }
    else if (this.sDate.getTime() > this.eDate.getTime()) {
      this.messageService.specificMessage("Time paradox", "You've managed to request a negative rental. You want us to pay you for it??", 'warn')
      return
    }
    
    //this.rentalObject.Car = this.car;
    //this.rentalObject.User = this.loggedUser;
    //this.rentalObject.StartDate = this.sDate;
    //this.rentalObject.EndDate = this.eDate;
    // this.rental = <Rental>this.rentalObject;
    this.rental = new Rental(this.sDate, this.eDate, this.loggedUser, this.car)
    this.rental.User.UserId = this.loggedUser.UserId;
    console.log("LOGGED USER: " + this.rental.User.UserId)

      this.rentalService.rent(this.rental)
        .pipe(first())
        .subscribe(
        data => {
            console.log(data);
            this.messageService.specificMessage("Your order has been processed", `Enjoy your car, ${this.loggedUser.UserName}!`, 'success')
          },
        error => {
          console.log(error)
      });
    //MAKE CAR UNAVAILABLE
    this.car.Available = false;
    this.carService.editCar(this.car)
      .pipe(first())
      .subscribe(
        data => {
        }
      );

    this.rentalComplete = true
    }
  }
