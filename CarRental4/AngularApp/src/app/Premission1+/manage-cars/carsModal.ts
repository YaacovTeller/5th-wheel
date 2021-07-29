import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Car } from 'src/app/Classes/Car';
import { BranchDataService } from '../../services/branch-data.service';
import { Branch } from '../../Classes/Branch';
import { CarDataService } from '../../services/car-data.service';
import { CarType } from '../../Classes/CarType';

interface DialogData {
  car: Car;
  newCarSwitch: boolean;
}

@Component({
  selector: 'carsModal',
  templateUrl: 'carsModal.html',
})
export class carsModal {

  carTypes: Array<CarType>;
  branches: Array<Branch>;
  editedCar: Car;

  constructor(
    private branchService: BranchDataService,
    private carService: CarDataService,
    public dialogRef: MatDialogRef<carsModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }

  ngOnInit() {
    this.summonBranches();
    this.summonCarTypes();
    this.editedCar = Object.assign({}, this.data.car);

    if (this.data.newCarSwitch == true) {
      this.editedCar.Available = true;
      this.editedCar.FitForRental = true;
    }
  }
  summonCarTypes() {
    this.carService.getCarTypes().subscribe(types => {
      this.carTypes = types;
    });;
  };
  summonBranches() {
    this.branchService.getBranches().subscribe(branches => {
      this.branches = branches;
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    if (!this.data.newCarSwitch) {
      this.editedCar.Branch.BranchId = this.editedCar.BranchId;
      this.editedCar.CarType.CarTypeId = this.editedCar.CarTypeId;
    }
    this.dialogRef.close(this.editedCar);
  }
  handlePicSelect(files: FileList) {
  //  this.editedCar.Pic = files.item(0);
  }
}
