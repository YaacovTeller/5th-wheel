import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/classes/Rental';
import { RentalDataService } from 'src/app/services/rental-data.service';
import { MessageService } from 'src/app/services/message.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-view-rentals',
  templateUrl: './view-rentals.component.html',
  styleUrls: ['./view-rentals.component.scss']
})
export class ViewRentalsComponent implements OnInit {

  rentals: Rental[];
  sortedRentals: Rental[];

  constructor(
    private rentalService: RentalDataService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.rentalService.getRentals().subscribe(
      rentals => {
        this.sortedRentals = this.rentals = rentals;
             console.log(/*JSON.stringify(this.sortedRentals, null, 2)*/)
      })
  }
  //Rentals table sort function
  sortData(sort: Sort) {
    const data = this.rentals;
    if (!sort.active || sort.direction === '') {
      this.sortedRentals = data;
      return;
    }

    this.sortedRentals = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'RentalId': return compare(a.RentalsId, b.RentalsId, isAsc);
        case 'UserId': return compare(a.User.UserId, b.User.UserId, isAsc);
        case 'Username': return compare(a.User.UserName, b.User.UserName, isAsc);
        case 'RentalsId': return compare(a.RentalsId, b.RentalsId, isAsc);
        case 'StartDate': return compare(a.StartDate, b.StartDate, isAsc);
        case 'DueBackDate': return compare(a.EndDate, b.EndDate, isAsc);
        case 'ReturnedDate': return compare(a.Returned, b.Returned, isAsc);
        case 'CarId': return compare(a.Car.CarId, b.Car.CarId, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
