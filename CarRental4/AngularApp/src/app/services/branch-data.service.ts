import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Branch } from '../Classes/Branch';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BranchDataService {

  Url: string = environment.Url;

  constructor(private client: HttpClient) { }

  getBranches(): Observable<Branch[]> {
    return this.client.get<Branch[]>(this.Url + "BranchInfo/GetBranches")
      .pipe(tap(data => console.log(JSON.stringify(data, null, 2))),
       // error => { console.log(error) }
    );
      //.subscribe(
      //  res => console.log('UploadImage response', res),
      //  err => console.log('UploadImage Error', err),
      //  () => console.log('UploadImage request completed.')
      //);
      //errors
  }
}
