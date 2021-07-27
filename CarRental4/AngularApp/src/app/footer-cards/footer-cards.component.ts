import { Component, OnInit } from '@angular/core';
import { Car } from '../Classes/Car';

@Component({
  selector: 'app-footer-cards',
  templateUrl: './footer-cards.component.html',
  styleUrls: ['./footer-cards.component.scss']
})
export class FooterCardsComponent implements OnInit {

  carFolder: string = `./../../assets/cars/`;
  carsOfInterest: Car[] = [];
  displayWanted: boolean = true;
  currentCars: number;

  constructor() { }

  ngOnInit() {
    this.currentCars = 0;
    setInterval(() => this.fetchFromStorage(), 1500)

  }

  fetchFromStorage() {
    var temp = JSON.parse(localStorage.getItem("carsOfInterest"));
    if (temp && temp.length > this.currentCars) {
      this.carsOfInterest = temp;
      this.currentCars = temp.length;
    }
  }
  toggleHide() {
    this.displayWanted = this.displayWanted ? false : true;
  }
}
