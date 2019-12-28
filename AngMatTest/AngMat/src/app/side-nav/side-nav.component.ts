import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { slideInAnimation } from './../slideAnimation';
import { UserDataService } from '../services/user-data.service';
import { User } from '../Classes/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [slideInAnimation]
})
export class SideNavComponent {

  loggedIn: boolean = false;
  loggedUser: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserDataService,
    private router: Router,
  ) {

    this.userService.swtch.subscribe(swtch => { this.loggedIn = swtch  })
    this.userService.user.subscribe(user => this.loggedUser = user)
  }

  calltoLogout() {
    this.userService.Servicelogin(false, null)
  }
}
