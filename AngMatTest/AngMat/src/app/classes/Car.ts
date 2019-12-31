import { CarType } from './CarType';
import { Branch } from './Branch';

export class Car {
  CarId: number;
  CarType: CarType;
  Mileage: number;
  PictureUrl: string;
  FitForRental: boolean;
  Available: boolean;
  CarNumber: number;
  Branch: Branch;
}
