import { Component, OnInit } from '@angular/core';
import { MessageService, CarMessage } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    var m: CarMessage = new CarMessage("Welcome!", `I, mailChimp, will manage messages and errorhandling here`);
    this.messageService.changeMessage(m)
  }
  assets: string = `./../../assets/`;
  logo: string = `5thWheel6.png`;
  car1: string = `Bugatti_Divo.jpg`;
  car2: string = `lamborghini-huracans-mountains.jpg`;
  car3: string = `Maserati.jpg`;
}
