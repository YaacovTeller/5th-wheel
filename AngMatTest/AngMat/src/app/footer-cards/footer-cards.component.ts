import { Component, OnInit } from '@angular/core';
import { Car } from '../Classes/Car';

@Component({
  selector: 'app-footer-cards',
  templateUrl: './footer-cards.component.html',
  styleUrls: ['./footer-cards.component.scss']
})
export class FooterCardsComponent implements OnInit {

  carsOfInterest: Car[] = [];
  displayWanted: boolean = true;

  constructor() { }

  ngOnInit() {
   setInterval(()=>this.fetchFromStorage(),1500)
   
  }

  fetchFromStorage() {
    var temp = JSON.parse(localStorage.getItem("carsOfInterest"));
    if (temp) this.carsOfInterest = temp;
  }
  toggleHide() {
    this.displayWanted = this.displayWanted ? false : true;
  }
}
