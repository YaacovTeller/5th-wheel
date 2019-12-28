import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../services/car-data.service';
import { Rental } from '../classes/Rental';
import { RentalDataService } from '../services/rental-data.service';
import { CarType } from '../Classes/CarType';
import { Car } from '../Classes/Car';
import { map, } from 'rxjs/operators';
import { User } from '../Classes/User';
import { UserDataService } from '../services/user-data.service';
import { Sort } from '@angular/material/sort';
import { MessageService, CarMessage } from '../services/message.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {

  carType: CarType;
  carsForSelection: Car[];
  allCars: Car[];
  rentals: Rental[];
  usersRentals: Rental[];
  sortedUsersRentals: Rental[];
  loggedUser: User;
  allCarsView: boolean = false;
  carsOfInterest: Car[] = [];

  constructor(
    private carService: CarDataService,
    private rentalService: RentalDataService,
    private userService: UserDataService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    //SUBSRIBE FOR LOGGED USER
    this.userService.user.subscribe(user => this.loggedUser = user)

       //   console.log('ngOninit after getCarType() ' + JSON.stringify(this.carType, null, 2));
    this.getCarType().subscribe(_ => {  ;
      error => {
        console.log('problem', error)
        var m: CarMessage = new CarMessage("Error!", `CarTypes were not imported`);
        this.messageService.changeMessage(m)
      }
    });
   
    this.getCars().subscribe(_ => {  ;
      error => {
        console.log('problem', error)
        var m: CarMessage = new CarMessage("Error!", `Cars were not imported`);
        this.messageService.changeMessage(m)
      }
      if (this.carType) {
        this.carsForSelection = this.allCars.filter(c => c.CarType.CarTypeId == this.carType.CarTypeId)
      }
    });
      //FILTER RENTALS FOR USER
    this.getRentals().subscribe(_ => {
      if (this.loggedUser) {
        this.assignusersRentals()
        error => {
          console.log('problem', error)
          var m: CarMessage = new CarMessage("Error!", `Rentals were not imported`);
          this.messageService.changeMessage(m)
        }
        }

    })
    //LOCAL STORAGE FOR FOOTER CARDS
    var temp = JSON.parse(localStorage.getItem('carsOfInterest'));
    if (temp) { this.carsOfInterest = temp}
  }
  assignusersRentals() {
    this.sortedUsersRentals = this.usersRentals = this.rentals.filter(r => r.User.UserId == this.loggedUser.UserId)
  }
  getRentals() {
    return this.rentalService.getRentals().pipe(map((rentals) => { this.rentals = rentals }))
  }
  getCarType() {
    return this.carService.carType.pipe(map((carType) => { this.carType = carType }))
  }
  getCars() {
    return this.carService.getCars().pipe(map((carsFS) => { this.allCars = carsFS }))
  }

  viewAllCars() {
    if (this.allCarsView == true) {
      this.carsForSelection = this.allCars;
    //  this.allCarsView = true;
    }
    else {
      if (this.carType) {
        this.carsForSelection = this.allCars.filter(c => c.CarType.CarTypeId == this.carType.CarTypeId)
      }
      else {
      this.carsForSelection = [];
   //     this.allCarsView = false;
      }
    }
   // (<HTMLInputElement>document.getElementById("allCarsViewbtn")).style.display = 'none';
  }

  backToSearch() {
    this.router.navigateByUrl("/search")
  }

  //Set chosen car and ADD TO LOCAL STORAGE for FOOTER
  setServiceCar(car) {
    this.carService.changeCar(car);

    var exists = false;
    var temp = JSON.parse(localStorage.getItem('carsOfInterest'))
    if (temp) {
      for (var i = 0; i < temp.length; i++) {
        if (temp[i].CarId == car.CarId) {
          exists = true
          break
        }
      }
    }
    if (exists == false) {
      this.carsOfInterest.push(car)
      localStorage.setItem('carsOfInterest', JSON.stringify(this.carsOfInterest));
    }
    //var storedCars = JSON.parse(localStorage.getItem("carsOfInterest"));
    //localStorage.removeItem('carsOfInterest');
  }

  //Past rentals table sort function
  sortData(sort: Sort) {
    const data = this.usersRentals;
    if (!sort.active || sort.direction === '') {
      this.sortedUsersRentals = data;
      return;
    }

    this.sortedUsersRentals = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'RentalsId': return compare(a.RentalsId, b.RentalsId, isAsc);
        case 'StartDate': return compare(a.StartDate, b.StartDate, isAsc);
        case 'DueBackDate': return compare(a.EndDate, b.EndDate, isAsc);
        case 'ReturnedDate': return compare(a.Returned, b.Returned, isAsc);
        case 'CarId': return compare(a.Car.CarId, b.Car.CarId, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
