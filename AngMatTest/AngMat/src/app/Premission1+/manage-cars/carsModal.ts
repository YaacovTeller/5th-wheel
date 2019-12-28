import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Car } from 'src/app/Classes/Car';

export interface DialogData {
  car: Car;
  newCarSwitch: boolean;
}

@Component({
  selector: 'carsModal',
  templateUrl: 'carsModal.html',
})
export class carsModal {

  editedCar: any = {};
  sendBackData: Car;

  constructor(
    public dialogRef: MatDialogRef<carsModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.sendBackData = this.data.car;
    if (this.data.newCarSwitch == true) {

    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    console.log(this.editedCar)

    this.sendBackData.CarId = this.editedCar.CarId ? this.editedCar.CarId : this.sendBackData.CarId;
    this.sendBackData.CarType.CarTypeId = this.editedCar.CarTypeId ? this.editedCar.CarTypeId : this.sendBackData.CarType.CarTypeId;
    this.sendBackData.CarNumber = this.editedCar.CarNumber ? this.editedCar.CarNumber : this.sendBackData.CarNumber;
    this.sendBackData.Mileage = this.editedCar.Mileage ? this.editedCar.Mileage : this.sendBackData.Mileage;
    this.sendBackData.FitForRental = this.editedCar.FitForRental != null ? this.editedCar.FitForRental : this.sendBackData.FitForRental;
    this.sendBackData.Available = this.editedCar.Available != null ? this.editedCar.Available : this.sendBackData.Available;
    this.sendBackData.Branch.BranchId = this.editedCar.BranchId ? this.editedCar.BranchId : this.sendBackData.Branch.BranchId;
    this.sendBackData.PictureUrl = this.editedCar.PictureUrl ? this.editedCar.PictureUrl : this.sendBackData.PictureUrl;
    this.dialogRef.close(this.sendBackData);
  }
}
