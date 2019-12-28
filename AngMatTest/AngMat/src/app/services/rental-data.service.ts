import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rental } from '../Classes/Rental';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentalDataService {

  Url: string = "http://localhost:64825/api/"

  constructor(private client: HttpClient) { }

  getRentals(): Observable<Rental[]> {
    return this.client.get<Rental[]>(this.Url + "RentalInfo/GetRentals")
      .pipe(tap(data => console.log(/*JSON.stringify(data, null, 2)*/)), 
        //errors
      );
  }

  rent(rental: Rental) {
    console.log(rental)
    return this.client.post<Rental>(this.Url + "RentalInfo/PostRentals", rental)
      .pipe(tap(data => console.log(JSON.stringify(data, null, 2))),
      );
  }

  return(rental: Rental) {
    return this.client.put<Rental>(this.Url + "RentalInfo/PutRentals", rental)
      .pipe(tap(data => console.log(JSON.stringify(data, null, 2))),
    //    catchError();
        );
  }
}
