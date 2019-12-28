import { User } from './User';
import { Car } from './Car';

export class Rental {
  RentalsId: number;
  StartDate: Date;
  EndDate: Date;
  Returned: Date;
  User: User;
  Car: Car;

  constructor(StartDate, EndDate, User, Car) {
    this.StartDate = StartDate;
    this.EndDate = EndDate;
    this.User = User;
    this.Car = Car;
  }
}
