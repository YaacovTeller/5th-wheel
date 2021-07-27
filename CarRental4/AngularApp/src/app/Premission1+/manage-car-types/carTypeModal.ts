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

  editedCar: CarType;

  constructor(
    public dialogRef: MatDialogRef<carTypeModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.editedCar = Object.assign({}, this.data.car);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.editedCar);
  }
}
