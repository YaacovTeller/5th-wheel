import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, CarMessage } from 'src/app/services/message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RentalDataService } from 'src/app/services/rental-data.service';
import { Rental } from 'src/app/classes/Rental';
import { Sort, MatDialog, } from '@angular/material';
import { returnsModal } from './returnsModal'
import { first } from 'rxjs/operators';
import { CarDataService } from 'src/app/services/car-data.service';
import { Car } from 'src/app/Classes/Car';

@Component({
  selector: 'manage-returns',
  templateUrl: './manage-returns.component.html',
  styleUrls: ['./manage-returns.component.scss']
})
export class ManageReturnsComponent implements OnInit {

  rentals: Rental[];
  openRentals: Rental[];
  sortedOpenRentals: Rental[];
  cars: Car[];
  car: Car;

  returnedDate: Date;
  recievedRental: Rental;

  constructor(
    private router: Router,
    private rentalService: RentalDataService,
    private messageService: MessageService,
    public dialog: MatDialog,
    private carService: CarDataService,
  ) { }

  returnForm: FormGroup;
  dateFormControl = new FormControl('', []);

  ngOnInit() {
    this.returnForm = new FormGroup({
      returned: this.dateFormControl,

    });
    this.summonCars();
    this.summonRentals();
  }


  openDialog(rental: Rental): void {
    const dialogRef = this.dialog.open(returnsModal, {
      width: '250px',
      data: { rental: rental }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recievedRental = result;
        this.saveToDatabase(this.recievedRental)
      }
      else {
        this.messageService.specificMessage("No edit done", `No input`, 'info');
      }
    });
  }

  saveToDatabase(recievedRental: Rental) {
    this.rentalService.return(recievedRental)
    .pipe(first())
      .subscribe(
        data => {
          this.messageService.specificMessage("Returning car...", `${data}`);
        }
    );
    //MAKE CAR AVAILABLE AGAIN
    this.car = this.cars.find(c => c.CarId == recievedRental.Car.CarId)
    this.car.Available = true;
    this.carService.editCar(this.car)
      .pipe(first())
      .subscribe(
        data => {
          //var m: CarMessage = new CarMessage("Returning car...", `${data}`);
          //this.messageService.changeMessage(m)
        }
      );
  }

  summonRentals() {
    this.rentalService.getRentals().subscribe(
      rentals => {
        this.rentals = rentals;
        this.sortedOpenRentals = this.openRentals = this.rentals.filter(r => !r.Returned)

    //    console.log(JSON.stringify(this.sortedOpenRentals, null, 2))
        console.log(this.rentals);
      })
  }
  summonCars() {
    this.carService.getCars().subscribe(
      cars => {
        this.cars = cars;
      })
  }
  //Rentals table sort function
  sortData(sort: Sort) {
    const data = this.openRentals;
    if (!sort.active || sort.direction === '') {
      this.sortedOpenRentals = data;
      return;
    }

    this.sortedOpenRentals = data.sort((a, b) => {
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
