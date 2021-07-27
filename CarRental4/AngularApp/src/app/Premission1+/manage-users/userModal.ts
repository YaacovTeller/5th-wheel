import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/Classes/User';
import { permissionPipe } from './../../services/pipes';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'userModal',
  templateUrl: 'userModal.html',
  providers: [permissionPipe]
})
export class userModal {

  editedUser: User;// = {};
 // sendBackData: User;
  hide: boolean = false;

  minDate: Date = new Date("1/1/1920");
  maxDate: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<userModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public permission: permissionPipe
  ) { }

  ngOnInit() {
    this.editedUser = Object.assign({}, this.data.user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    console.log(this.editedUser)
    this.dialogRef.close(this.editedUser);
  }
}
