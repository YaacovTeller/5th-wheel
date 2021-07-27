import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Sort, MatDialog } from '@angular/material';
import { User } from 'src/app/Classes/User';
import { MessageService, CarMessage } from 'src/app/services/message.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { userModal } from './userModal';
import { Router, Event } from '@angular/router';
import { first } from 'rxjs/operators';
import { permissionPipe } from './../../services/pipes';



@Component({
  selector: 'manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  userFolder: string = `./../../../assets/users/`;
  Users: User[];
  sortedUsers: User[];
  returnedDate: User;
  deleteCheck: boolean = false;
  deleteCheckOverride: boolean = false;
  slatedForDelete: User;

  constructor(
    private router: Router,
    private userService: UserDataService,
    private messageService: MessageService,
    public dialog: MatDialog,
    public permission: permissionPipe,
 //   private detectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.summonUsers()
  }

  //MODAL STUFF
  openDialog(user: User): void {
    const dialogRef = this.dialog.open(userModal, {
      width: '500px',
      data: {
        user: user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.returnedDate = result;
        this.saveToDatabase(this.returnedDate);
      }
      else {
        this.messageService.specificMessage("No edit done", `No input`, 'info');
      }
    });
  }
  saveToDatabase(user) {
    this.userService.editUser(user)
  .pipe(first())
  .subscribe(
    data => {
      this.messageService.specificMessage("Editing user...", `${data}`);
      this.summonUsers();
    })
  }

  summonUsers() {
    this.userService.getUsers().subscribe(
      Users => {
        this.sortedUsers = this.Users = Users;
        console.log(Users)
      })
  }
  deleteAttempt(user: User, button: HTMLElement) {
    this.slatedForDelete = user;
    if (this.deleteCheckOverride == false) {
      this.deleteCheck = true;
    }
    else this.delete();
  }
  removeDeleteCheck() {
    this.deleteCheckOverride = true;
    this.messageService.genericWarning(`Delete responsibly`);
    this.deleteCheck = false;
  }

  delete() {
    var user = this.slatedForDelete;
    var id = user.UserId;
      //var m: CarMessage = new CarMessage("Warning!", `Do you want to remove user no. ${id}?`);
      //this.messageService.changeMessage(m)
      //this.deleteCheck = true;
      //setTimeout(() => this.deleteCheck = false,3000)
    this.userService.deleteUsers(id)
      .subscribe(res => {
        this.summonUsers();
      //  button.parentElement.style.display = "none";
        this.messageService.genericSuccess(`User no. ${id} was deleted`)
      }, (err) => {
        console.log(err);
          //     this.isLoadingResults = false;
          this.messageService.genericError(`User no. ${id} was NOT deleted`);
       //   throw err
      }
    );
    this.deleteCheck = false;
  }

  //Rentals table sort function
  sortData(sort: Sort) {
    const data = this.Users;
    if (!sort.active || sort.direction === '') {
      this.sortedUsers = data;
      return;
    }

    this.sortedUsers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'UserId': return compare(a.UserId, b.UserId, isAsc);
        case 'Fullname': return compare(a.Fullname, b.Fullname, isAsc);
        case 'PassportNumber': return compare(a.PassportNumber, b.PassportNumber, isAsc);
        case 'UserName': return compare(a.UserName, b.UserName, isAsc);
        case 'Birthdate': return compare(a.Birthdate, b.Birthdate, isAsc);
        case 'Gender': return compare(a.PassportNumber, b.PassportNumber, isAsc);
        case 'Password': return compare(a.UserName, b.UserName, isAsc);
        case 'PictureUrl': return compare(a.Birthdate, b.Birthdate, isAsc);
        case 'Permission': return compare(a.Birthdate, b.Birthdate, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
