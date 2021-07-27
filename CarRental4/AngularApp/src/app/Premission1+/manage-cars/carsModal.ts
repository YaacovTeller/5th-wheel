import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Car, CarDisplayDTO } from 'src/app/Classes/Car';
import { CarDataService } from '../../services/car-data.service';

interface DialogData {
  car: CarDisplayDTO;
  newCarSwitch: boolean;
}

@Component({
  selector: 'carsModal',
  templateUrl: 'carsModal.html',
})
export class carsModal {

  editedCar: CarDisplayDTO;

  constructor(
    public dialogRef: MatDialogRef<carsModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }

  ngOnInit() {
    this.editedCar = Object.assign({}, this.data.car);
    if (this.data.newCarSwitch == true) {

    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.editedCar);
  }
  handlePicSelect(files: FileList) {
    this.editedCar.Pic = files.item(0);
  }
}
