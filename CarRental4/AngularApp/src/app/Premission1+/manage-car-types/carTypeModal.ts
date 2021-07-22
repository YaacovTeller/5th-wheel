import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { CarType } from 'src/app/Classes/CarType';

export interface DialogData {
  car: CarType;
}

@Component({
  selector: 'carTypeModal',
  templateUrl: 'carTypeModal.html',
})
export class carTypeModal {

  editedCar: any = {};
  sendBackData: CarType;

  constructor(
    public dialogRef: MatDialogRef<carTypeModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.sendBackData = this.data.car;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    console.log()
    //this.sendBackData.CarTypeId = this.editedCar.CarTypeId ? this.editedCar.CarTypeId : this.sendBackData.CarTypeId;
    this.sendBackData.Manufacturer = this.editedCar.Manufacturer ? this.editedCar.Manufacturer : this.sendBackData.Manufacturer;
    this.sendBackData.Model = this.editedCar.Model ? this.editedCar.Model : this.sendBackData.Model;
    this.sendBackData.PricePerDay = this.editedCar.PricePerDay ? this.editedCar.PricePerDay : this.sendBackData.PricePerDay;
    this.sendBackData.PricePerDayOver = this.editedCar.PricePerDayOver ? this.editedCar.PricePerDayOver : this.sendBackData.PricePerDayOver;
    this.sendBackData.Transmission = this.editedCar.Transmission ? this.editedCar.Transmission : this.sendBackData.Transmission;
    this.sendBackData.YearOfManufacture = this.editedCar.YearOfManufacture ? this.editedCar.YearOfManufacture : this.sendBackData.YearOfManufacture;
    this.sendBackData.PictureUrl = this.editedCar.PictureUrl ? this.editedCar.PictureUrl : this.sendBackData.PictureUrl;

    this.dialogRef.close(this.sendBackData);
  }
}
