import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable, throwError, from } from 'rxjs';
import { Car } from '../Classes/Car';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CarType } from '../Classes/CarType';
import { tap, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { log } from 'console';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  Url: string = environment.Url
  constructor(private client: HttpClient) { }

  getCarTypes(): Observable<CarType[]> {
    return this.client.get<CarType[]>(this.Url + "CarInfo/GetCarTypes", httpOptions)
      .pipe(tap(data => console.log(data),
       err => console.log('HTTP Error', err)
    ));
  }
  getstring(): Observable<string> {
    return this.client.get<string>(this.Url + "CarInfo/Getstr")
      .pipe(tap(data => console.log(data),
        err => console.log('HTTP Error', err)
      ))
  }
  findCarTypes(id: number): Observable<CarType> {
    return this.client.get<CarType>(this.Url + "CarInfo/FindCarTypes?id=" + id)
  }
  findCar(id: number): Observable<Car> {
    return this.client.get<Car>(this.Url + "CarInfo/FindCar/" + id)
  }

  deleteCarTypes(id: number): Observable<CarType> {
    return this.client.delete<CarType>(this.Url + "CarInfo/DeleteCarTypes?id=" + id)
    
  }
  deleteCars(id: number): any {
    return this.client.delete<Car>(this.Url + "CarInfo/DeleteCars?id=" + id)
      .pipe(tap(_ => console.log(`deleted no. ${id}`)),
    );
  }

  getCars(): Observable<Car[]> {
    return this.client.get<Car[]>(this.Url + "CarInfo/GetCars", httpOptions)
      .pipe(tap(data => console.log(/*JSON.stringify(data)*/)),
    //errors
    );
  }

  private carTypeDelivery = new ReplaySubject<CarType>();
  carType = this.carTypeDelivery.asObservable();

  private carDelivery = new ReplaySubject<Car>();
  car = this.carDelivery.asObservable();


  changeCar(car: Car) {
     this.carDelivery.next(car)
  }

  changeCarType(carType: CarType) {
    this.carTypeDelivery.next(carType)
  }

  //uploadImage(image) {
  //  return this.client.post<File>(this.Url + "Image/UploadImage", image)
  //}
  uploadImage(image: File) {
    const formData: FormData = new FormData();
    formData.append('fileKey', image, image.name);
    //this.getstring().subscribe(
    //  res => console.log('str response', res),
    //  err => console.log('str Error', err),
    //  () => console.log('str request completed.')
    //);

    return this.client.post<File>(this.Url + "Image/UploadImage", image)
      .subscribe(
        res => console.log('UploadImage response', res),
        err => console.log('UploadImage Error', err),
        () => console.log('UploadImage request completed.')
    );
  }

  editCar(car: Car) {
    return this.client.put<Car>(this.Url + "CarInfo/PutCars", car)
      .pipe(tap(data => console.log(/*JSON.stringify(data, null, 2)*/)),
        //    catchError();
      );
  }
  editCarType(carType: CarType) {
    return this.client.put<CarType>(this.Url + "CarInfo/PutCarTypes", carType)
      .pipe(tap(data => console.log(/*JSON.stringify(data, null, 2)*/)),
        //    catchError();
      );
  }
  newCarType(carType: CarType) {
    return this.client.post<CarType>(this.Url + "CarInfo/PostCarTypes", carType)
      .pipe(tap(data => console.log(/*JSON.stringify(data, null, 2)*/)),
        //    catchError();
      );
  }
  newCar(car: Car) {
    return this.client.post<Car>(this.Url + "CarInfo/PostCars", car)
      .pipe(tap(data => console.log(/*JSON.stringify(data, null, 2)*/)),
        //    catchError();
      );
  }
}
