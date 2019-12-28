import { Component, OnInit, } from '@angular/core';
import { RentalDataService } from 'src/app/services/rental-data.service';
import { CarDataService } from 'src/app/services/car-data.service';
import { Car } from 'src/app/Classes/Car';
import { MessageService, CarMessage } from 'src/app/services/message.service';
import { MatDialog, Sort } from '@angular/material';
import { carsModal } from './carsModal';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'manage-cars',
  styleUrls: ['manage-cars.component.scss'],
  templateUrl: 'manage-cars.component.html',
})
export class ManageCarsComponent implements OnInit {

  cars: Car[] = [];
  sortedCars: Car[];
  returnedDate: Car;
  deleteCheck: boolean = false;
  slatedForDelete: Car;
  deleteCheckOverride: boolean = false;
  newCar: Car = new Car;
  newCarSwitch: boolean = false;

  constructor(
    private router: Router,
    private carService: CarDataService,
    private messageService: MessageService,
    public dialog: MatDialog,
  ) { }

  //carForm: FormGroup;
  //PictureUrlFormControl = new FormControl('', []);
  //CarIdFormControl = new FormControl('', []);
  //CarTypeIdFormControl = new FormControl('', []);
  //CarNumberFormControl = new FormControl('', []);
  //MileageFormControl = new FormControl('', []);
  //FitForRentFormControl = new FormControl('', []);
  //AvailableFormControl = new FormControl('', []);
  //BranchIdFormControl = new FormControl('', []);
  
  ngOnInit() {
    this.summonCars();
  }

  openDialog(car: Car): void {
    const dialogRef = this.dialog.open(carsModal, {
      width: '250px',
      data: { car: car, newCarSwitch: this.newCarSwitch }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.returnedDate = result;
        this.saveToDatabase(this.returnedDate)
        this.newCarSwitch = false;
      }
      else {
        var m: CarMessage = new CarMessage("No edit done", `No input`);
        this.messageService.changeMessage(m)
      }
    });
  }
  saveToDatabase(recievedCar) {
    console.log(recievedCar)
    if (this.newCarSwitch == true) {
      this.carService.newCar(recievedCar)
        .pipe(first())
        .subscribe(
          data => {
            var m: CarMessage = new CarMessage("Creating car...", `${data}`);
            this.messageService.changeMessage(m)
          },
          error => {
            var m: CarMessage = new CarMessage("Error!", `${error}`);
            this.messageService.changeMessage(m)
          }
      );
    }
    else {
      this.carService.editCar(recievedCar)
        .pipe(first())
        .subscribe(
          data => {
            var m: CarMessage = new CarMessage("Editing car...", `${data}`);
            this.messageService.changeMessage(m)
          },
          error => {
            var m: CarMessage = new CarMessage("Error!", `${error}`);
            this.messageService.changeMessage(m)
          }
        );
    }
  }
  summonCars() {
    this.carService.getCars().subscribe(cars => {
      this.sortedCars = this.cars = cars
  //    console.log(this.sortedCars)
      console.log(/*JSON.stringify(this.sortedCars, null, 2)*/)
    })
  }
  deleteAttempt(car: Car) {
    this.slatedForDelete = car;
    if (this.deleteCheckOverride == false) {
      this.deleteCheck = true;
    }
    else this.delete();
  }
  removeDeleteCheck() {
    this.deleteCheckOverride = true;
    var m: CarMessage = new CarMessage("Warning", `Delete responsibly`);
    this.messageService.changeMessage(m)
    this.deleteCheck = false;
  }

  delete() {
    var car = this.slatedForDelete;
    var id = car.CarId;

    this.carService.deleteCars(id)
      .subscribe(res => {
        this.summonCars();
        var m: CarMessage = new CarMessage("Success", `Car no. ${id} was deleted`);
        this.messageService.changeMessage(m)
      }, (err) => {
        console.log(err);
   //     this.isLoadingResults = false;
        var m: CarMessage = new CarMessage("Error!", `Car no. ${id} was NOT deleted`);
        this.messageService.changeMessage(m)
      }
    );
    this.deleteCheck = false;
  }
  newCarSwitcher() {
    this.newCarSwitch = true
  }

  //cars table sort function
  sortData(sort: Sort) {
    const data = this.cars;
    if (!sort.active || sort.direction === '') {
      this.sortedCars = data;
      return;
    }

    this.sortedCars = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'CarId': return compare(a.CarId, b.CarId, isAsc);
        case 'CarTypeId': return compare(a.CarType.CarTypeId, b.CarType.CarTypeId, isAsc);
        case 'Mileage': return compare(a.Mileage, b.Mileage, isAsc);
        case 'PictureUrl': return compare(a.PictureUrl, b.PictureUrl, isAsc);
        case 'FitForRental': return compare(a.FitForRental, b.FitForRental, isAsc);
        case 'BranchId': return compare(a.Branch.BranchId, b.Branch.BranchId, isAsc);
        case 'CarNumber': return compare(a.CarNumber, b.CarNumber, isAsc);
        case 'Available': return compare(a.Available, b.Available, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string | Date | boolean, b: number | string | Date | boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
