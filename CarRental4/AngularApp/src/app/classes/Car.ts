import { CarType, Gear } from './CarType';
import { Branch } from './Branch';

export class Car {
  CarId: number;
  Mileage: number;
  PictureUrl: string;
  FitForRental: boolean;
  Available: boolean;
  CarNumber: number;
  CarTypeId: number;
  BranchId: number;
  Branch: Branch;
  CarType: CarType;
  Pic?: File;
}

//export class Car {
//  CarId: number;
//  CarTypeId: number;
//  Mileage: number;
//  PictureUrl: string;
//  FitForRental: boolean;
//  Available: boolean;
//  CarNumber: number;
//  BranchId: number;
//  Pic?: File;
//}

export class Car_Branch_Type {
  CarId: number;
  Mileage: number;
  PictureUrl: string;
  FitForRental: boolean;
  Available: boolean;
  CarNumber: number;
  BranchId: number;
  Address: string;
  CarTypeId: number;
  Manufacturer: string;
  Model: string;
  PricePerDay: number;
  PricePerDayOver: number;
  YearOfManufacture: number;
  Transmission: Gear;
  carTypePicture: string;

  Pic?: File;
}
