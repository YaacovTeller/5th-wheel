import { Component, OnInit } from '@angular/core';
import { map, distinct } from 'rxjs/operators';
import { CarDataService } from '../services/car-data.service';
import { Car } from '../Classes/Car';
import { CarType, Gear } from '../Classes/CarType';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { MessageService, CarMessage } from '../services/message.service';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.scss']
})
export class SearchCarsComponent implements OnInit {

  fallbackLogo: string = './../../assets/fallbackImages/BrandName.jpg';
  carTypeFolder: string = `./../../assets/carTypes/`;
  carFolder: string = `./../../assets/cars/`;
  allcarTypeData: CarType[] = [];
  reducedModels:  CarType[] = [];
  allCarData:     Car[]     = [];
  Manufacturers:  string[]  = [];
  Years:          number[]  = [];
  displayTypes:   CarType[] = [];
  displayCars:    Car[]     = [];

  availableCars: Car[] = [];
  selected: any = {};
  loggedIn: boolean;
  switch: any = {
    Manual: true,
    Automatic: true,
    Unavailable: true,
  }
  defaultCheck: boolean = true;
  AllCarsView: boolean = true;

  constructor(
    private carService: CarDataService,
    private router: Router,
    private userService: UserDataService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(
      carData => {
        this.displayCars = this.allCarData = carData;
        this.availableCars = this.allCarData.filter(a => a.Available)
      }
    );
    this.carService.getCarTypes().subscribe(
      carTypeData => {
        this.displayTypes = this.reducedModels = this.allcarTypeData = carTypeData;
        this.Manufacturers = this.allcarTypeData.map(x => x.Manufacturer).filter((x, i, a) => a.indexOf(x) == i)
        this.Years = this.allcarTypeData.map(x => x.YearOfManufacture).filter((x, i, a) => a.indexOf(x) == i).sort()
      }
    );
    this.userService.swtch.subscribe(swtch => { this.loggedIn = swtch })

  }
 
  change() {
    this.selected.Model = "";
    if (this.selected.Manufacturer) {    
      this.reducedModels = this.allcarTypeData.filter(c => c.Manufacturer == this.selected.Manufacturer)
      this.displayTypes = this.reducedModels;
    }
    else this.reducedModels = this.displayTypes = this.allcarTypeData
    if (this.AllCarsView == false) {
      this.toggle();
    }
    else this.toggle2();
  }

  toggle() {

    let tempCars = this.allcarTypeData;
    if (this.selected.Manufacturer) {
      tempCars = tempCars.filter(c => c.Manufacturer == this.selected.Manufacturer)
    }
    if (this.selected.Model) {
      tempCars = tempCars.filter(c => c.Model == this.selected.Model)
    }
    if (this.selected.Year) {
      tempCars = tempCars.filter(c => c.YearOfManufacture == this.selected.Year)
    }
    tempCars = this.switch.Manual == false ? tempCars.filter(c => c.Transmission.toString() == Gear[0]) : tempCars.filter(c => c)
    tempCars = this.switch.Automatic == false ? tempCars.filter(c => c.Transmission.toString() == Gear[1]) : tempCars.filter(c => c)
    tempCars = this.switch.Unavailable == false ? tempCars.filter(c => this.availableCars.find(a => a.CarType.Model == c.Model)) : tempCars.filter(c => c)
    if (this.selected.Text) {
      tempCars = tempCars.filter(
        c => c.Model.toLowerCase().includes(this.selected.Text) || c.Manufacturer.toLowerCase().includes(this.selected.Text)
      )
    }
    this.displayTypes = tempCars;
  }
  toggle2() {
    let tempCars = this.allCarData;
    if (this.selected.Manufacturer) {
      tempCars = tempCars.filter(c => c.CarType.Manufacturer == this.selected.Manufacturer)
    }
    if (this.selected.Model) {
      tempCars = tempCars.filter(c => c.CarType.Model == this.selected.Model)
    }
    if (this.selected.Year) {
      tempCars = tempCars.filter(c => c.CarType.YearOfManufacture == this.selected.Year)
    }
    tempCars = this.switch.Manual == false ? tempCars.filter(c => c.CarType.Transmission.toString() == Gear[0]) : tempCars.filter(c => c)
    tempCars = this.switch.Automatic == false ? tempCars.filter(c => c.CarType.Transmission.toString() == Gear[1]) : tempCars.filter(c => c)
    tempCars = this.switch.Unavailable == false ? tempCars.filter(c => c.Available == true) : tempCars.filter(c => c)
    if (this.selected.Text) {
      tempCars = tempCars.filter(
        c => c.CarType.Model.toLowerCase().includes(this.selected.Text) || c.CarType.Manufacturer.toLowerCase().includes(this.selected.Text)
      )
    }
    this.displayCars = tempCars;
  }

  rent(CarType) {
    console.log(this.loggedIn)
    if (this.loggedIn) {
      this.router.navigateByUrl('/rentals');
    }
    else {
      this.router.navigateByUrl('/login');
      var m: CarMessage = new CarMessage("No logged user", `Please login, or register if you are not yet a member`);
      this.messageService.changeMessage(m)
    }
    this.carService.changeCarType(CarType);
  }
  rentals_allCars() {
    this.AllCarsView = this.AllCarsView ? false : true;
    //this.router.navigateByUrl('/rentals');
  }
}


