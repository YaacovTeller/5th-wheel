import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { CarType, Gear } from 'src/app/Classes/CarType';

export interface DialogData {
  car: CarType;
  newTypeSwitch: boolean;
}

@Component({
  selector: 'carTypeModal',
  templateUrl: 'carTypeModal.html',
  styleUrls: ['./manage-car-types.component.scss']
})
export class carTypeModal {

  editedCar: CarType;
  transmissionValue: boolean = true;
  gears = [Gear[0], Gear[1]]

  constructor(
    public dialogRef: MatDialogRef<carTypeModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    var carObj = this.data.car;
    this.editedCar = Object.assign({}, carObj);
    if (this.data.newTypeSwitch == true) {
      Gear.manual
      this.editedCar.Transmission = Gear.manual;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  toggle(val, obj, prop) {
    val = val == true ? 1 : 0;
    obj[prop] = Gear[val] //{ positionOne: 'Two', positionTwo: 'One' }[val];
  }
  save() {
    this.dialogRef.close(this.editedCar);
  }
}
