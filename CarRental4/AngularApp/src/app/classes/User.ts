export class User {
  UserId: number;
  Fullname: string;
  PassportNumber: number;
  UserName: string;
  Birthdate: Date;
  Gender: Gender;
  Email: string;
  Password: string;
  PictureUrl: string;
  Permission: number;
}

export enum Gender{
  male,
  Female,
  Both,
  Neither,
  Undecided
}
