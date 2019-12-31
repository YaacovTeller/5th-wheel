import { Component, OnInit } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngMat';

  constructor(private userService: UserDataService, ) {}

  ngOnInit() {
    let userFromStorage = JSON.parse(localStorage.getItem('currentUser'));
    if (userFromStorage) {
      this.userService.Servicelogin(true, userFromStorage)
    }
  }
}
