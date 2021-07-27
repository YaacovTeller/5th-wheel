import { Component, OnInit } from '@angular/core';
import { MessageService, CarMessage } from '../services/message.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.specificMessage("Welcome!", environment.greeting )
  }
  assets: string = `./../../assets/`;
  logo: string = `5thWheel6.png`;
  car1: string = `Bugatti_Divo.jpg`;
  car2: string = `lamborghini-huracans-mountains.jpg`;
  car3: string = `Maserati.jpg`;
}
