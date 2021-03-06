import { Component, OnInit } from '@angular/core';
import { CarDataService } from 'src/app/services/car-data.service';
import { MessageService, CarMessage } from 'src/app/services/message.service';
import { MatDialog, Sort } from '@angular/material';
import { CarType } from 'src/app/Classes/CarType';
import { carTypeModal } from './carTypeModal';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { debug } from 'util';

@Component({
  selector: 'manage-car-types',
  templateUrl: './manage-car-types.component.html',
  styleUrls: ['./manage-car-types.component.scss']
})
export class ManageCarTypesComponent implements OnInit {

  constructor(
    private router: Router,
    private carService: CarDataService,
    private messageService: MessageService,
    public dialog: MatDialog,
  ) { }
    

  carTypes: CarType[]
  sortedCarTypes: CarType[]
  returnedData: any;
  deleteCheck: boolean = false;
  slatedForDelete: CarType;
  deleteCheckOverride: boolean = false;
  newType: CarType = new CarType;
  newTypeSwitch: boolean;

  ngOnInit() {
    this.summonCarTypes();
  }

  openDialog(car: CarType): void {
    const dialogRef = this.dialog.open(carTypeModal, {
      width: '250px',
      data: { car: car }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.returnedData = result;
        this.saveToDatabase(this.returnedData)
      }
      else {
        var m: CarMessage = new CarMessage("No edit done", `No input`);
        this.messageService.changeMessage(m)
      }
    });
  }
  saveToDatabase(recievedCar) {
    console.log(recievedCar)
    if (this.newTypeSwitch == true) {
      this.carService.newCarType(recievedCar)
        .pipe(first())
        .subscribe(
          data => {
            var m: CarMessage = new CarMessage("Creating carType...", `${data}`);
            this.messageService.changeMessage(m)
          },
          error => {
            var m: CarMessage = new CarMessage("Error!", `${error}`);
            this.messageService.changeMessage(m)
          }
      );
      this.newTypeSwitch = false;
    }
    else {
      this.carService.editCarType(recievedCar)
        .pipe(first())
        .subscribe(
          data => {
            var m: CarMessage = new CarMessage("Editing carType...", `${data}`);
            this.messageService.changeMessage(m)
          },
          error => {
            var m: CarMessage = new CarMessage("Error!", `${error}`);
            this.messageService.changeMessage(m)
          }
        );
    }
  }
  summonCarTypes() {
    this.carService.getCarTypes().subscribe(cars => {
      this.sortedCarTypes = this.carTypes = cars
      console.log(/*JSON.stringify(this.sortedCarTypes, null, 2)*/)
    })
  };
  deleteAttempt(carType: CarType) {
    this.slatedForDelete = carType;
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
    var type = this.slatedForDelete;
    var id = type.CarTypeId;
 
    this.carService.deleteCarTypes(id)
      .subscribe(res => {
        this.summonCarTypes();
        var m: CarMessage = new CarMessage("Success", `CarType no. ${id} was deleted`);
        this.messageService.changeMessage(m)
      }, (err) => {
        console.log(err);
        //     this.isLoadingResults = false;
        var m: CarMessage = new CarMessage("Error!", `CarType no. ${id} was NOT deleted`);
        this.messageService.changeMessage(m)
      }
      );
  }
  newCarTypeSwitcher() {
    this.newTypeSwitch = true
  }

  //carType table sort function
  sortData(sort: Sort) {
    const data = this.carTypes;
//    debugger;
    if (!sort.active || sort.direction === '') {
      this.sortedCarTypes = data;
      return;
    }

    this.sortedCarTypes = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'CarTypeId': return compare(a.CarTypeId, b.CarTypeId, isAsc);
        case 'Manufacturer': return compare(a.Manufacturer, b.Manufacturer, isAsc);
        case 'Model': return compare(a.Model, b.Model, isAsc);
        case 'PricePerDay': return compare(a.PricePerDay, b.PricePerDay, isAsc);
        case 'PriceOverdue': return compare(a.PricePerDayOver, b.PricePerDayOver, isAsc);
        case 'YearOfManufacture': return compare(a.YearOfManufacture, b.YearOfManufacture, isAsc);
        case 'Transmission': return compare(a.Transmission, b.Transmission, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
