export class CarType {
  CarTypeId: number;
  Manufacturer: string;
  Model: string;
  PricePerDay: number;
  PricePerDayOver: number;
  YearOfManufacture: number;
  Transmission: Gear;
  PictureUrl: string;
}
export enum Gear {
  automatic,
  manual
}
