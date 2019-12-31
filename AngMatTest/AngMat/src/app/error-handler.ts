import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService, CarMessage } from './services/message.service';

@Injectable()
export class CarErrorHandler implements ErrorHandler {

  constructor(private messageService: MessageService) { }


  handleError(error: any): void {
    console.log(error)
    var m: CarMessage = new CarMessage("An error has occurred!", ``);
    this.messageService.changeMessage(m)
  }
}
