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

export class CarDisplayDTO {
  CarId: number;
  CarTypeId: number;
  Mileage: number;
  PictureUrl: string;
  FitForRental: boolean;
  Available: boolean;
  CarNumber: number;
  BranchId: number;
  Pic?: File;
}
