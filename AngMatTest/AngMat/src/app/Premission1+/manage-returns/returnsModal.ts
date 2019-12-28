import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Rental } from 'src/app/classes/Rental';

export interface DialogData {
  rental: Rental
}

@Component({
  selector: 'returnsModal',
  templateUrl: 'returnsModal.html',
})
export class returnsModal {

  minDate: Date;
  maxDate: Date = new Date();

  returnedDate: Date;
  sendBackData: Rental;

  constructor(
    public dialogRef: MatDialogRef<returnsModal>,
    @Inject(MAT_DIALOG_DATA) public rental: DialogData) { }

  ngOnInit() {
    this.sendBackData = this.rental.rental;
    this.minDate = this.rental.rental.StartDate;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    this.sendBackData.Returned = this.returnedDate;
    //this.sendBackData.Car.Available = 1;
    this.dialogRef.close(this.sendBackData);
  }
}
