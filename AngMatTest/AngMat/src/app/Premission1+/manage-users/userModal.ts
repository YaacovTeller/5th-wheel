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

  editedUser: any = {};
  sendBackData: User;

  constructor(
    public dialogRef: MatDialogRef<userModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public permission: permissionPipe
  ) { }

  ngOnInit() {
    this.sendBackData = this.data.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    console.log(this.editedUser)
    this.sendBackData.UserName = this.editedUser.UserName ? this.editedUser.UserName : this.sendBackData.UserName;
    this.sendBackData.Birthdate = this.editedUser.Birthdate ? this.editedUser.Birthdate : this.sendBackData.Birthdate;
    this.sendBackData.Email = this.editedUser.Email ? this.editedUser.Email : this.sendBackData.Email;
    this.sendBackData.Fullname = this.editedUser.Fullname ? this.editedUser.Fullname : this.sendBackData.Fullname;
    this.sendBackData.Gender = this.editedUser.Gender ? this.editedUser.Gender : this.sendBackData.Gender;
    this.sendBackData.PassportNumber = this.editedUser.PassportNumber ? this.editedUser.PassportNumber : this.sendBackData.PassportNumber;
    this.sendBackData.Password = this.editedUser.Password ? this.editedUser.Password : this.sendBackData.Password;
    this.sendBackData.Permission = this.editedUser.Permission ? this.editedUser.Permission : this.sendBackData.Permission;
    this.sendBackData.PictureUrl = this.editedUser.PictureUrl ? this.editedUser.PictureUrl : this.sendBackData.PictureUrl;
    this.dialogRef.close(this.sendBackData);
  }
}
