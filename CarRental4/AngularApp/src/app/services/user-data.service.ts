import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Classes/User';
import { tap, map } from 'rxjs/operators';
import { CarMessage, MessageService } from './message.service';
import { Login } from '../classes/Login';
import { error } from 'protractor';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  //Url: string = UrlStrings.LocalUrl
  Url: string = environment.Url
  RecievedUser: any;

  constructor(private client: HttpClient, private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.Url + "UserInfo/GetUsers")
      .pipe(tap(data => console.log(/*JSON.stringify(data)*/)),
        //errors
      );
  }
  deleteUsers(id: number): Observable<User> {
    return this.client.delete<User>(this.Url + "UserInfo/DeleteUsers?id=" + id)

  }
  editUser(user: User) {
    return this.client.put<User>(this.Url + "UserInfo/PutUsers", user)
      .pipe(tap(data => console.log(/*JSON.stringify(data, null, 2)*/)),
        //    catchError();
      );
  }

  //MASTER LOGGED IN PROPERTY -- REMOVE
  private loginInfo = new BehaviorSubject<boolean>(false);
  swtch = this.loginInfo.asObservable();

  //LOGGED IN USER -- UNNECCESSARY?
  private loggedUser = new ReplaySubject<User>();
  user = this.loggedUser.asObservable();

  switchLoggedIn(swtch: boolean) {
    this.loginInfo.next(swtch)
  }

  register(user: User) {
    user.Permission = 0;
    console.log(JSON.stringify(user))
    return this.client.post(this.Url + `UserInfo/PostUsers`, user);
  }

  Login(login: Login): Observable<User> {
  //  debugger;
    return this.client.post<User>(this.Url + "UserInfo/Login", login)
      .pipe(tap(data => console.log(data)))
  }

  Servicelogin(s: boolean, loggedUser: User) {
   // this.loginInfo.next(s)
    if (s == false) {
      //  localStorage.clear();
      localStorage.removeItem('currentUser');
      this.messageService.specificMessage("Logged out", `so long!`, 'info')
    }
    else {
      localStorage.setItem('currentUser', JSON.stringify(loggedUser));
      this.messageService.specificMessage("Login succeeded!", `hello ${loggedUser.UserName}!`, 'success');
    }
    this.loggedUser.next(loggedUser)
    this.switchLoggedIn(s)
  }
}
